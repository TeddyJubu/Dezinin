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

export type MediaFolder = {
  type: "dir";
  id: string;
  directory: string;
  filename: string;
};

const thumbnailSizes = ["75x75", "400x400", "1000x1000"];

export function mediaFile(filename: string, src: string, directory = ""): MediaFile {
  return {
    type: "file",
    id: src,
    directory,
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

function uploadedFile(pathname: string, src: string) {
  const relative = pathname.replace(/^media\//, "");
  const slash = relative.lastIndexOf("/");
  const directory = slash === -1 ? "" : relative.slice(0, slash);
  const filename = slash === -1 ? relative : relative.slice(slash + 1);
  return mediaFile(filename, src, directory);
}

export async function mediaLibrary() {
  const existing = manifest.map((file) => mediaFile(file.filename, file.src, file.directory));
  const uploaded: MediaFile[] = [];
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    let cursor: string | undefined;
    do {
      const page = await list({ prefix: "media/", cursor, limit: 1000 });
      for (const blob of page.blobs) uploaded.push(uploadedFile(blob.pathname, blob.url));
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
  }
  return [...uploaded, ...existing].sort((a, b) => a.filename.localeCompare(b.filename));
}

function displayDirectory(file: MediaFile) {
  if (file.directory) return file.directory;
  const extension = file.filename.split(".").pop()?.toLowerCase() || "";
  if (extension === "pdf") return "pdf";
  if (extension === "mp4" || extension === "webm" || extension === "mov") return "video";
  if (["jpg", "jpeg", "png", "gif", "webp", "avif", "svg"].includes(extension)) return "images";
  return "";
}

export function browseMedia(
  files: MediaFile[],
  options: {
    directory?: string;
    offset?: number;
    limit?: number;
    search?: string;
    extensions?: string[];
    filesOnly?: boolean;
  } = {},
) {
  const filesInFolders = files.map((file) => ({ ...file, directory: displayDirectory(file) }));
  const directory = (options.directory || "").replace(/^\/+|\/+$/g, "");
  const search = (options.search || "").trim().toLowerCase();
  const extensions = (options.extensions || []).map((extension) => extension.toLowerCase().replace(/^\./, "")).filter(Boolean);
  const limit = options.limit ?? 36;
  const offset = Number(options.offset) || 0;
  const flat = Boolean(options.filesOnly || search);

  const visible = filesInFolders.filter((file) => {
    if (extensions.length) {
      const extension = file.filename.split(".").pop()?.toLowerCase() || "";
      if (!extensions.includes(extension)) return false;
    }
    if (search) {
      const path = `${file.directory}/${file.filename}`.toLowerCase();
      if (!file.filename.toLowerCase().includes(search) && !path.includes(search)) return false;
    }
    if (flat || !directory) return true;
    return file.directory === directory || file.directory.startsWith(`${directory}/`);
  });

  const items: Array<MediaFile | MediaFolder> = [];
  if (flat) {
    items.push(...visible);
  } else {
    const folders = new Map<string, MediaFolder>();
    for (const file of visible) {
      if (file.directory === directory) {
        items.push(file);
        continue;
      }
      const rest = directory ? file.directory.slice(directory.length + 1) : file.directory;
      const name = rest.split("/")[0];
      if (!name || folders.has(name)) continue;
      const id = directory ? `${directory}/${name}` : name;
      folders.set(name, { type: "dir", id, directory, filename: name });
    }
    items.unshift(...folders.values());
  }

  items.sort((a, b) => {
    if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
    return a.filename.localeCompare(b.filename);
  });
  return {
    items: items.slice(offset, offset + limit),
    nextOffset: offset + limit < items.length ? offset + limit : null,
  };
}
