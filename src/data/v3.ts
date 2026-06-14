// Contenu transverse de la V3 (avis, équipements, valeurs, FAQ).
// Les gîtes proviennent de listings.ts (données riches héritées de la V1).

export const reviews = [
  { who: 'Marie L.', via: 'Airbnb', stars: 5, text: 'Un domaine magnifique, idéal pour notre réunion de famille. La piscine et le parc ont fait l’unanimité ! Accueil parfait.' },
  { who: 'Thomas R.', via: 'Google', stars: 5, text: 'Parfait pour les 24 Heures : à 15 min du circuit et tellement calme au retour. On reviendra sans hésiter.' },
  { who: 'Sophie & Julien', via: 'Airbnb', stars: 5, text: 'Le charme de l’ancien et tout le confort moderne. Les grandes tablées et la cheminée ont rendu notre week-end inoubliable.' },
  { who: 'Camille D.', via: 'Airbnb', stars: 5, text: 'L’Escapade est un vrai cocon pour deux. Décoration soignée, calme absolu, on s’est ressourcés.' },
];

export const equipment = [
  { ic: '🏊', name: 'Piscine', desc: 'Extérieure avec abri, au cœur du parc' },
  { ic: '🎾', name: 'Tennis', desc: 'Court privatif' },
  { ic: '🎯', name: 'Pétanque', desc: 'Apéritif garanti' },
  { ic: '🌿', name: 'Parc arboré', desc: 'Vaste jardin clos & calme' },
];

export const values = [
  { ic: '✨', name: 'Authenticité', desc: 'Préserver le caractère et l’âme des lieux.' },
  { ic: '🌿', name: 'Nature', desc: 'Un cadre verdoyant, des extérieurs soignés.' },
  { ic: '🤝', name: 'Hospitalité', desc: 'Une disponibilité réelle pour vous faciliter la vie.' },
  { ic: '⭐', name: 'Qualité', desc: 'Literie confortable, espaces propres et accueillants.' },
];

// FAQ d'accueil (reprise de la V1 — utile pour le SEO/GEO et le schema FAQPage)
export const homeFaq = [
  { q: 'Où se situe le Gîte de la Mare Ronde ?', a: 'Le domaine se trouve à Yvré-l’Évêque, dans la Sarthe (72), à environ 10 minutes du Mans et 15 minutes du circuit des 24 Heures.' },
  { q: 'Combien de personnes le domaine peut-il accueillir ?', a: 'Le domaine entier réunit 3 gîtes et accueille jusqu’à 16 personnes (7 chambres, 19 couchages, 4,5 salles de bain). Les appartements se louent aussi séparément (2 et 4 personnes).' },
  { q: 'Y a-t-il une piscine et un terrain de tennis ?', a: 'Oui. Le domaine dispose d’une piscine, d’un court de tennis et d’un terrain de pétanque privatifs, ainsi que d’un vaste jardin clos.' },
  { q: 'Peut-on organiser un mariage ou un événement de famille ?', a: 'Oui, la grande capacité et le cadre du domaine se prêtent aux mariages, anniversaires et réunions de famille (formule événement sur devis).' },
  { q: 'Comment réserver ?', a: 'La réservation et les prix en temps réel se font sur Airbnb. Pour un événement, contactez-nous pour un devis.' },
];
