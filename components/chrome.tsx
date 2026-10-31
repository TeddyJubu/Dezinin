"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowUpRight, mediaUrl, type SiteContent, type SocialLink } from "./content";

function SocialIcon({ icon }: { icon?: string | null }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (icon === "instagram") {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7h.01M12 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
      </svg>
    );
  }
  if (icon === "youtube") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6z" />
        <path d="m10 15 5-2.8L10 9.5v5.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function onHomeClick(pathname: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo(0, 0);
  };
}

export function SocialRow({ socials, className = "flex gap-3" }: { socials?: SocialLink[] | null; className?: string }) {
  return (
    <div className={className}>
      {(socials || []).map((social) => {
        const href = social.href || "";
        const external = /^https?:\/\//i.test(href);
        return (
          <a
            key={social.label}
            href={external ? href : "#"}
            aria-label={social.label || "Social"}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            onClick={external ? undefined : (event) => event.preventDefault()}
            className="w-9 h-9 rounded-full border border-muted-foreground text-muted-foreground flex items-center justify-center hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
          >
            <SocialIcon icon={social.icon} />
          </a>
        );
      })}
    </div>
  );
}

export function Header({ site }: { site: SiteContent }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const goHome = onHomeClick(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20" style={{ zIndex: 80 }}>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8">
        <Link className="flex items-center space-x-2" href="/" prefetch={true} scroll onClick={goHome}>
          <div className="relative h-10 w-[120px]">
            <img alt="Dezinin Logo" className="logo-full object-contain absolute inset-0 h-full w-full" src={mediaUrl(site.logo)} />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-6 md:h-10 md:w-10">
              <img alt="Dezinin Compact Logo" className="logo-compact object-contain opacity-0 scale-75 absolute inset-0 h-full w-full" src={mediaUrl(site.logoCompact)} />
            </div>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-zinc-800/60 backdrop-blur-md border border-white/10 rounded-full px-8 py-1 items-center shadow-2xl shadow-black/50">
        {(site.navLinks || []).map((link) => (
          <Link
            key={link.href}
            href={link.href || "/"}
            prefetch={true}
            className="inline-flex h-9 w-max items-center justify-center rounded-full px-5 py-1 text-xs font-bold uppercase tracking-widest transition-colors text-zinc-300 hover:text-white hover:bg-white/5"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8 flex items-center space-x-2">
        <a
          href={site.ctaHref || "#site-footer"}
          className="hidden md:inline-flex text-brand-orange text-lg font-semibold rounded-full hover:bg-brand-orange/10 group items-center gap-1 h-9 px-4 py-2"
        >
          {site.ctaLabel || "LETS TALK"}
          <ArrowUpRight className="h-11 w-11 text-brand-orange transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
        <button
          type="button"
          className="inline-flex md:hidden items-center justify-center h-10 w-10"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {open ? (
        <div className="md:hidden absolute top-20 inset-x-0 bg-background border-b border-border px-6 py-6 flex flex-col gap-4">
          {(site.navLinks || []).map((link) => (
            <Link key={link.href} href={link.href || "/"} prefetch={true} className="text-sm font-bold uppercase tracking-widest" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={site.ctaHref || "#site-footer"} className="text-brand-orange font-semibold" onClick={() => setOpen(false)}>
            {site.ctaLabel || "LETS TALK"}
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function Footer({ site }: { site: SiteContent }) {
  const pathname = usePathname() || "/";

  return (
    <footer id="site-footer" className="w-full scroll-mt-20 border-t bg-background px-4 py-9 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center md:text-left">
          <Link href="/" prefetch={true} scroll onClick={onHomeClick(pathname)} className="relative inline-block w-full max-w-[450px] h-[50px] mx-auto md:mx-0">
            <img alt="DEZININ Logo" src={mediaUrl(site.logo)} className="h-full w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground text-justify">{site.footerBlurb}</p>
        </div>
        {(site.footerColumns || []).map((column) => (
          <div key={column.title} className="text-center">
            <h5 className="mb-2 text-sm text-brand-orange font-medium">{column.title}</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(column.links || []).map((link) => (
                <li key={link.label}>
                  <Link href={link.href || "#"} className="hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-4 text-center text-xs text-muted-foreground">{site.copyright}</div>
    </footer>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-muted-foreground/40 bg-background text-foreground"
        aria-label="Toggle theme"
      >
        {dark ? (
          <svg className="h-[1.2rem] w-[1.2rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
          </svg>
        ) : (
          <svg className="h-[1.2rem] w-[1.2rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </button>
    </div>
  );
}
