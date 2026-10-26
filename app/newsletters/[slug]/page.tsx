import { NewsletterClient } from "@/components/tina-pages";
import { loadNewsletter, loadNewsletters, loadSite } from "@/lib/load-content";

export async function generateStaticParams() {
  const result = await loadNewsletters();
  const edges = result.data.newsletterConnection?.edges || [];
  return edges
    .map((edge: { node?: { _sys?: { filename?: string } } }) => edge?.node?._sys?.filename)
    .filter((slug: string | undefined): slug is string => Boolean(slug))
    .map((slug: string) => ({ slug }));
}

export default async function NewsletterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [newsletter, site] = await Promise.all([loadNewsletter(slug), loadSite()]);
  return <NewsletterClient newsletter={newsletter} site={site} />;
}
