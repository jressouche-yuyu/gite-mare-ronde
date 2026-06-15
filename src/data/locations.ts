// SILO D — pages "par localisation" (SEO local). Génère /location/{slug}
// Contenu éditable via le CMS (collection « localite » → src/content/locations/*.json)
export interface LocationPage {
  slug: string;
  place: string;
  title: string;
  h1: string;
  intro: string;
  isHub?: boolean; // pages piliers locales
  order?: number;
}

const mods = import.meta.glob('../content/locations/*.json', { eager: true });
export const locations: LocationPage[] = Object.values(mods)
  .map((m: any) => (m.default ?? m) as LocationPage)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
