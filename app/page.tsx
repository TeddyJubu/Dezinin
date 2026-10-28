import { HomeClient } from "@/components/tina-pages";
import type { NewsletterContent } from "@/components/content";
import { loadHome, loadNewsletters, loadSite } from "@/lib/load-content";

export default async function Page() {
  const [home, site, newsletters] = await Promise.all([loadHome(), loadSite(), loadNewsletters()]);
  const items = ((newsletters.data.newsletterConnection?.edges || []) as { node?: NewsletterContent | null }[])
    .map((edge) => edge?.node)
    .filter((node): node is NewsletterContent => Boolean(node))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  const hero = home.data.home?.heroVideo;
  const poster = hero === "/video/hypetown_hero.mp4" ? "/video/hypetown_hero-poster.jpg" : null;
  return (
    <>
      {poster ? <link rel="preload" as="image" href={poster} fetchPriority="high" /> : null}
      <HomeClient home={home} site={site} newsletters={items} />
    </>
  );
}
