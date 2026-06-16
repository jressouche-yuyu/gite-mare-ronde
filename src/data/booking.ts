// Réservation externe — annonces Airbnb des Gîtes de la Mare Ronde (Yvré-l'Évêque).
import reglages from '../content/reglages/reglages.json';

export const booking = {
  // URLs canoniques (sans paramètres de partage)
  domaine: 'https://www.airbnb.fr/rooms/1694094489622768302',
  jardin: 'https://www.airbnb.fr/rooms/1670469102359046485',
  escapade: 'https://www.airbnb.fr/rooms/1694091011638103276',
  // CTA principal du site (éditable dans le CMS → Réglages)
  primary: reglages.booking.primary,
  platform: 'Airbnb',
  // Calendriers iCal Airbnb (Annonce → Disponibilités → Synchroniser les calendriers → Exporter).
  // Collez ici les URLs .ics de chaque annonce pour activer l'affichage des disponibilités.
  ical: {
    domaine: '',
    jardin: '',
    escapade: '',
  } as Record<string, string>,
};
