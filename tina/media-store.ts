import { upload } from "@vercel/blob/client";

type UploadInput = {
  directory: string;
  file: File;
};

function safeName(name: string) {
  const base = name.split(/[/\\]/).pop() || "file";
  const cleaned = base.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^[-.]+/, "");
  return cleaned.slice(0, 120) || "file";
}

function mediaItem(filename: string, src: string, directory: string) {
  return {
    type: "file" as const,
    id: src,
    filename,
    directory,
    src,
    thumbnails: {
      "75x75": src,
      "400x400": src,
      "1000x1000": src,
    },
  };
}

export class DezininMediaStore {
  accept = "image/*,video/mp4,video/webm,video/quicktime,application/pdf";

  async persist(files: UploadInput[]) {
    const saved = [];
    for (const entry of files) {
      const filename = safeName(entry.file.name);
      const blob = await upload(`media/${filename}`, entry.file, {
        access: "public",
        handleUploadUrl: "/api/media",
        multipart: entry.file.size > 8 * 1024 * 1024,
      });
      saved.push(mediaItem(filename, blob.url, entry.directory || ""));
    }
    return saved;
  }

  async list(options: { directory?: string; offset?: number | string; limit?: number; search?: string; ext?: string[] } = {}) {
    const params = new URLSearchParams();
    if (options.directory) params.set("directory", options.directory);
    if (options.offset) params.set("offset", String(options.offset));
    if (options.limit) params.set("limit", String(options.limit));
    if (options.search) params.set("search", options.search);
    if (options.ext?.length) params.set("ext", options.ext.join(","));
    const response = await fetch(`/api/media?${params}`);
    if (response.status === 401) throw new Error("You don't have access to this resource.");
    if (!response.ok) throw new Error("Could not load media.");
    return response.json();
  }

  async delete(media: { src?: string }) {
    const response = await fetch("/api/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src: media.src }),
    });
    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      throw new Error(body?.error || "Could not delete the file.");
    }
  }
}
