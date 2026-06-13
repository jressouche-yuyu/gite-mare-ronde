// Génère le JSON-LD d'une page AUTOMATIQUEMENT à partir de ses blocs + réglages SEO.
export function buildJsonLd(data: any, opts: { url: string; siteName: string; path: string }) {
  const seo = data?.seo || {};
  const blocks: any[] = data?.blocks || [];
  const origin = new URL(opts.url).origin;
  const graph: any[] = [];

  // 1) La page elle-même (type choisi dans le CMS, sinon WebPage)
  graph.push({
    '@type': seo.schemaType || 'WebPage',
    name: seo.metaTitle || data?.title,
    description: seo.metaDescription || undefined,
    url: opts.url,
    inLanguage: 'fr-FR',
    isPartOf: { '@type': 'WebSite', name: opts.siteName, url: origin + '/' },
  });

  // 2) Fil d'Ariane automatique
  const segs = (opts.path || '/').split('/').filter(Boolean);
  if (segs.length) {
    const items: any[] = [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: origin + '/' }];
    let acc = '';
    segs.forEach((s, i) => {
      acc += '/' + s;
      items.push({ '@type': 'ListItem', position: i + 2, name: decodeURIComponent(s).replace(/-/g, ' '), item: origin + acc + '/' });
    });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: items });
  }

  // 3) Chaque bloc FAQ → FAQPage (excellent pour Google & les LLM)
  blocks.filter((b) => b?._template === 'faq').forEach((fb) => {
    const ents = (fb.items || [])
      .filter((i: any) => i?.question && i?.answer)
      .map((i: any) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } }));
    if (ents.length) graph.push({ '@type': 'FAQPage', mainEntity: ents });
  });

  // 4) Blocs d'avis → AggregateRating + Review (étoiles dans Google)
  const allReviews = blocks
    .filter((b) => b?._template === 'reviews')
    .flatMap((b) => (b.items || []).filter((r: any) => r?.author && r?.text));
  if (allReviews.length) {
    const ratings = allReviews.map((r: any) => Number(r.rating) || 5);
    const avg = (ratings.reduce((s: number, n: number) => s + n, 0) / ratings.length).toFixed(1);
    graph.push({
      '@type': 'LodgingBusiness',
      name: opts.siteName,
      url: origin + '/',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: avg, reviewCount: allReviews.length, bestRating: '5' },
      review: allReviews.map((r: any) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: String(Number(r.rating) || 5), bestRating: '5' },
        reviewBody: r.text,
        ...(r.date ? { datePublished: r.date } : {}),
      })),
    });
  }

  const auto = { '@context': 'https://schema.org', '@graph': graph };

  // 4) Override JSON-LD avancé (saisi dans le CMS)
  if (seo.schemaOverride) {
    try { return [auto, JSON.parse(seo.schemaOverride)]; } catch { /* JSON invalide : ignoré */ }
  }
  return auto;
}
