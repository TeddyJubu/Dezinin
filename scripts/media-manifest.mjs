import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");
const allowed = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif", ".mp4", ".webm", ".pdf"]);
const skip = new Set(["admin", "vendor"]);
const records = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (directory === root && skip.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (!allowed.has(path.extname(entry.name).toLowerCase())) continue;
    const relative = path.relative(root, fullPath).split(path.sep).join("/");
    const slash = relative.lastIndexOf("/");
    records.push({
      directory: slash === -1 ? "" : relative.slice(0, slash),
      filename: slash === -1 ? relative : relative.slice(slash + 1),
      src: `/${relative}`,
    });
  }
}

await walk(root);
records.sort((a, b) => a.src.localeCompare(b.src));
await writeFile(path.resolve("lib/media-manifest.json"), `${JSON.stringify(records, null, 2)}\n`);
