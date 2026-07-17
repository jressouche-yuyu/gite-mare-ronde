// Données V2 (d'après l'expression de besoin) — réutilise les vraies photos & liens Airbnb.
import { booking } from './booking';

const pics = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/uploads/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);

export interface V2Gite {
  slug: string;
  name: string;
  tagline: string;
  spec: string;
  metaTitle: string;
  metaDescription: string;
  accroche: string;
  body: string[];
  capacity: string;
  amenities: string[];
  airbnb: string;
  photos: string[];
  badge: string;
}

export const v2Gites: V2Gite[] = [
  {
    slug: 'grand-gite',
    name: 'Le Grand Gîte de la Mare Ronde',
    tagline: 'Un espace généreux pour rassembler ceux que vous aimez.',
    spec: '7 chambres · 19 lits · jusqu’à 16 personnes',
    metaTitle: 'Le Grand Gîte de la Mare Ronde — 7 chambres, piscine, tennis · Yvré-l’Évêque',
    metaDescription: 'Grand gîte de caractère pour groupes et familles à Yvré-l’Évêque (Sarthe). 7 chambres, 19 lits, piscine, tennis, pétanque. Réservez sur Airbnb.',
    accroche: 'Un espace généreux pour rassembler ceux que vous aimez.',
    body: [
      'Le Grand Gîte de la Mare Ronde est conçu pour les beaux rassemblements : familles nombreuses, groupes d’amis, séminaires en petit comité ou célébrations mémorables. Avec ses sept chambres et ses dix-neuf lits, il accueille jusqu’à seize personnes dans un cadre élégant et chaleureux.',
      'À l’intérieur, les espaces de vie s’enchaînent avec fluidité : un grand salon lumineux, une cuisine entièrement équipée pour les repas partagés, et des chambres soigneusement décorées qui mêlent le charme de l’ancien et le confort contemporain.',
      'Au-dehors, la terrasse invite à la douceur des soirées d’été, tandis que le parc et les équipements communs — piscine, court de tennis, pétanque — garantissent des journées riches en plaisirs partagés.',
    ],
    capacity: '7 chambres · 19 lits · 5 salles de bain',
    amenities: ['WiFi', 'Cuisine équipée', 'Lave-linge', 'Parking', 'Terrasse', 'Piscine', 'Tennis', 'Pétanque'],
    airbnb: booking.domaine,
    photos: pics('domaine', 18),
    badge: 'Grande capacité',
  },
  {
    slug: 'escapade',
    name: 'L’Escapade de la Mare Ronde',
    tagline: 'Intime et accueillante — pour une parenthèse à deux.',
    spec: '1 chambre · 2 personnes',
    metaTitle: 'L’Escapade de la Mare Ronde — Gîte romantique pour 2 · Yvré-l’Évêque',
    metaDescription: 'Un cocon intime et chaleureux pour deux à Yvré-l’Évêque. Gîte de caractère avec piscine et tennis. Parfait pour un week-end romantique en Sarthe.',
    accroche: 'Intime et accueillante — pour une parenthèse à deux.',
    body: [
      'Offrez-vous une escapade intime dans un appartement de caractère conçu pour deux. L’Escapade de la Mare Ronde est un cocon chaleureux où tout invite à la douceur : la décoration soignée, les matières naturelles, la lumière apaisante.',
      'Pensé pour les couples en quête de tranquillité, ce logement entier vous garantit une totale autonomie tout en vous donnant accès à l’ensemble des équipements du domaine : piscine, tennis, pétanque.',
    ],
    capacity: '1 chambre · 1 lit · 1 salle de bain · 2 personnes',
    amenities: ['WiFi', 'Cuisine équipée', 'Piscine', 'Tennis', 'Pétanque', 'Logement entier'],
    airbnb: booking.escapade,
    photos: pics('escapade', 6),
    badge: 'Couple / duo',
  },
  {
    slug: 'jardin',
    name: 'Le Jardin de la Mare Ronde',
    tagline: 'Charme et sérénité — un nid douillet au cœur du domaine.',
    spec: '1 chambre · jusqu’à 4 personnes',
    metaTitle: 'Le Jardin de la Mare Ronde — Gîte familial charme & sérénité · Sarthe',
    metaDescription: 'Appartement de charme au 1er étage, calme et verdoyant, pour 4 personnes à Yvré-l’Évêque. Piscine, tennis, pétanque. Réservez votre séjour en Sarthe.',
    accroche: 'Charme et sérénité — un nid douillet au cœur du domaine.',
    body: [
      'Séjournez au cœur d’un environnement calme et verdoyant, propice à la détente et à la déconnexion. Situé au premier étage, Le Jardin de la Mare Ronde accueille jusqu’à quatre personnes dans une atmosphère apaisante baignée de lumière naturelle.',
      'Idéal pour les petites familles ou les groupes d’amis souhaitant profiter du domaine sans l’agitation, ce logement entier vous offre tout le confort nécessaire à un séjour réussi, avec vue sur les jardins qui lui ont donné son nom.',
    ],
    capacity: '1 chambre · 4 lits · jusqu’à 4 personnes',
    amenities: ['WiFi', 'Cuisine équipée', 'Piscine', 'Tennis', 'Pétanque', 'Vue jardin'],
    airbnb: booking.jardin,
    photos: pics('jardin', 12),
    badge: 'Famille / petits groupes',
  },
];
