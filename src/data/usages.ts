// SILO C — pages "par usage / occasion". Génère /sejour/{slug}
export type UsageCategory = 'evenement' | 'entreprise' | 'groupe' | 'passion';

export interface Usage {
  slug: string;
  category: UsageCategory;
  title: string;
  h1: string;
  intro: string;
  body: string[];
  bullets: string[];
  faq: { q: string; a: string }[];
  heroPhoto: string;
  priority?: boolean;
}

export const categoryLabels: Record<UsageCategory, { label: string; eyebrow: string; blurb: string }> = {
  evenement: { label: 'Événements & fêtes', eyebrow: 'Célébrer', blurb: "Mariages, anniversaires et grandes occasions dans un domaine privatif." },
  entreprise: { label: 'Entreprise', eyebrow: 'Professionnels', blurb: "Séminaires, team building et journées d'équipe au vert, près du Mans." },
  groupe: { label: 'Groupes & familles', eyebrow: 'Se retrouver', blurb: "Week-ends entre amis, vacances en famille et réunions sous un même toit." },
  passion: { label: 'Sport & passion auto', eyebrow: 'Vivre l’événement', blurb: "L'adresse idéale pour les 24 Heures du Mans et les rendez-vous du circuit." },
};

const FAQ_CIRCUIT = { q: "Le domaine est-il proche du circuit des 24 Heures ?", a: "Oui, à environ 15 minutes du Circuit des 24 Heures du Mans, et à une dizaine de minutes du centre du Mans." };

