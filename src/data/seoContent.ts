// Contenu éditorial enrichi (SEO + GEO) pour les pages silos « capacité » et « localisation ».
// Le « lead » s'affiche en clair ; le « more » (Q/R approfondies) est replié dans un accordéon
// pour préserver l'UX tout en offrant de la matière à Google et aux moteurs de réponse (LLM).

export interface QA { q: string; a: string; }
export interface Editorial { lead: string[]; more: QA[]; }

// ── Bloc « région » réutilisable (riche en entités locales pour le GEO) ──
const AROUND: QA = {
  q: 'Que faire autour du domaine, au Mans et dans la Sarthe ?',
  a: "Le domaine se trouve à Yvré-l’Évêque, à une dizaine de minutes du Mans. À proximité immédiate : le circuit des 24 Heures du Mans (~15 min) et son musée, la cité Plantagenêt (le « Vieux Mans ») et la cathédrale Saint-Julien, la cité de l’automobile, mais aussi la campagne sarthoise, les Alpes mancelles, l’abbaye de l’Épau et les bords de l’Huisne. Côté gastronomie, la Sarthe est le pays des rillettes du Mans et du poulet de Loué. La gare TGV du Mans place Paris à 1 h.",
};

// ════════════════════ CAPACITÉ ════════════════════
function capacityProfile(c: number): { formule: string; qui: string; lead: string[] } {
  if (c <= 2) return {
    formule: "L’Escapade de la Mare Ronde (2 personnes) se prête idéalement à un séjour à deux",
    qui: 'un week-end en amoureux ou une parenthèse à deux',
    lead: [
      `Pour un séjour à deux dans la Sarthe, le domaine de la Mare Ronde propose L’Escapade : un hébergement intime à Yvré-l’Évêque, à quelques minutes du Mans, au calme d’une ancienne ferme rénovée entourée de verdure.`,
      `On y vient pour souffler : profiter de la piscine chauffée et du grand parc, partager un dîner sur la terrasse, rayonner vers la cité Plantagenêt ou le circuit des 24 Heures, puis retrouver le silence de la campagne. Un cadre de charme, privatif, à l’écart de l’agitation mais proche de tout.`,
    ],
  };
  if (c <= 4) return {
    formule: "Le Jardin de la Mare Ronde (4 personnes) ou L’Escapade conviennent parfaitement",
    qui: 'une petite famille, deux couples ou un court séjour entre proches',
    lead: [
      `Un gîte pour ${c} personnes à Yvré-l’Évêque, près du Mans : le domaine de la Mare Ronde accueille les petites tribus dans un cadre nature préservé, avec piscine chauffée, court de tennis et vaste jardin. L’ancienne ferme rénovée mêle pierre, poutres et confort d’aujourd’hui.`,
      `Idéal pour une petite famille ou deux couples, ce format offre l’espace qu’on n’a pas toujours à la maison, tout en restant à dix minutes du Mans, de ses commerces et de la gare TGV. Vacances, escapade ou week-end prolongé : la campagne sarthoise se découvre en toutes saisons.`,
    ],
  };
  if (c <= 8) return {
    formule: `selon vos besoins, un ou deux gîtes du domaine accueillent confortablement ${c} personnes`,
    qui: 'une famille, une famille élargie ou un groupe d’amis',
    lead: [
      `Réunir ${c} personnes en Sarthe sans se marcher dessus : c’est l’atout du domaine de la Mare Ronde, à Yvré-l’Évêque, à dix minutes du Mans. Grand jardin pour les enfants, piscine chauffée pour les après-midis d’été, court de tennis et terrain de pétanque pour animer la journée.`,
      `Ce format de ${c} personnes convient aux vacances en famille comme aux week-ends entre amis : chambres multiples, grandes pièces de vie et cuisines de caractère pour les longues tablées. Et tout autour, Le Mans, le circuit des 24 Heures et la campagne sarthoise à explorer.`,
    ],
  };
  if (c <= 12) return {
    formule: `le domaine entier (jusqu’à 16 personnes) se réserve pour réunir vos ${c} convives`,
    qui: 'une grande famille, une cousinade ou un groupe d’amis',
    lead: [
      `Un grand gîte pour ${c} personnes près du Mans : le domaine de la Mare Ronde réunit trois gîtes complémentaires au sein d’une même propriété de caractère, à Yvré-l’Évêque. De quoi loger plusieurs générations ou un groupe d’amis tout en préservant l’intimité de chacun.`,
      `Avec sa piscine chauffée, son court de tennis, son terrain de pétanque et son vaste jardin, le domaine est pensé pour les retrouvailles : grandes salles à manger, cheminée, espaces communs généreux. Le tout à dix minutes du Mans et à un quart d’heure du circuit des 24 Heures.`,
    ],
  };
  return {
    formule: `le domaine entier se privatise pour accueillir votre groupe (jusqu’à 16 personnes en hébergement, davantage en journée selon le format)`,
    qui: 'un très grand groupe, une cousinade, un mariage ou un séminaire',
    lead: [
      `Pour réunir un grand groupe de ${c} personnes dans la Sarthe, le domaine de la Mare Ronde offre une rare combinaison : trois gîtes au sein d’une même propriété privative, un vaste jardin, une piscine chauffée, un court de tennis et de grandes salles de réception, à dix minutes du Mans.`,
      `Cousinades, anniversaires marquants, mariages, séminaires d’entreprise ou week-ends entre amis : la grande capacité du domaine et son cadre de caractère en font un lieu de rassemblement idéal, au calme de la campagne mais à proximité immédiate du Mans, de sa gare TGV (Paris 1 h) et du circuit des 24 Heures.`,
    ],
  };
}

