// SILO D — pages "par localisation" (SEO local). Génère /location/{slug}
export interface LocationPage {
  slug: string;
  place: string;
  title: string;
  h1: string;
  intro: string;
  isHub?: boolean; // pages piliers locales
}

export const locations: LocationPage[] = [
  { slug: 'gite-yvre-leveque', place: 'Yvré-l’Évêque', isHub: true,
    title: 'Gîte à Yvré-l’Évêque (72) — charme, piscine & parc',
    h1: 'Un gîte de charme à Yvré-l’Évêque',
    intro: "Au cœur d’Yvré-l’Évêque, Les Gîtes de la Mare Ronde conjuguent le calme de la campagne et la proximité immédiate du Mans et du circuit des 24 Heures." },
  { slug: 'gite-le-mans', place: 'Le Mans', isHub: true,
    title: 'Gîte près du Mans (72) — Domaine de la Mare Ronde',
    h1: 'Un gîte de charme à deux pas du Mans',
    intro: "À une dizaine de minutes du centre du Mans : idéal pour visiter la cité Plantagenêt, assister à un événement ou rayonner dans la Sarthe." },
  { slug: 'gite-proche-circuit-24h-du-mans', place: 'Circuit des 24 Heures', isHub: true,
    title: 'Gîte proche du circuit des 24 Heures du Mans',
    h1: 'Un hébergement proche du circuit du Mans',
    intro: "Pour les 24 Heures, le Grand Prix de France moto ou les essais : un point de chute de charme à proximité du circuit." },
  { slug: 'gite-sarthe-72', place: 'Sarthe', isHub: true,
    title: 'Gîte dans la Sarthe (72) — Domaine de la Mare Ronde',
    h1: 'Votre gîte de charme dans la Sarthe',
    intro: "Une ancienne ferme rénovée pour découvrir la Sarthe : Le Mans, les Alpes mancelles, les châteaux et la campagne préservée." },
  // Communes proches (contenu local à enrichir page par page)
  { slug: 'gite-sarge-les-le-mans', place: 'Sargé-lès-le-Mans', title: 'Gîte près de Sargé-lès-le-Mans (72)', h1: 'Un gîte de charme près de Sargé-lès-le-Mans', intro: "À quelques minutes de Sargé-lès-le-Mans, profitez du calme de la campagne sarthoise près du Mans." },
  { slug: 'gite-savigne-leveque', place: 'Savigné-l’Évêque', title: 'Gîte près de Savigné-l’Évêque (72)', h1: 'Un gîte de charme près de Savigné-l’Évêque', intro: "Idéalement situé non loin de Savigné-l’Évêque, au vert et proche du Mans." },
  { slug: 'gite-coulaines', place: 'Coulaines', title: 'Gîte près de Coulaines (72)', h1: 'Un gîte de charme près de Coulaines', intro: "À deux pas de Coulaines et du Mans, dans un écrin de verdure." },
  { slug: 'gite-champagne', place: 'Champagné', title: 'Gîte près de Champagné (72)', h1: 'Un gîte de charme près de Champagné', intro: "Proche de Champagné et du circuit du Mans, au calme de la campagne." },
  { slug: 'gite-montfort-le-gesnois', place: 'Montfort-le-Gesnois', title: 'Gîte près de Montfort-le-Gesnois (72)', h1: 'Un gîte de charme près de Montfort-le-Gesnois', intro: "Aux portes de Montfort-le-Gesnois, entre rivière et campagne sarthoise." },
  { slug: 'gite-connerre', place: 'Connerré', title: 'Gîte près de Connerré (72)', h1: 'Un gîte de charme près de Connerré', intro: "Non loin de Connerré, célèbre pour ses rillettes, dans un cadre nature." },
  { slug: 'gite-saint-mars-la-briere', place: 'Saint-Mars-la-Brière', title: 'Gîte près de Saint-Mars-la-Brière (72)', h1: 'Un gîte de charme près de Saint-Mars-la-Brière', intro: "Proche de Saint-Mars-la-Brière et de la forêt, au calme près du Mans." },
  { slug: 'gite-parigne-leveque', place: 'Parigné-l’Évêque', title: 'Gîte près de Parigné-l’Évêque (72)', h1: 'Un gîte de charme près de Parigné-l’Évêque', intro: "À courte distance de Parigné-l’Évêque, dans la campagne au sud du Mans." },
  { slug: 'gite-change', place: 'Changé', title: 'Gîte près de Changé (72)', h1: 'Un gîte de charme près de Changé', intro: "Proche de Changé et des accès au Mans, dans un environnement verdoyant." },
  { slug: 'gite-lombron', place: 'Lombron', title: 'Gîte près de Lombron (72)', h1: 'Un gîte de charme près de Lombron', intro: "Dans la campagne sarthoise près de Lombron, au calme et proche du Mans." },
];
