import type { NewsletterContent } from "@/components/content";
import { NewsletterClient } from "@/components/tina-pages";
import { loadNewsletter, loadNewsletters, loadSite } from "@/lib/load-content";

function newsletterItems(result: Awaited<ReturnType<typeof loadNewsletters>>) {
  return ((result.data.newsletterConnection?.edges || []) as { node?: NewsletterContent | null }[])
    .map((edge) => edge?.node)
    .filter((node): node is NewsletterContent => Boolean(node))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

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
  const [newsletter, site, newsletters] = await Promise.all([loadNewsletter(slug), loadSite(), loadNewsletters()]);
  const others = newsletterItems(newsletters).filter((item) => item._sys?.filename !== slug);
  return <NewsletterClient newsletter={newsletter} site={site} others={others} />;
}
