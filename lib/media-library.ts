import { list } from "@vercel/blob";
import manifest from "./media-manifest.json";

export type MediaFile = {
  type: "file";
  id: string;
  directory: string;
  filename: string;
  src: string;
  thumbnails: Record<string, string>;
};

const thumbnailSizes = ["75x75", "400x400", "1000x1000"];

export function mediaFile(filename: string, src: string): MediaFile {
  return {
    type: "file",
    id: src,
    directory: "",
    filename,
    src,
    thumbnails: Object.fromEntries(thumbnailSizes.map((size) => [size, src])),
  };
}

export function isUploadedMedia(src: string) {
  try {
    return new URL(src).hostname.endsWith(".blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export async function mediaLibrary() {
  const existing = manifest.map((file) => mediaFile(file.src.slice(1), file.src));
  const uploaded: MediaFile[] = [];
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    let cursor: string | undefined;
    do {
      const page = await list({ prefix: "media/", cursor, limit: 1000 });
      for (const blob of page.blobs) {
        const filename = blob.pathname.replace(/^media\//, "");
        uploaded.push(mediaFile(filename, blob.url));
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
  }
  return [...uploaded, ...existing].sort((a, b) => a.filename.localeCompare(b.filename));
}
