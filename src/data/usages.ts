// SILO C — pages "par usage / occasion". Génère /sejour/{slug}
// Contenu éditable via le CMS (collection « sejour » → src/content/sejours/*.json)
export type UsageCategory = 'evenement' | 'entreprise' | 'groupe' | 'passion';

export interface Usage {
  slug: string;
  category: UsageCategory;
  title: string;
  h1: string;
  intro: string;
  body: string[];
  bullets: string[];
  faq: { q: string; a: string }[];
  heroPhoto: string;
  priority?: boolean;
  order?: number;
}

export const categoryLabels: Record<UsageCategory, { label: string; eyebrow: string; blurb: string }> = {
  evenement: { label: 'Événements & fêtes', eyebrow: 'Célébrer', blurb: "Mariages, anniversaires et grandes occasions dans un domaine privatif." },
  entreprise: { label: 'Entreprise', eyebrow: 'Professionnels', blurb: "Séminaires, team building et journées d'équipe au vert, près du Mans." },
  groupe: { label: 'Groupes & familles', eyebrow: 'Se retrouver', blurb: "Week-ends entre amis, vacances en famille et réunions sous un même toit." },
  passion: { label: 'Sport & passion auto', eyebrow: 'Vivre l’événement', blurb: "L'adresse idéale pour les 24 Heures du Mans et les rendez-vous du circuit." },
};

const mods = import.meta.glob('../content/sejours/*.json', { eager: true });
export const usages: Usage[] = Object.values(mods)
  .map((m: any) => (m.default ?? m) as Usage)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
