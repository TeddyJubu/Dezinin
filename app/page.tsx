import { HomeClient } from "@/components/tina-pages";
import { loadHome, loadSite } from "@/lib/load-content";

export default async function Page() {
  const [home, site] = await Promise.all([loadHome(), loadSite()]);
  const hero = home.data.home?.heroVideo;
  const poster = hero === "/video/hypetown_hero.mp4" ? "/video/hypetown_hero-poster.jpg" : null;
  return (
    <>
      {poster ? <link rel="preload" as="image" href={poster} fetchPriority="high" /> : null}
      <HomeClient home={home} site={site} />
    </>
  );
}
