// Réservation externe — annonces Airbnb des Gîtes de la Mare Ronde (Yvré-l'Évêque).
export const booking = {
  // URLs canoniques (sans paramètres de partage)
  domaine: 'https://www.airbnb.fr/rooms/1694094489622768302',
  jardin: 'https://www.airbnb.fr/rooms/1670469102359046485',
  escapade: 'https://www.airbnb.fr/rooms/1694091011638103276',
  // CTA principal du site (domaine entier)
  primary: 'https://www.airbnb.fr/rooms/1694094489622768302',
  platform: 'Airbnb',
  // Calendriers iCal Airbnb (Annonce → Disponibilités → Synchroniser les calendriers → Exporter).
  // Collez ici les URLs .ics de chaque annonce pour activer l'affichage des disponibilités.
  ical: {
    domaine: '',
    jardin: '',
    escapade: '',
  } as Record<string, string>,
};