export const usages: Usage[] = [
  {
    slug: 'gite-mariage-sarthe', category: 'evenement', priority: true, heroPhoto: '/photos/domaine/04.jpg',
    title: 'Gîte mariage & réception en Sarthe près du Mans',
    h1: 'Votre mariage dans un domaine de charme en Sarthe',
    intro: "Un cadre nature préservé, une grande capacité d'hébergement et un vaste jardin : le domaine de la Mare Ronde réunit vos invités pour célébrer à deux pas du Mans.",
    body: [
      "Vous cherchez un lieu pour célébrer votre mariage en Sarthe, où vos proches pourront aussi dormir sur place ? Les Gîtes de la Mare Ronde, à Yvré-l'Évêque, réunissent un domaine de caractère, un vaste jardin clos et jusqu'à 16 couchages — à quelques minutes du Mans.",
      "L'ancienne ferme rénovée — pierre, poutres, grandes salles à manger à cheminée — crée une atmosphère authentique et chaleureuse pour votre réception. Dehors, la piscine, le court de tennis et le terrain de pétanque prolongent la fête côté détente.",
      "Le domaine se loue en formule événement : parlez-nous de votre projet (nombre d'invités, prestations, hébergement) et nous vous établissons un devis sur mesure.",
    ],
    bullets: [
      "Domaine privatif de caractère, à l'abri des regards",
      "Hébergement sur place jusqu'à 16 personnes (7 chambres)",
      "Grandes salles de réception à poutres et cheminée",
      "Vaste jardin clos, piscine, tennis et pétanque",
      "À 10 min du Mans, 15 min du circuit, 1 h de Paris en TGV",
    ],
    faq: [
      { q: "Combien d'invités peut-on héberger sur place ?", a: "Le domaine héberge jusqu'à 16 personnes (7 chambres, 19 couchages, 4,5 salles de bain)." },
      { q: "Peut-on organiser la réception au domaine ?", a: "Oui, le cadre s'y prête. Les conditions (traiteur, horaires, capacité en journée) se définissent ensemble — demandez un devis." },
      { q: "Quand faut-il réserver ?", a: "Les dates de printemps et d'été sont très demandées : réservez le plus tôt possible." },
    ],
  },
  {
    slug: 'gite-anniversaire-fete-famille', category: 'evenement', priority: true, heroPhoto: '/photos/domaine/01.jpg',
    title: 'Gîte anniversaire & fête de famille en Sarthe',
    h1: 'Fêtez l’événement dans un grand gîte près du Mans',
    intro: "Anniversaire, baptême ou réunion de famille : profitez de la piscine, du tennis et des grandes tablées pour rassembler tous vos proches.",
    body: [
      "Pour un anniversaire marquant ou une fête de famille, le domaine de la Mare Ronde offre l'espace qui manque souvent à la maison : 7 chambres, de grandes salles à manger conviviales et un vaste jardin clos où petits et grands trouvent leur place.",
      "On souffle ses bougies au bord de la piscine, on enchaîne les parties de pétanque et de tennis, et l'on prolonge la soirée autour d'une longue tablée, au calme de la campagne sarthoise.",
      "Le domaine entier se réserve pour le week-end ou la semaine ; les appartements peuvent compléter l'hébergement des invités les plus proches.",
    ],
    bullets: [
      "Jusqu'à 16 personnes réunies sous un même domaine",
      "Piscine, tennis et pétanque pour animer la journée",
      "Grandes salles à manger pour les repas de fête",
      "Cadre privatif et calme, sans vis-à-vis",
      "À 10 min du Mans",
    ],
    faq: [
      { q: "Le domaine convient-il à une grande tablée ?", a: "Oui, les salles à manger et le jardin permettent de réunir confortablement l'ensemble de vos convives." },
      { q: "Peut-on venir avec de jeunes enfants ?", a: "Le jardin est clos et le domaine dispose d'un lit parapluie. Précisez vos besoins lors de la réservation." },
      FAQ_CIRCUIT,
    ],
  },
  {
    slug: 'gite-evjf-evg', category: 'evenement', heroPhoto: '/photos/domaine/02.jpg',
    title: 'Gîte EVJF / EVG en Sarthe près du Mans',
    h1: 'Enterrement de vie de jeune fille ou de garçon',
    intro: "Un domaine privatif rien que pour votre groupe : piscine, tennis et jardin pour fêter l'événement en toute liberté.",
    body: [
      "Pour un EVJF ou un EVG réussi, rien de tel qu'un lieu privatif où profiter sans contrainte. Le domaine de la Mare Ronde réunit votre groupe (jusqu'à 16 personnes) avec piscine, tennis, pétanque et grand jardin.",
      "Au calme de la campagne mais à deux pas du Mans, vous combinez facilement détente au domaine et sorties en ville.",
    ],
    bullets: [
      "Domaine privatif jusqu'à 16 personnes",
      "Piscine, tennis et pétanque pour s'amuser",
      "Grandes pièces de vie pour les soirées",
      "À 10 min du Mans pour sortir",
    ],
    faq: [
      { q: "Quelle est la capacité du domaine ?", a: "Jusqu'à 16 personnes (7 chambres, 19 couchages)." },
      { q: "Les fêtes sont-elles autorisées ?", a: "Le cadre est privatif ; le respect du voisinage et du règlement reste demandé. Précisez votre projet à la réservation." },
    ],
  },
  {
    slug: 'gite-cousinade-reunion-famille', category: 'evenement', heroPhoto: '/photos/domaine/01.jpg',
    title: 'Gîte cousinade & réunion de famille en Sarthe',
    h1: 'Réunir toute la famille sous un même toit',
    intro: "La grande capacité du domaine permet de rassembler plusieurs générations le temps d'une cousinade au vert.",
    body: [
      "Une cousinade, des retrouvailles, une grande réunion de famille ? Le domaine de la Mare Ronde réunit jusqu'à 16 personnes dans trois gîtes complémentaires — de quoi loger plusieurs générations tout en préservant l'intimité de chacun.",
      "Les grandes tablées, le jardin, la piscine et les activités sur place rythment les retrouvailles, dans un cadre de caractère à deux pas du Mans.",
    ],
    bullets: [
      "Jusqu'à 16 personnes en 3 gîtes complémentaires",
      "Indépendance de chacun + espaces communs généreux",
      "Piscine, tennis, pétanque et grand jardin",
      "Grandes salles à manger pour les repas de famille",
      "À 10 min du Mans",
    ],
    faq: [
      { q: "Peut-on loger plusieurs familles ?", a: "Oui : le domaine réunit 3 gîtes, idéal pour que chaque famille garde son espace tout en partageant les moments communs." },
      { q: "Combien de couchages ?", a: "19 couchages au total, répartis dans 7 chambres." },
    ],
  },
  {
    slug: 'gite-seminaire-entreprise', category: 'entreprise', priority: true, heroPhoto: '/photos/domaine/04.jpg',
    title: 'Gîte séminaire d’entreprise en Sarthe près du Mans',
    h1: 'Séminaire d’entreprise au vert près du Mans',
    intro: "Réunissez vos équipes dans un cadre ressourçant : grandes salles, jardin et activités (tennis, piscine) pour un séminaire mémorable.",
    body: [
      "À une dizaine de minutes du Mans et de sa gare TGV (Paris en 1 h), le domaine de la Mare Ronde offre un cadre nature et privatif pour vos séminaires, journées d'étude et réunions au vert.",
      "Les grandes salles à manger se prêtent aux temps de travail comme aux repas conviviaux, tandis que le jardin, la piscine, le tennis et la pétanque facilitent les moments de cohésion. Hébergement sur place jusqu'à 16 personnes, en formule privatisée.",
    ],
    bullets: [
      "Cadre privatif et calme, propice à la concentration",
      "Hébergement de l'équipe sur place (jusqu'à 16 personnes)",
      "Grands espaces modulables pour ateliers et repas",
      "Wifi sur le domaine",
      "À 12 min de la gare du Mans (TGV Paris 1 h)",
    ],
    faq: [
      { q: "Combien de personnes peut-on accueillir ?", a: "Jusqu'à 16 personnes en hébergement ; pour une journée d'étude sans nuitée, la capacité se définit selon votre format." },
      { q: "Y a-t-il le wifi ?", a: "Oui, le wifi est disponible sur le domaine." },
      FAQ_CIRCUIT,
    ],
  },
  {
    slug: 'gite-team-building', category: 'entreprise', priority: true, heroPhoto: '/photos/domaine/02.jpg',
    title: 'Gîte team building & journée d’équipe en Sarthe',
    h1: 'Un team building au vert près du Mans',
    intro: "Renforcez la cohésion de vos équipes dans un domaine privatif : activités de plein air, piscine, tennis et pétanque, à 10 minutes du Mans.",
    body: [
      "Pour une journée de team building ou un incentive, le domaine de la Mare Ronde met à votre disposition un grand jardin clos et des équipements parfaits pour les activités de groupe : tournois de tennis, parties de pétanque, moments de détente à la piscine.",
      "Le cadre privatif et nature, à deux pas du Mans, favorise les échanges informels et la cohésion d'équipe. Possibilité d'y associer un hébergement sur place (jusqu'à 16 personnes) pour prolonger sur deux jours.",
    ],
    bullets: [
      "Grand jardin clos pour les activités de groupe",
      "Tennis, pétanque et piscine sur place",
      "Cadre privatif propice à la cohésion",
      "Hébergement possible jusqu'à 16 personnes",
      "À 10 min du Mans, 12 min de la gare TGV",
    ],
    faq: [
      { q: "Peut-on organiser une journée sans nuitée ?", a: "Oui, le domaine peut se privatiser à la journée. Contactez-nous pour un devis selon votre format." },
      { q: "Quelles activités sur place ?", a: "Court de tennis, terrain de pétanque, piscine et vaste jardin clos." },
      FAQ_CIRCUIT,
    ],
  },
  {
    slug: 'gite-week-end-entre-amis', category: 'groupe', heroPhoto: '/photos/domaine/02.jpg',
    title: 'Gîte week-end entre amis en Sarthe',
    h1: 'Un grand gîte pour un week-end entre amis',
    intro: "Détente, piscine, tennis et grandes soirées : le lieu parfait pour se retrouver entre amis le temps d'un week-end près du Mans.",
    body: [
      "Envie d'un week-end entre amis sans se marcher dessus ? Le domaine de la Mare Ronde réunit jusqu'à 16 couchages dans un cadre privatif, avec piscine, court de tennis et terrain de pétanque.",
      "On profite du jardin la journée, on cuisine ensemble dans de grandes cuisines de caractère, et l'on refait le monde au coin de la cheminée le soir venu — au calme de la campagne, à deux pas du Mans.",
    ],
    bullets: [
      "Jusqu'à 16 personnes, chacun son espace",
      "Piscine, tennis et pétanque privatifs",
      "Grandes cuisines et salles à manger",
      "Cadre privatif, sans vis-à-vis",
      "À 10 min du Mans",
    ],
    faq: [
      { q: "Quelle est la capacité ?", a: "Le domaine entier accueille jusqu'à 16 personnes (7 chambres, 19 couchages)." },
      { q: "Peut-on louer un seul appartement ?", a: "Oui : Le Jardin (4 pers.) et L'Escapade (2 pers.) se louent séparément." },
    ],
  },
  {
    slug: 'gite-vacances-famille', category: 'groupe', heroPhoto: '/photos/domaine/01.jpg',
    title: 'Gîte vacances en famille en Sarthe',
    h1: 'Des vacances en famille au cœur de la campagne',
    intro: "Un jardin clos pour les enfants, une piscine pour tous et le calme de la campagne sarthoise pour des vacances réussies.",
    body: [
      "Pour des vacances en famille, le domaine de la Mare Ronde conjugue espace, nature et tranquillité : un vaste jardin clos où les enfants jouent en sécurité, une piscine pour les après-midis d'été et de grands espaces de vie pour se retrouver.",
      "À deux pas du Mans, vous rayonnez facilement vers la cité Plantagenêt, le circuit, les Alpes mancelles et les nombreuses activités de la Sarthe.",
    ],
    bullets: [
      "Vaste jardin clos, idéal pour les enfants",
      "Piscine et activités sur place",
      "Grands espaces de vie et nombreuses chambres",
      "Lit parapluie disponible",
      "À 10 min du Mans, nombreuses visites alentour",
    ],
    faq: [
      { q: "Le jardin est-il sécurisé pour les enfants ?", a: "Le jardin est clos. La piscine doit faire l'objet d'une surveillance des enfants par les adultes." },
      { q: "Peut-on venir hors saison ?", a: "Oui, le domaine se loue toute l'année — la campagne sarthoise est belle en toute saison." },
    ],
  },
  {
    slug: 'location-proche-circuit-du-mans', category: 'passion', priority: true, heroPhoto: '/photos/domaine/02.jpg',
    title: 'Location proche du Circuit des 24 Heures du Mans',
    h1: 'Dormir près du circuit des 24 Heures du Mans',
    intro: "Spectateurs et passionnés : un hébergement de charme idéalement situé pour vivre les 24 Heures du Mans et les grands rendez-vous du circuit.",
    body: [
      "À seulement 15 minutes du Circuit des 24 Heures du Mans, le domaine de la Mare Ronde est le point de chute idéal pour vivre les grands rendez-vous manceaux : les 24 Heures auto, les 24 Heures motos, le Grand Prix de France moto ou les essais.",
      "Après une journée au circuit, on retrouve le calme de la campagne, la piscine et le jardin pour décompresser — loin de la foule, mais à quelques minutes des paddocks.",
      "Selon la taille de votre groupe, réservez le domaine entier (jusqu'à 16 personnes) ou l'un des appartements. Les dates d'événements partent très vite : anticipez votre réservation.",
    ],
    bullets: [
      "À ~15 min du Circuit des 24 Heures du Mans",
      "Idéal groupes de passionnés (jusqu'à 16 personnes)",
      "Stationnement gratuit sur place",
      "Piscine et jardin pour récupérer après la course",
      "À 10 min du centre du Mans et de la gare",
    ],
    faq: [
      FAQ_CIRCUIT,
      { q: "Peut-on réserver pour la semaine des 24 Heures ?", a: "Oui, mais ces dates sont très demandées : réservez le plus tôt possible (souvent en formule événement)." },
      { q: "Y a-t-il un parking ?", a: "Oui, un stationnement gratuit est disponible sur place pour plusieurs véhicules." },
    ],
  },
];
