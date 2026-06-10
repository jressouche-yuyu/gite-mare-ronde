// Page Prix — calendrier tarifaire par période. Tarifs indicatifs « XX » à compléter par le propriétaire.
// La réservation et les prix en temps réel se font sur Airbnb (cf. booking.ts).

export interface Season {
  key: 'basse' | 'moyenne' | 'haute' | 'evenement';
  label: string;
  color: string;       // couleur de la pastille calendrier
  period: string;      // description lisible
  note?: string;
}

export const seasons: Season[] = [
  { key: 'basse',      label: 'Basse saison',  color: '#6d7459', period: 'Novembre → mars (hors fêtes & vacances)', note: 'Les meilleurs tarifs, au calme.' },
  { key: 'moyenne',    label: 'Moyenne saison', color: '#c8a24b', period: 'Avril, mai, juin, septembre, octobre' },
  { key: 'haute',      label: 'Haute saison',  color: '#b5623c', period: 'Juillet & août, vacances scolaires', note: 'Forte demande : réservez tôt.' },
  { key: 'evenement',  label: 'Événements',    color: '#9a4f2f', period: '24 Heures du Mans, Grand Prix moto, fêtes de fin d’année', note: 'Tarifs spécifiques, séjours souvent en formule événement.' },
];

// 12 mois → saison dominante (pour la frise calendrier)
export const calendar: { month: string; season: Season['key']; tag?: string }[] = [
  { month: 'Jan', season: 'basse' },
  { month: 'Fév', season: 'basse' },
  { month: 'Mar', season: 'basse' },
  { month: 'Avr', season: 'moyenne' },
  { month: 'Mai', season: 'moyenne' },
  { month: 'Juin', season: 'evenement', tag: '24 H du Mans' },
  { month: 'Juil', season: 'haute' },
  { month: 'Août', season: 'haute' },
  { month: 'Sep', season: 'moyenne', tag: 'GP moto' },
  { month: 'Oct', season: 'moyenne' },
  { month: 'Nov', season: 'basse' },
  { month: 'Déc', season: 'evenement', tag: 'Fêtes' },
];

// Grille tarifaire indicative (€ / nuit). À remplacer par les vrais tarifs.
export interface PriceRow { unit: string; basse: string; moyenne: string; haute: string; evenement: string; }
export const priceGrid: PriceRow[] = [
  { unit: 'Les Gîtes de la Mare Ronde (16 pers.)', basse: 'XX €', moyenne: 'XX €', haute: 'XX €', evenement: 'sur devis' },
  { unit: 'Le Jardin de la Mare Ronde (4 pers.)',  basse: 'XX €', moyenne: 'XX €', haute: 'XX €', evenement: 'sur devis' },
  { unit: "L'Escapade de la Mare Ronde (2 pers.)", basse: 'XX €', moyenne: 'XX €', haute: 'XX €', evenement: 'sur devis' },
];
