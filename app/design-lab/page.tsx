import { PageClient } from "@/components/tina-pages";
import { loadPage, loadSite } from "@/lib/load-content";

export default async function DesignLabPage() {
  const [page, site] = await Promise.all([loadPage("design-lab.json"), loadSite()]);
  return <PageClient page={page} site={site} />;
}
