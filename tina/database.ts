import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { FilesystemBridge, type Bridge, type Level } from "@tinacms/graphql";
import { Redis } from "@upstash/redis";
import { RedisLevel } from "upstash-redis-level";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

function productionDatabase() {
  const redis = new Redis({
    url: process.env.KV_REST_API_URL || "http://localhost:8079",
    token: process.env.KV_REST_API_TOKEN || "example_token",
    automaticDeserialization: false,
  });
  const disk = new FilesystemBridge(process.cwd());
  const filesKey = "dezinin:files";
  const fileKey = (filepath: string) => `dezinin:file:${filepath}`;

  function safePath(filepath: string) {
    const normalized = filepath.replace(/\\/g, "/").replace(/^\/+/, "");
    if (normalized.includes("..")) {
      throw new Error("Path traversal detected");
    }
    return normalized;
  }

  const bridge: Bridge = {
    rootPath: process.cwd(),
    async glob(pattern: string, extension: string) {
      const ext = extension.startsWith(".") ? extension : `.${extension}`;
      const fromDisk = await disk.glob(pattern, extension);
      const extra = (await redis.smembers(filesKey)) || [];
      const prefix = pattern.replace(/\*+$/, "").replace(/\/$/, "");
      const merged = new Set(fromDisk);
      for (const file of extra) {
        if ((file === prefix || file.startsWith(`${prefix}/`)) && file.endsWith(ext)) {
          merged.add(file);
        }
      }
      return [...merged];
    },
    async get(filepath: string) {
      const key = safePath(filepath);
      const stored = await redis.get<string>(fileKey(key));
      if (typeof stored === "string") return stored;
      return disk.get(key);
    },
    async put(filepath: string, data: string) {
      const key = safePath(filepath);
      await redis.set(fileKey(key), data);
      await redis.sadd(filesKey, key);
    },
    async delete(filepath: string) {
      const key = safePath(filepath);
      await redis.del(fileKey(key));
      await redis.srem(filesKey, key);
    },
  };

  return createDatabase({
    bridge,
    gitProvider: {
      onPut: (key, value) => bridge.put(key, value),
      onDelete: (key) => bridge.delete(key),
    },
    databaseAdapter: new RedisLevel<string, Record<string, unknown>>({
      redis: {
        url: process.env.KV_REST_API_URL || "http://localhost:8079",
        token: process.env.KV_REST_API_TOKEN || "example_token",
      },
      debug: false,
    }) as unknown as Level,
    namespace: branch,
    authCollection: { admins: ["admin"] },
  });
}

export default isLocal ? createLocalDatabase() : productionDatabase();