export function capacityEditorial(count: number): Editorial {
  const p = capacityProfile(count);
  return {
    lead: p.lead,
    more: [
      {
        q: `Quel hébergement choisir pour ${count} personnes ?`,
        a: `Le domaine de la Mare Ronde se compose de trois gîtes : Les Gîtes de la Mare Ronde (le domaine entier, 16 personnes), Le Jardin (4 personnes) et L’Escapade (2 personnes). Pour ${count} personnes, ${p.formule}. N’hésitez pas à nous indiquer la composition de votre groupe (adultes, enfants, couples) : nous vous orientons vers la meilleure formule.`,
      },
      {
        q: `Pour quelles occasions réserver un gîte de ${count} personnes ?`,
        a: `Ce format s’adresse avant tout à ${p.qui}. Le domaine accueille aussi bien des séjours de vacances que des week-ends, des fêtes de famille ou des événements ; pour les grandes occasions (mariage, anniversaire, séminaire), il se loue en formule privatisée sur devis.`,
      },
      AROUND,
      {
        q: 'Comment connaître les tarifs et réserver ?',
        a: `La réservation et les prix en temps réel se consultent en direct sur Airbnb ; les tarifs varient selon la saison et la durée du séjour (basse, moyenne, haute saison, et conditions spécifiques pour la semaine des 24 Heures du Mans et les fêtes). Pour un événement ou un séjour sur mesure, demandez-nous un devis.`,
      },
    ],
  };
}

// ════════════════════ LOCALISATION ════════════════════
export function locationEditorial(place: string, isHub: boolean): Editorial {
  const lead = isHub
    ? [
        `Idéalement situé à Yvré-l’Évêque, aux portes du Mans, le domaine de la Mare Ronde est un point de chute de charme pour découvrir ${place}. Ancienne ferme sarthoise rénovée, il réunit trois gîtes, une piscine chauffée, un court de tennis et un vaste jardin, dans un cadre nature préservé.`,
        `On y conjugue le calme de la campagne et la proximité des temps forts de la Sarthe : la ville du Mans et sa cité Plantagenêt, le circuit des 24 Heures, les châteaux et la campagne environnante. Un équilibre rare entre tranquillité et accessibilité.`,
      ]
    : [
        `À quelques minutes de ${place}, le domaine de la Mare Ronde vous accueille à Yvré-l’Évêque, dans la Sarthe (72). Cette ancienne ferme rénovée dispose d’une piscine chauffée, d’un court de tennis, d’un terrain de pétanque et d’un grand parc, au calme de la campagne et pourtant à dix minutes du Mans.`,
        `Séjourner près de ${place}, c’est profiter d’un hébergement de caractère pour rayonner facilement vers Le Mans, le circuit des 24 Heures et les sites de la Sarthe, tout en retrouvant chaque soir le silence et l’espace de la campagne mancelle.`,
      ];
  return {
    lead,
    more: [
      {
        q: `Où se situe le gîte par rapport à ${place} ?`,
        a: `Le domaine est implanté à Yvré-l’Évêque (72530), commune limitrophe du Mans, facilement accessible depuis ${place}. Le centre du Mans est à une dizaine de minutes en voiture, le circuit des 24 Heures à environ un quart d’heure, et la gare TGV du Mans (Paris en 1 h) à proximité. Les distances précises depuis ${place} vous sont communiquées à la réservation.`,
      },
      AROUND,
      {
        q: 'Le domaine est-il adapté aux familles et aux groupes ?',
        a: `Oui. Le domaine réunit trois gîtes et accueille jusqu’à 16 personnes (7 chambres, 19 couchages modulables dont 5 lits doubles, 5 salles de bain). Le Jardin (4 pers.) et L’Escapade (2 pers.) se louent aussi séparément. Vaste jardin, piscine chauffée, tennis et pétanque en font un lieu apprécié pour les vacances en famille comme pour les week-ends entre amis.`,
      },
      {
        q: 'Comment réserver un séjour ?',
        a: `Les disponibilités et les prix en temps réel se consultent sur Airbnb. Pour un événement (mariage, anniversaire, séminaire) ou un séjour sur mesure près de ${place}, contactez-nous : nous vous répondons rapidement avec une proposition adaptée.`,
      },
    ],
  };
}
