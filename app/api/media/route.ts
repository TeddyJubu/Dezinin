import { del } from "@vercel/blob";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { editorIsSignedIn } from "@/lib/editor-session";
import { browseMedia, isUploadedMedia, mediaLibrary } from "@/lib/media-library";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedContentTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/svg+xml",
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "application/pdf",
];

export async function GET(request: Request) {
  if (!(await editorIsSignedIn())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(request.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") || 36), 1), 100);
  const extensions = (url.searchParams.get("ext") || "")
    .split(",")
    .map((extension) => extension.trim().toLowerCase().replace(/^\./, ""))
    .filter(Boolean);
  return Response.json(
    browseMedia(await mediaLibrary(), {
      directory: url.searchParams.get("directory") || "",
      offset: Number(url.searchParams.get("offset") || 0),
      limit,
      search: url.searchParams.get("search") || "",
      extensions,
      filesOnly: url.searchParams.get("filesOnly") === "true",
    }),
  );
}

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody;
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!(await editorIsSignedIn())) throw new Error("Unauthorized");
        if (!pathname.startsWith("media/") || pathname.includes("..")) throw new Error("Invalid upload path");
        return {
          allowedContentTypes,
          addRandomSuffix: true,
          maximumSizeInBytes: 100 * 1024 * 1024,
        };
      },
      onUploadCompleted: async () => undefined,
    });
    return Response.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return Response.json({ error: message }, { status: message === "Unauthorized" ? 401 : 400 });
  }
}

export async function DELETE(request: Request) {
  if (!(await editorIsSignedIn())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as { src?: string };
  if (!body.src || !isUploadedMedia(body.src)) {
    return Response.json({ error: "Only uploaded files can be removed." }, { status: 400 });
  }
  await del(body.src);
  return Response.json({ ok: true });
}
