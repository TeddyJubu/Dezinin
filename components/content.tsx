import type { ReactNode } from "react";

export type NavLink = { label?: string | null; href?: string | null };
export type SocialLink = { label?: string | null; href?: string | null; icon?: string | null };
export type FooterColumn = { title?: string | null; links?: NavLink[] | null };

export type SiteContent = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  logo?: string | null;
  logoCompact?: string | null;
  navLinks?: NavLink[] | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  footerBlurb?: string | null;
  footerColumns?: FooterColumn[] | null;
  socials?: SocialLink[] | null;
  copyright?: string | null;
};

export type Headline = { title?: string | null; subtitle?: string | null };
export type Project = {
  number?: string | null;
  title?: string | null;
  categories?: (string | null)[] | null;
  image?: string | null;
  summary?: string | null;
};
export type VideoItem = { youtubeId?: string | null; title?: string | null };
export type FaqItem = { question?: string | null; answer?: string | null };
export type ContactContent = {
  kicker?: string | null;
  heading?: string | null;
  email?: string | null;
  formTitle?: string | null;
  interestLabel?: string | null;
  interests?: (string | null)[] | null;
  submitLabel?: string | null;
  namePlaceholder?: string | null;
  companyPlaceholder?: string | null;
  emailPlaceholder?: string | null;
  phonePlaceholder?: string | null;
  messagePlaceholder?: string | null;
};

export function sectionVisible(value?: boolean | null) {
  return value !== false;
}

export type HomeContent = {
  showHero?: boolean | null;
  showLookbook?: boolean | null;
  showPartners?: boolean | null;
  showProjects?: boolean | null;
  showGallery?: boolean | null;
  showFaq?: boolean | null;
  showContact?: boolean | null;
  heroVideo?: string | null;
  headlines?: Headline[] | null;
  experienceTitle?: string | null;
  partners?: (string | null)[] | null;
  filters?: (string | null)[] | null;
  projects?: Project[] | null;
  galleryTitle?: string | null;
  videos?: VideoItem[] | null;
  faqTitle?: string | null;
  faqs?: FaqItem[] | null;
  contact?: ContactContent | null;
};

export type NewsletterContent = {
  title?: string | null;
  order?: number | null;
  cover?: string | null;
  pdf?: string | null;
  summary?: string | null;
  _sys?: { filename?: string | null };
};

export type PageContent = {
  kicker?: string | null;
  title?: string | null;
  body?: string | null;
  image?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string | null;
  secondaryCtaLabel?: string | null;
  secondaryCtaHref?: string | null;
};

export type TinaQuery = {
  data: any;
  query: string;
  variables: any;
};

export function mediaUrl(src?: string | null) {
  if (!src) return "";
  return encodeURI(src);
}

const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;

export function youtubeIdFrom(value?: string | null) {
  const raw = (value || "").trim();
  if (!raw) return "";
  if (youtubeIdPattern.test(raw)) return raw;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const short = url.pathname.split("/").filter(Boolean)[0] || "";
      return youtubeIdPattern.test(short) ? short : "";
    }
    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com" || host === "youtube-nocookie.com") {
      const fromQuery = url.searchParams.get("v") || "";
      if (youtubeIdPattern.test(fromQuery)) return fromQuery;
      const parts = url.pathname.split("/").filter(Boolean);
      const marker = parts.findIndex((part) => part === "embed" || part === "shorts" || part === "live" || part === "v");
      const fromPath = marker >= 0 ? parts[marker + 1] || "" : "";
      return youtubeIdPattern.test(fromPath) ? fromPath : "";
    }
  } catch {
    return "";
  }
  return "";
}

export function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#000)] opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          }}
        />
      </div>
      {children}
    </>
  );
}
