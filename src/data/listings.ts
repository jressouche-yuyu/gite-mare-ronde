// SILO « par hébergement » — les 3 gîtes du domaine.
// Le contenu est désormais éditable dans le CMS (collection « Gîtes ») :
// fichiers src/content/gites/*.json. Ce module les agrège pour le site (V1 + V3).
import domaine from '../content/gites/les-gites-de-la-mare-ronde.json';
import jardin from '../content/gites/le-jardin-de-la-mare-ronde.json';
import escapade from '../content/gites/lescapade-de-la-mare-ronde.json';

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

// Ordre d'affichage : domaine (mis en avant), puis Le Jardin, puis L'Escapade.
export const listings: Listing[] = [domaine, jardin, escapade] as Listing[];
