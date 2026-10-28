"use client";

import { hashFromQuery } from "@tinacms/bridge/metadata";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { Footer, Header, ThemeToggle } from "@/components/chrome";
import { ContactSection } from "@/components/contact-section";
import { ArrowUpRight, Shell, mediaUrl, type HomeContent, type NewsletterContent, type PageContent, type SiteContent, type TinaQuery } from "@/components/content";
import { HomeView } from "@/components/home-view";
import { LookbookListing } from "@/components/lookbook-listing";

function primaryForm(query: TinaQuery) {
  const id = hashFromQuery(JSON.stringify({ query: query.query, variables: query.variables }));
  return { ...query, experimental___selectFormByFormId: () => id };
}

export function HomeClient({
  home,
  site,
  newsletters,
}: {
  home: TinaQuery;
  site: TinaQuery;
  newsletters: NewsletterContent[];
}) {
  const siteResult = useTina(site);
  const homeResult = useTina(primaryForm(home));
  const siteData = siteResult.data.site as SiteContent;
  return (
    <Shell>
      <Header site={siteData} />
      <HomeView home={homeResult.data.home as HomeContent} site={siteData} newsletters={newsletters} />
      <Footer site={siteData} />
      <ThemeToggle />
    </Shell>
  );
}

export function ContactClient({ home, site }: { home: TinaQuery; site: TinaQuery }) {
  const siteResult = useTina(site);
  const homeResult = useTina(primaryForm(home));
  const siteData = siteResult.data.site as SiteContent;
  const homeData = homeResult.data.home as HomeContent;
  return (
    <Shell>
      <Header site={siteData} />
      <main className="pt-20">
        <ContactSection contact={homeData.contact} socials={siteData.socials} />
      </main>
      <Footer site={siteData} />
      <ThemeToggle />
    </Shell>
  );
}

export function PageClient({ page, site }: { page: TinaQuery; site: TinaQuery }) {
  const siteResult = useTina(site);
  const pageResult = useTina(primaryForm(page));
  const siteData = siteResult.data.site as SiteContent;
  const data = pageResult.data.page as PageContent;
  return (
    <Shell>
      <Header site={siteData} />
      <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 pt-24 pb-16">
        <img alt="" aria-hidden="true" src={mediaUrl(data.image)} className="object-cover scale-110 blur-md absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/75" />
        <div className="relative z-10 max-w-2xl text-center">
          <p className="text-brand-orange text-xs md:text-sm mb-5 font-medium flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            {data.kicker}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.05]">{data.title}</h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{data.body}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href={data.primaryCtaHref || "/"} prefetch={true} className="px-8 py-3 border border-muted-foreground/40 rounded-full text-foreground text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300">
              {data.primaryCtaLabel}
            </Link>
            <Link href={data.secondaryCtaHref || "/contact-us"} prefetch={true} className="group inline-flex items-center gap-1 px-8 py-3 rounded-full text-brand-orange text-sm tracking-[0.2em] uppercase hover:bg-brand-orange/10 transition-colors duration-300">
              {data.secondaryCtaLabel}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <Footer site={siteData} />
      <ThemeToggle />
    </Shell>
  );
}

export function NewsletterClient({
  newsletter,
  site,
}: {
  newsletter: TinaQuery;
  site: TinaQuery;
}) {
  const siteResult = useTina(site);
  const newsletterResult = useTina(primaryForm(newsletter));
  const siteData = siteResult.data.site as SiteContent;
  const data = newsletterResult.data.newsletter as NewsletterContent;

  return (
    <Shell>
      <Header site={siteData} />
      <LookbookListing item={data} />
      <Footer site={siteData} />
      <ThemeToggle />
    </Shell>
  );
}
