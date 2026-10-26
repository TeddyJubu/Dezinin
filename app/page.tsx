import { HomeClient } from "@/components/tina-pages";
import { loadHome, loadNewsletters, loadSite } from "@/lib/load-content";

export default async function Page() {
  const [home, site, newsletters] = await Promise.all([loadHome(), loadSite(), loadNewsletters()]);
  return <HomeClient home={home} site={site} newsletters={newsletters} />;
}
