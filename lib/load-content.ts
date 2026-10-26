import { unstable_cache } from "next/cache";
import fs from "fs";
import path from "path";
import type { TinaQuery } from "@/components/content";

const contentRoot = path.join(process.cwd(), "content");

function readJson<T>(relativePath: string): T {
  const file = path.join(contentRoot, relativePath);
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

function staticQuery(key: string, value: unknown, relativePath: string): TinaQuery {
  return {
    data: { [key]: value },
    query: "",
    variables: { relativePath },
  };
}

function useDatabase() {
  return process.env.TINA_PUBLIC_IS_LOCAL !== "true" && Boolean(process.env.KV_REST_API_URL);
}

async function tina() {
  if (useDatabase()) {
    const { default: client } = await import("@/tina/__generated__/databaseClient");
    return client;
  }
  const { client } = await import("@/tina/__generated__/client");
  return client;
}

function fromDatabase<T>(key: string[], load: () => Promise<T>) {
  return unstable_cache(load, ["tina-content", ...key], {
    revalidate: 60,
    tags: ["tina-content"],
  })();
}

export async function loadSite() {
  if (useDatabase()) {
    return fromDatabase(["site"], () => tina().then((client) => client.queries.site({ relativePath: "global.json" })));
  }
  if (process.env.TINA_PUBLIC_IS_LOCAL === "true") {
    return (await tina()).queries.site({ relativePath: "global.json" });
  }
  return staticQuery("site", readJson("site/global.json"), "global.json");
}

export async function loadHome() {
  if (useDatabase()) {
    return fromDatabase(["home"], () => tina().then((client) => client.queries.home({ relativePath: "index.json" })));
  }
  if (process.env.TINA_PUBLIC_IS_LOCAL === "true") {
    return (await tina()).queries.home({ relativePath: "index.json" });
  }
  return staticQuery("home", readJson("home/index.json"), "index.json");
}

export async function loadPage(relativePath: string) {
  if (useDatabase()) {
    return fromDatabase(["page", relativePath], () => tina().then((client) => client.queries.page({ relativePath })));
  }
  if (process.env.TINA_PUBLIC_IS_LOCAL === "true") {
    return (await tina()).queries.page({ relativePath });
  }
  const filename = relativePath.replace(/\.json$/, "");
  return staticQuery("page", readJson(`pages/${relativePath}`), filename);
}

export async function loadNewsletters() {
  const dir = path.join(contentRoot, "newsletters");
  const edges = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filename = file.replace(/\.json$/, "");
      const node = readJson<{ order?: number }>(`newsletters/${file}`);
      return { node: { ...node, _sys: { filename } }, order: node.order || 0 };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ node }) => ({ node }));
  return staticQuery("newsletterConnection", { edges }, "newsletters");
}

export async function loadNewsletter(slug: string) {
  const relativePath = `${slug}.json`;
  const node = readJson<Record<string, unknown>>(`newsletters/${relativePath}`);
  return staticQuery("newsletter", { ...node, _sys: { filename: slug } }, relativePath);
}
