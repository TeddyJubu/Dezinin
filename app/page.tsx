import { HomeClient } from "@/components/tina-pages";
import { loadHome, loadSite } from "@/lib/load-content";

export default async function Page() {
  const [home, site] = await Promise.all([loadHome(), loadSite()]);
  return <HomeClient home={home} site={site} />;
}
