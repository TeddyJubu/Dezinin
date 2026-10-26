"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function PrefetchRoutes({ hrefs }: { hrefs: string[] }) {
  const router = useRouter();
  const list = hrefs.filter(Boolean).join("\n");

  useEffect(() => {
    const unique = [...new Set(list.split("\n").filter(Boolean))];
    const warm = () => unique.forEach((href) => router.prefetch(href));
    const id = window.setTimeout(warm, 150);
    return () => window.clearTimeout(id);
  }, [router, list]);

  return null;
}
