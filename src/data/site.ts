// Informations centrales du site (NAP, atouts, distances).
// Le sous-ensemble éditable (identité, contact, faits clés) provient du CMS via reglages.json.
// Les champs structurels (domaine, clé formulaire) restent dans le code.
import reglages from '../content/reglages/reglages.json';

export const site = {
  name: reglages.brand.name,
  shortName: 'Mare Ronde',
  tagline: 'Gîte de charme avec piscine près du Mans',
  domain: 'https://www.gites-de-la-mare-ronde.fr',
  city: reglages.contact.city,
  postalCode: reglages.contact.postalCode,
  region: reglages.contact.region,
  department: 'Sarthe',
  email: reglages.contact.email,
  phone: reglages.contact.phone,
  // Formulaire de contact : clé gratuite à créer sur https://web3forms.com (saisir l'e-mail du gîte)
  web3formsKey: 'VOTRE_CLE_WEB3FORMS',
  capacityMax: reglages.facts.capacityMax,
  bedrooms: reglages.facts.bedrooms,
  beds: reglages.facts.beds,
  baths: reglages.facts.baths,
  description:
    "Domaine de caractère à Yvré-l’Évêque, près du Mans : 3 gîtes réunissant 16 couchages, avec piscine, court de tennis, terrain de pétanque et vaste jardin. À 15 minutes du Circuit des 24 Heures du Mans.",
  highlights: [
    { n: 'Piscine', l: 'Détente' },
    { n: 'Tennis', l: 'Court privé' },
    { n: 'Pétanque', l: 'Convivialité' },
    { n: 'Jusqu’à 16', l: 'Personnes' },
    { n: '~15 min', l: 'Du circuit' },
  ],
  distances: [
    { place: 'Centre du Mans', time: '~10 min' },
    { place: 'Circuit des 24 Heures du Mans', time: '~15 min' },
    { place: 'Gare du Mans (TGV Paris 1h)', time: '~12 min' },
    { place: 'Vieux Mans — cité Plantagenêt', time: '~12 min' },
    { place: 'Commerces & restaurants', time: 'à proximité' },
  ],
};
