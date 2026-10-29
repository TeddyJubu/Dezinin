"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mediaUrl, type NewsletterContent } from "./content";

function pageLabel(total: number) {
  if (!total) return "Presentation";
  return `Presentation · ${total} ${total === 1 ? "page" : "pages"}`;
}

export function LookbookListing({ item }: { item: NewsletterContent }) {
  const router = useRouter();
  const stripRef = useRef<HTMLDivElement>(null);
  const pdf = mediaUrl(item.pdf);
  const cover = mediaUrl(item.cover);
  const [pages, setPages] = useState<string[]>([]);
  const [ratios, setRatios] = useState<number[]>([]);
  const [coverRatio, setCoverRatio] = useState(1);
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const shown = pages[active] || cover;
  const ratio = ratios[active] || coverRatio;
  const portrait = ratio < 1;

  useEffect(() => {
    if (!pdf) return;
    let cancel = false;
    const render = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
        const doc = await pdfjs.getDocument({ url: pdf }).promise;
        if (cancel) return;
        setTotal(doc.numPages);
        for (let number = 1; number <= doc.numPages; number += 1) {
          const page = await doc.getPage(number);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: Math.min(1.6, 1200 / base.width) });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) continue;
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          await page.render({ canvasContext: context, viewport }).promise;
          if (cancel) return;
          const src = canvas.toDataURL("image/jpeg", 0.84);
          const pageRatio = viewport.height ? viewport.width / viewport.height : 1;
          setPages((current) => {
            const next = current.slice();
            next[number - 1] = src;
            return next;
          });
          setRatios((current) => {
            const next = current.slice();
            next[number - 1] = pageRatio;
            return next;
          });
        }
      } catch {
        if (!cancel) setTotal(0);
      }
    };
    void render();
    return () => {
      cancel = true;
    };
  }, [pdf]);

  const close = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (expanded) {
        setExpanded(false);
        return;
      }
      close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const count = Math.max(total, pages.length);
  const scrollStrip = (direction: -1 | 1) => {
    stripRef.current?.scrollBy({
      left: portrait ? 0 : direction * 160,
      top: portrait ? direction * 160 : 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-24 md:px-8">
      <section className="lookbook-sheet mx-auto" style={portrait ? { ["--page-ratio" as string]: String(ratio) } : undefined}>
        <div className={portrait ? "lookbook-visual is-portrait" : "lookbook-visual"}>
          <figure className="relative">
            {shown ? (
              <img
                src={shown}
                alt={item.title || ""}
                className="lookbook-page"
                onLoad={(event) => {
                  const image = event.currentTarget;
                  if (!ratios[active] && image.naturalWidth && image.naturalHeight) {
                    setCoverRatio(image.naturalWidth / image.naturalHeight);
                  }
                }}
              />
            ) : null}
            {shown ? (
              <button
                type="button"
                aria-label="Expand page"
                onClick={() => setExpanded(true)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/10 bg-zinc-900 text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
                </svg>
              </button>
            ) : null}
          </figure>
          {count > 0 ? (
            <div className="lookbook-rail flex items-center gap-3 border-t border-border px-4 py-3">
              <button
                type="button"
                aria-label="Previous pages"
                onClick={() => scrollStrip(-1)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={portrait ? "m6 15 6-6 6 6" : "M15 6 9 12l6 6"} />
                </svg>
              </button>
              <div ref={stripRef} className="lookbook-strip">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Page ${index + 1}`}
                    aria-current={active === index ? "true" : undefined}
                    onClick={() => setActive(index)}
                    className="lookbook-thumb"
                    style={ratios[index] ? { aspectRatio: String(ratios[index]) } : undefined}
                  >
                    {pages[index] ? <img src={pages[index]} alt="" /> : null}
                  </button>
                ))}
              </div>
              <button
                type="button"
                aria-label="Next pages"
                onClick={() => scrollStrip(1)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={portrait ? "m6 9 6 6 6-6" : "m9 6 6 6-6 6"} />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
        <div className="lookbook-copy p-6 md:px-8 md:py-8">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-robotoSlab text-sm text-brand-orange">
                {String(active + 1).padStart(2, "0")}
                <span className="text-muted-foreground"> / {String(Math.max(count, 1)).padStart(2, "0")}</span>
              </p>
              <button type="button" aria-label="Close" onClick={close} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:border-brand-orange hover:text-brand-orange">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">Lookbook</p>
            <h1 className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground">{item.title}</h1>
            {item.summary ? <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.summary}</p> : null}
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">{pageLabel(count)}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a href="mailto:info@dezinin.com" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:border-brand-orange hover:text-brand-orange">
              Enquiry
            </a>
            {pdf ? (
              <a href={pdf} download className="lookbook-download inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange text-sm uppercase text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 4v10" />
                  <path d="m8 10 4 4 4-4" />
                  <path d="M5 19h14" />
                </svg>
                Download Design
              </a>
            ) : null}
          </div>
        </div>
      </section>
      {expanded && shown ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black p-6" style={{ zIndex: 90 }} onClick={() => setExpanded(false)}>
          <img src={shown} alt={item.title || ""} className="max-h-full max-w-full object-contain" onClick={(event) => event.stopPropagation()} />
          <button type="button" aria-label="Close expanded page" onClick={() => setExpanded(false)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white" style={{ zIndex: 1 }}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      ) : null}
    </main>
  );
}
