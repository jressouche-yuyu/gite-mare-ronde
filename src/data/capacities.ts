// SILO B — pages "par capacité". Génère /capacite/{slug}
export interface Capacity {
  slug: string;
  count: number;
  title: string;
  intro: string;
  angle: string;       // accroche éditoriale différenciante (évite le contenu dupliqué)
}

export const capacities: Capacity[] = [
  { slug: 'gite-2-personnes', count: 2, title: 'Gîte 2 personnes en Sarthe',
    angle: 'Escapade en amoureux',
    intro: "Un cocon pour deux au cœur de la campagne sarthoise : calme absolu, piscine et grand parc pour une parenthèse romantique à deux pas du Mans." },
  { slug: 'gite-4-personnes', count: 4, title: 'Gîte 4 personnes en Sarthe',
    angle: 'Week-end en petit comité',
    intro: "Idéal pour une petite famille ou deux couples : confort, piscine et nature, à dix minutes du Mans." },
  { slug: 'gite-6-personnes', count: 6, title: 'Gîte 6 personnes en Sarthe',
    angle: 'Vacances en famille',
    intro: "De l’espace pour toute la famille, un grand parc clos pour les enfants et une piscine pour les après-midis d’été." },
  { slug: 'gite-8-personnes', count: 8, title: 'Gîte 8 personnes en Sarthe',
    angle: 'Famille élargie ou amis',
    intro: "Assez de couchages pour réunir deux familles ou une bande d’amis, avec piscine, tennis et grandes tablées." },
  { slug: 'gite-10-personnes', count: 10, title: 'Gîte 10 personnes en Sarthe',
    angle: 'Grandes retrouvailles',
    intro: "Le format idéal pour les retrouvailles : chacun son coin, des espaces communs généreux et un parc pour souffler." },
  { slug: 'gite-12-personnes', count: 12, title: 'Gîte 12 personnes en Sarthe',
    angle: 'Tribu & cousinade',
    intro: "Réunissez la tribu dans une ancienne ferme rénovée : piscine, tennis, grand parc et place pour tout le monde." },
  { slug: 'gite-15-personnes', count: 15, title: 'Gîte 15 personnes en Sarthe',
    angle: 'Grand groupe',
    intro: "Un grand gîte pour les groupes : séjours entre amis, anniversaires, séminaires au vert près du Mans." },
  { slug: 'grand-gite-20-personnes', count: 20, title: 'Grand gîte 20 personnes en Sarthe',
    angle: 'Très grand groupe & événements',
    intro: "La grande capacité du domaine en fait un lieu parfait pour les mariages, cousinades et fêtes de famille dans la Sarthe." },
];
