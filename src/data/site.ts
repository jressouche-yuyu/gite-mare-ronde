// Informations centrales du site (NAP, atouts, distances).
// ⚠️ Les valeurs "XX" sont des placeholders — à compléter avec les infos réelles du propriétaire.
export const site = {
  name: 'Gîte de la Mare Ronde',
  shortName: 'Mare Ronde',
  tagline: 'Gîte de charme avec piscine près du Mans',
  domain: 'https://www.gite-marre-ronde.fr',
  city: 'Yvré-l’Évêque',
  postalCode: '72530',
  region: 'Pays de la Loire',
  department: 'Sarthe',
  email: 'contact@gite-marre-ronde.fr',
  phone: '+33 (0)X XX XX XX XX',
  // Formulaire de contact : clé gratuite à créer sur https://web3forms.com (saisir l'e-mail du gîte)
  web3formsKey: 'VOTRE_CLE_WEB3FORMS',
  capacityMax: '16',
  bedrooms: '7',
  beds: '19',
  baths: '4,5',
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
