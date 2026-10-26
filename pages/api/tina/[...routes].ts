import { LocalBackendAuthProvider, TinaNodeBackend } from "@tinacms/datalayer";
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from "tinacms-authjs";
import type { NextApiRequest, NextApiResponse } from "next";
import databaseClient from "../../../tina/__generated__/databaseClient";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient,
          secret: process.env.NEXTAUTH_SECRET || "",
        }),
      }),
  databaseClient,
});

function isContentMutation(query: unknown) {
  return typeof query === "string" && /\b(updateDocument|createDocument|deleteDocument)\b/.test(query);
}

export default async function tinaApi(req: NextApiRequest, res: NextApiResponse) {
  const shouldRefresh = req.method === "POST" && isContentMutation(req.body?.query);
  await handler(req, res);
  if (!shouldRefresh || res.statusCode >= 400) return;
  const hostHeader = req.headers["x-forwarded-host"] || req.headers.host;
  const protoHeader = req.headers["x-forwarded-proto"] || "https";
  const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
  const proto = Array.isArray(protoHeader) ? protoHeader[0] : protoHeader;
  if (!host || !process.env.NEXTAUTH_SECRET) return;
  await fetch(`${proto}://${host}/api/revalidate`, {
    method: "POST",
    headers: { "x-revalidate-secret": process.env.NEXTAUTH_SECRET },
  }).catch(() => undefined);
}
