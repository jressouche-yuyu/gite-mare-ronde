// Préfixe les chemins internes avec le base path Astro (fonctionne en dev ET en prod).
const BASE = import.meta.env.BASE_URL; // ex. "/gite-mare-ronde/"

export function withBase(p?: string): string {
  if (!p) return '';
  if (/^(https?:)?\/\//.test(p) || p.startsWith('mailto:') || p.startsWith('tel:') || p.startsWith('#')) return p;
  return BASE.replace(/\/$/, '') + (p.startsWith('/') ? p : '/' + p);
}
