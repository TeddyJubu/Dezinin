import { getServerSession } from "next-auth/next";
import { TinaAuthJSOptions } from "tinacms-authjs";
import databaseClient from "@/tina/__generated__/databaseClient";

export function editorAuthOptions() {
  return TinaAuthJSOptions({
    databaseClient,
    secret: process.env.NEXTAUTH_SECRET || "",
  });
}

export async function editorIsSignedIn() {
  const session = await getServerSession(editorAuthOptions());
  const user = session?.user as { role?: string } | undefined;
  return user?.role === "user";
}
