import Link from "next/link";
import { Footer, Header, ThemeToggle } from "@/components/chrome";
import { Shell, type SiteContent } from "@/components/content";
import { loadSite } from "@/lib/load-content";

export default async function NotFound() {
  const site = await loadSite();
  const siteData = site.data.site as SiteContent;

  return (
    <Shell>
      <Header site={siteData} />
      <main className="min-h-screen flex items-center justify-center px-6 pt-20 text-center">
        <div>
          <p className="text-brand-orange text-xs uppercase tracking-[0.2em]">404</p>
          <h1 className="mt-4 text-5xl font-bold">Page not found</h1>
          <Link href="/" scroll className="mt-8 inline-flex px-8 py-3 rounded-full border border-muted-foreground/40 uppercase tracking-[0.2em] text-sm">
            Back to home
          </Link>
        </div>
      </main>
      <Footer site={siteData} />
      <ThemeToggle />
    </Shell>
  );
}
