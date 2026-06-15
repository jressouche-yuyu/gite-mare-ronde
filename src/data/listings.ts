// SILO « par hébergement » — les 3 gîtes du domaine. Génère /hebergements/{slug}
// Données extraites des annonces Airbnb (déc. 2024).
import { booking } from './booking';

const pics = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/uploads/${slug}/${String(i + 1).padStart(2, '0')}.jpg`);

export interface Listing {
  slug: string;
  name: string;
  type: string;
  capacity: number;
  bedrooms?: string;
  beds?: string;
  baths?: string;
  tagline: string;
  intro: string;
  long: string[];
  amenities: string[];
  highlights: string[];
  faq: { q: string; a: string }[];
  photos: string[];
  airbnb: string;
  featured?: boolean;
}

export const listings: Listing[] = [
  {
    slug: 'les-gites-de-la-mare-ronde',
    name: 'Les Gîtes de la Mare Ronde',
    type: 'Domaine entier · 3 gîtes',
    capacity: 16,
    bedrooms: '7 chambres',
    beds: '19 couchages',
    baths: '4,5 salles de bain',
    featured: true,
    tagline: 'Le domaine entier, pour vos grandes occasions',
    intro:
      "Un domaine de caractère réunissant trois gîtes élégants et privatifs, idéal pour les séjours d'exception en famille ou entre amis. 7 chambres, 19 couchages, 4,5 salles de bain, un vaste jardin, une piscine, un court de tennis et un terrain de pétanque, dans un cadre paisible et raffiné. À seulement 15 minutes du Circuit des 24 Heures du Mans.",
    long: [
      "Les Gîtes de la Mare Ronde forment un domaine de caractère composé de trois logements élégants et privatifs, que l'on peut réunir pour accueillir un même groupe ou louer séparément. Pensé pour les séjours d'exception — en famille, entre amis ou pour un événement privé — il conjugue authenticité, confort et convivialité.",
      "Sept chambres offrent 19 couchages et 4,5 salles de bain. Les espaces communs — grandes salles à manger à poutres et cheminée, cuisines équipées — invitent aux longues tablées, tandis que le vaste jardin clos abrite la piscine (avec abri), le court de tennis et le terrain de pétanque.",
      "À seulement 15 minutes du mythique Circuit des 24 Heures du Mans et à une dizaine de minutes du centre du Mans, le domaine est le point de chute idéal pour les grands rendez-vous manceaux comme pour une parenthèse au vert.",
    ],
    amenities: ['Piscine', 'Court de tennis', 'Terrain de pétanque', 'Vaste jardin clos', 'Cheminée', 'Cuisine équipée', 'Lave-linge', 'Wifi', 'Stationnement gratuit', 'Télévision', 'Chauffage'],
    highlights: [
      'Domaine privatif réunissant 3 gîtes indépendants',
      'Piscine (avec abri), court de tennis et terrain de pétanque',
      '7 chambres · 19 couchages · 4,5 salles de bain',
      'Grandes salles à manger à poutres et cheminée',
      'À 15 minutes du Circuit des 24 Heures du Mans',
      'Idéal mariages, cousinades, séminaires et grandes occasions',
    ],
    faq: [
      { q: 'Combien de personnes le domaine accueille-t-il ?', a: "Jusqu'à 16 personnes, réparties dans 7 chambres (19 couchages) et 4,5 salles de bain." },
      { q: 'Peut-on louer les gîtes séparément ?', a: "Oui : Le Jardin (4 pers.) et L'Escapade (2 pers.) se louent aussi indépendamment du domaine entier." },
      { q: 'Quels équipements extérieurs ?', a: 'Une piscine avec abri, un court de tennis et un terrain de pétanque privatifs, dans un vaste jardin clos.' },
      { q: 'À quelle distance du circuit des 24 Heures ?', a: 'Le domaine est à environ 15 minutes du Circuit des 24 Heures du Mans.' },
    ],
    photos: pics('domaine', 62),
    airbnb: booking.domaine,
  },
  {
    slug: 'le-jardin-de-la-mare-ronde',
    name: 'Le Jardin de la Mare Ronde',
    type: 'Appartement · 1er étage',
    capacity: 4,
    bedrooms: '1 chambre',
    beds: '2 lits simples modulables + 2 couchages salon',
    baths: '1 salle de bain',
    tagline: 'Charme et sérénité pour 4 personnes',
    intro:
      "Au premier étage d'une propriété de caractère, un appartement confortable pour 4 personnes au cœur d'un environnement calme et verdoyant. Une chambre (deux lits simples modulables en grand lit double), une cuisine équipée avec espace repas et un salon avec deux couchages supplémentaires. Accès au court de tennis, au terrain de pétanque et au stationnement privé.",
    long: [
      "Situé au premier étage d'une propriété de caractère, Le Jardin de la Mare Ronde est un appartement chaleureux qui marie le charme de l'ancien et le confort du moderne : aménagements récents, literie neuve et équipements de qualité.",
      "Il se compose d'une chambre (deux lits simples de 90×200 modulables en grand lit double), d'un salon offrant deux couchages supplémentaires et d'une cuisine entièrement équipée ouverte sur un espace repas convivial — de quoi accueillir confortablement jusqu'à 4 personnes.",
      "Vous profitez du calme d'un environnement verdoyant, d'un stationnement privé dans la cour, et de l'accès au court de tennis et au terrain de pétanque du domaine.",
    ],
    amenities: ['Cuisine équipée', 'Wifi', 'Stationnement gratuit', 'Court de tennis', 'Terrain de pétanque', 'Arrière-cour privée', 'Chauffage central', 'Réfrigérateur', 'Micro-ondes', 'Cafetière expresso'],
    highlights: [
      'Appartement au 1er étage d’une propriété de caractère',
      '1 chambre (2 lits simples modulables en lit double)',
      'Salon avec 2 couchages supplémentaires',
      'Cuisine équipée ouverte sur l’espace repas',
      'Accès au court de tennis et au terrain de pétanque',
      'Stationnement privé dans la cour',
    ],
    faq: [
      { q: 'Quelle est la capacité ?', a: "Jusqu'à 4 personnes : une chambre (2 lits simples modulables en grand lit double) et un salon avec 2 couchages." },
      { q: 'Y a-t-il un parking ?', a: 'Oui, un stationnement privé est disponible dans la cour de la propriété.' },
      { q: 'A-t-on accès aux équipements du domaine ?', a: 'Oui, accès au court de tennis et au terrain de pétanque partagés.' },
    ],
    photos: pics('jardin', 12),
    airbnb: booking.jardin,
  },
  {
    slug: 'lescapade-de-la-mare-ronde',
    name: "L'Escapade de la Mare Ronde",
    type: 'Appartement · intime',
    capacity: 2,
    bedrooms: '1 chambre',
    beds: '1 lit double',
    baths: '1 salle de bain',
    tagline: 'Un cocon intime pour 2 personnes',
    intro:
      "Une escapade intime et chaleureuse dans une maison de caractère, pensée pour deux personnes. Tomettes authentiques, poutres apparentes et décoration douce créent une ambiance raffinée et apaisante. Accès au domaine partagé avec son court de tennis et son terrain de pétanque, pour alterner détente et convivialité.",
    long: [
      "L'Escapade de la Mare Ronde est un studio intime et raffiné, pensé pour deux personnes. Tomettes authentiques, poutres apparentes et décoration douce composent un cocon propice à la détente.",
      "Il offre tout le nécessaire pour un séjour en autonomie : espace nuit cosy, salle d'eau moderne avec douche à l'italienne et cuisine équipée pour vos petits-déjeuners et repas. L'arrivée se fait en toute autonomie grâce à une boîte à clé sécurisée.",
      "Escapade romantique, séjour ressourçant ou déplacement professionnel : vous profitez aussi du cadre verdoyant du domaine et de ses équipements (court de tennis, terrain de pétanque).",
    ],
    amenities: ['Cuisine équipée', 'Wifi', 'Télévision', 'Stationnement gratuit', 'Court de tennis', 'Terrain de pétanque', 'Arrière-cour privée', 'Chauffage', 'Cafetière expresso', 'Arrivée autonome (boîte à clé)'],
    highlights: [
      'Studio cosy pour 2 personnes',
      'Tomettes authentiques et poutres apparentes',
      'Salle d’eau avec douche à l’italienne',
      'Cuisine équipée pour vos repas en autonomie',
      'Arrivée autonome avec boîte à clé sécurisée',
      'Accès au court de tennis et au terrain de pétanque',
    ],
    faq: [
      { q: 'Quelle est la capacité ?', a: "2 personnes : idéal pour une escapade romantique, un séjour ressourçant ou un déplacement professionnel." },
      { q: "Comment se passe l'arrivée ?", a: 'Arrivée autonome grâce à une boîte à clé sécurisée.' },
      { q: 'Quels équipements extérieurs ?', a: 'Accès au court de tennis et au terrain de pétanque du domaine partagé.' },
    ],
    photos: pics('escapade', 6),
    airbnb: booking.escapade,
  },
];
