// SILO B — pages "par capacité". Génère /capacite/{slug}
// Contenu éditable via le CMS (collection « capacite » → src/content/capacites/*.json)
export interface Capacity {
  slug: string;
  count: number;
  title: string;
  intro: string;
  angle: string;       // accroche éditoriale différenciante (évite le contenu dupliqué)
  order?: number;
}

const mods = import.meta.glob('../content/capacites/*.json', { eager: true });
export const capacities: Capacity[] = Object.values(mods)
  .map((m: any) => (m.default ?? m) as Capacity)
  .sort((a, b) => (a.order ?? a.count) - (b.order ?? b.count));
