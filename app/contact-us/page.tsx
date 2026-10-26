import { ContactClient } from "@/components/tina-pages";
import { loadHome, loadSite } from "@/lib/load-content";

export default async function ContactPage() {
  const [home, site] = await Promise.all([loadHome(), loadSite()]);
  return <ContactClient home={home} site={site} />;
}
