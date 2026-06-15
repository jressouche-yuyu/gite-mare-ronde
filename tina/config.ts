import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main';

// ── Image AVEC attribut ALT (obligatoire pour SEO + accessibilité) ──
const imageWithAlt = (name: string, label: string) => ({
  type: 'object' as const,
  name,
  label,
  fields: [
    { type: 'image' as const, name: 'src', label: 'Image' },
    { type: 'string' as const, name: 'alt', label: 'Texte ALT (décrit l’image pour Google & l’accessibilité)', description: 'Important pour le SEO et les lecteurs d’écran.' },
  ],
});

// ── SEO par page (basiques indépendants : Title ≠ H1) ──
const seoField = {
  type: 'object' as const,
  name: 'seo',
  label: '🔎 SEO de la page',
  fields: [
    { type: 'string' as const, name: 'metaTitle', label: 'Balise Title (≤ 60 car.)', description: 'Affiché dans l’onglet et Google. NE PAS recopier le H1 — formulez-le différemment.' },
    { type: 'string' as const, name: 'metaDescription', label: 'Méta description (≤ 155 car.)', ui: { component: 'textarea' } },
    { type: 'string' as const, name: 'canonical', label: 'URL canonique (laisser vide = automatique)' },
    imageWithAlt('ogImage', 'Image de partage (réseaux sociaux)'),
    { type: 'boolean' as const, name: 'noindex', label: 'Masquer des moteurs (noindex)' },
    {
      type: 'string' as const, name: 'schemaType', label: 'Type de page (données structurées)',
      options: ['WebPage', 'AboutPage', 'ContactPage', 'CollectionPage', 'Article'],
    },
    { type: 'string' as const, name: 'schemaOverride', label: 'Données structurées avancées (JSON-LD brut, optionnel)', ui: { component: 'textarea' }, description: 'Pour les experts : ce JSON-LD est ajouté tel quel à la page.' },
  ],
};

// ── Blocs du builder ──
const heroBlock = {
  name: 'hero', label: '🏞️ Hero (en-tête + H1)',
  fields: [
    { type: 'string' as const, name: 'eyebrow', label: 'Sur-titre' },
    { type: 'string' as const, name: 'title', label: 'Titre H1 (titre principal visible)', description: 'C’est le H1 de la page — distinct de la balise Title.' },
    { type: 'string' as const, name: 'text', label: 'Texte', ui: { component: 'textarea' } },
    imageWithAlt('image', 'Photo de fond'),
    { type: 'string' as const, name: 'ctaLabel', label: 'Bouton — texte' },
    { type: 'string' as const, name: 'ctaHref', label: 'Bouton — lien' },
  ],
};
const richTextBlock = {
  name: 'richText', label: '📝 Texte',
  fields: [
    { type: 'string' as const, name: 'heading', label: 'Titre de section (H2)' },
    { type: 'rich-text' as const, name: 'body', label: 'Texte (gras, listes, liens…)' },
  ],
};
const imageTextBlock = {
  name: 'imageText', label: '🖼️ Image + Texte',
  fields: [
    imageWithAlt('image', 'Image'),
    { type: 'string' as const, name: 'heading', label: 'Titre (H2)' },
    { type: 'rich-text' as const, name: 'body', label: 'Texte' },
    { type: 'boolean' as const, name: 'imageLeft', label: 'Image à gauche' },
  ],
};
const featuresBlock = {
  name: 'features', label: '✨ Points forts (cartes)',
  fields: [
    { type: 'string' as const, name: 'heading', label: 'Titre (H2)' },
    {
      type: 'object' as const, name: 'items', label: 'Cartes', list: true,
      ui: { itemProps: (i: any) => ({ label: i?.title }) },
      fields: [
        { type: 'string' as const, name: 'icon', label: 'Icône (emoji)' },
        { type: 'string' as const, name: 'title', label: 'Titre' },
        { type: 'string' as const, name: 'text', label: 'Texte', ui: { component: 'textarea' } },
      ],
    },
  ],
};
const galleryBlock = {
  name: 'gallery', label: '📸 Galerie photos',
  fields: [
    { type: 'string' as const, name: 'heading', label: 'Titre (H2)' },
    {
      type: 'object' as const, name: 'images', label: 'Photos', list: true,
      ui: { itemProps: (i: any) => ({ label: i?.alt || 'Photo' }) },
      fields: [
        { type: 'image' as const, name: 'src', label: 'Image' },
        { type: 'string' as const, name: 'alt', label: 'Texte ALT' },
      ],
    },
  ],
};
const tableBlock = {
  name: 'table', label: '📊 Tableau',
  fields: [
    { type: 'string' as const, name: 'caption', label: 'Titre / légende du tableau' },
    { type: 'string' as const, name: 'headers', label: 'En-têtes de colonnes', list: true },
    {
      type: 'object' as const, name: 'rows', label: 'Lignes', list: true,
      ui: { itemProps: (r: any) => ({ label: (r?.cells || []).join(' · ') }) },
      fields: [{ type: 'string' as const, name: 'cells', label: 'Cellules (1 par colonne)', list: true }],
    },
  ],
};
const faqBlock = {
  name: 'faq', label: '❓ FAQ (→ données structurées auto)',
  fields: [
    { type: 'string' as const, name: 'heading', label: 'Titre (H2)' },
    {
      type: 'object' as const, name: 'items', label: 'Questions / Réponses', list: true,
      ui: { itemProps: (i: any) => ({ label: i?.question }) },
      fields: [
        { type: 'string' as const, name: 'question', label: 'Question' },
        { type: 'string' as const, name: 'answer', label: 'Réponse', ui: { component: 'textarea' } },
      ],
    },
  ],
};
const countdownBlock = {
  name: 'countdown', label: '⏱️ Compteur (24 H du Mans, etc.)',
  fields: [
    { type: 'string' as const, name: 'title', label: 'Titre' },
    { type: 'datetime' as const, name: 'targetDate', label: 'Date cible (ex. départ des 24 H)' },
    { type: 'string' as const, name: 'note', label: 'Texte sous le compteur' },
    { type: 'string' as const, name: 'ctaLabel', label: 'Bouton — texte' },
    { type: 'string' as const, name: 'ctaHref', label: 'Bouton — lien' },
  ],
};
const weatherBlock = {
  name: 'weather', label: '🌦️ Météo locale',
  fields: [
    { type: 'string' as const, name: 'title', label: 'Titre' },
    { type: 'string' as const, name: 'lat', label: 'Latitude', description: 'Yvré-l’Évêque ≈ 48.0077' },
    { type: 'string' as const, name: 'lon', label: 'Longitude', description: 'Yvré-l’Évêque ≈ 0.2581' },
  ],
};
const reviewsBlock = {
  name: 'reviews', label: '⭐ Avis clients (→ étoiles Google)',
  fields: [
    { type: 'string' as const, name: 'heading', label: 'Titre' },
    {
      type: 'object' as const, name: 'items', label: 'Avis', list: true,
      ui: { itemProps: (i: any) => ({ label: i?.author }) },
      fields: [
        { type: 'string' as const, name: 'author', label: 'Auteur' },
        { type: 'number' as const, name: 'rating', label: 'Note (1 à 5)' },
        { type: 'string' as const, name: 'text', label: 'Avis', ui: { component: 'textarea' } },
        { type: 'string' as const, name: 'source', label: 'Source (Google, Airbnb…)' },
        { type: 'string' as const, name: 'date', label: 'Date (AAAA-MM-JJ)' },
      ],
    },
  ],
};
const availabilityBlock = {
  name: 'availability', label: '📅 Disponibilités (calendrier Airbnb)',
  fields: [
    { type: 'string' as const, name: 'title', label: 'Titre' },
    { type: 'string' as const, name: 'unit', label: 'Hébergement', options: ['domaine', 'jardin', 'escapade'] },
    { type: 'number' as const, name: 'months', label: 'Nombre de mois affichés (1 à 4)' },
  ],
};
const ctaBlock = {
  name: 'cta', label: '🎯 Appel à l’action',
  fields: [
    { type: 'string' as const, name: 'title', label: 'Titre' },
    { type: 'string' as const, name: 'text', label: 'Texte', ui: { component: 'textarea' } },
    { type: 'string' as const, name: 'buttonLabel', label: 'Bouton — texte' },
    { type: 'string' as const, name: 'buttonHref', label: 'Bouton — lien' },
  ],
};

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || '04e841a3-1fb1-49c4-ae71-b8cd85d7ec4a',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public', basePath: 'gite-mare-ronde' },
  media: { tina: { mediaRoot: 'uploads', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'page',
        label: '📄 Pages',
        path: 'src/content/pages',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Nom de la page (interne)', isTitle: true, required: true },
          seoField,
          {
            type: 'object', name: 'blocks', label: '🧱 Blocs de contenu', list: true,
            ui: { itemProps: (item: any) => ({ label: item?._template }) },
            templates: [heroBlock, richTextBlock, imageTextBlock, featuresBlock, galleryBlock, tableBlock, faqBlock, countdownBlock, weatherBlock, reviewsBlock, availabilityBlock, ctaBlock],
          },
        ],
      },
      {
        name: 'gite',
        label: '🛏 Gîtes',
        path: 'src/content/gites',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'name', label: 'Nom du gîte', isTitle: true, required: true },
          { type: 'string', name: 'slug', label: 'Identifiant URL (ne pas modifier)', required: true, description: 'Modifier le slug casse l’URL existante et le référencement.' },
          { type: 'string', name: 'type', label: 'Type (ex. « Appartement · intime »)' },
          { type: 'number', name: 'capacity', label: 'Capacité (nombre de voyageurs)' },
          { type: 'string', name: 'bedrooms', label: 'Chambres (texte)' },
          { type: 'string', name: 'beds', label: 'Couchages (texte)' },
          { type: 'string', name: 'baths', label: 'Salles de bain (texte)' },
          { type: 'boolean', name: 'featured', label: 'Mettre en avant (domaine entier)' },
          { type: 'string', name: 'tagline', label: 'Accroche courte' },
          { type: 'string', name: 'intro', label: 'Introduction', ui: { component: 'textarea' } },
          { type: 'string', name: 'long', label: 'Description détaillée (un paragraphe par entrée)', list: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'highlights', label: 'Points forts', list: true },
          { type: 'string', name: 'amenities', label: 'Équipements', list: true },
          {
            type: 'object', name: 'faq', label: 'FAQ du gîte', list: true,
            ui: { itemProps: (i: any) => ({ label: i?.q }) },
            fields: [{ type: 'string', name: 'q', label: 'Question' }, { type: 'string', name: 'a', label: 'Réponse', ui: { component: 'textarea' } }],
          },
          { type: 'image', name: 'photos', label: 'Photos (la 1re sert de couverture)', list: true },
          { type: 'string', name: 'airbnb', label: 'Lien de réservation Airbnb' },
        ],
      },
      {
        name: 'apropos',
        label: '👋 Qui sommes-nous',
        path: 'src/content/apropos',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'title', label: 'Nom (interne)', isTitle: true, required: true },
          seoField,
          {
            type: 'object', name: 'hero', label: 'En-tête',
            fields: [{ type: 'string', name: 'eyebrow', label: 'Sur-titre' }, { type: 'string', name: 'title', label: 'Titre H1' }],
          },
          {
            type: 'object', name: 'story', label: 'Notre histoire',
            fields: [
              { type: 'string', name: 'quote', label: 'Citation' },
              { type: 'string', name: 'paragraphs', label: 'Paragraphes', list: true, ui: { component: 'textarea' } },
              imageWithAlt('image1', 'Image 1'),
              imageWithAlt('image2', 'Image 2'),
            ],
          },
          { type: 'string', name: 'valuesHeading', label: 'Titre « Nos valeurs »' },
          {
            type: 'object', name: 'values', label: 'Valeurs', list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [{ type: 'string', name: 'icon', label: 'Emoji' }, { type: 'string', name: 'name', label: 'Nom' }, { type: 'string', name: 'desc', label: 'Description' }],
          },
        ],
      },
      {
        name: 'contact',
        label: '✉️ Contact',
        path: 'src/content/contact',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'title', label: 'Nom (interne)', isTitle: true, required: true },
          seoField,
          {
            type: 'object', name: 'hero', label: 'En-tête',
            fields: [{ type: 'string', name: 'eyebrow', label: 'Sur-titre' }, { type: 'string', name: 'title', label: 'Titre H1' }, { type: 'string', name: 'intro', label: 'Intro', ui: { component: 'textarea' } }],
          },
          {
            type: 'object', name: 'coordinates', label: 'Coordonnées',
            fields: [{ type: 'string', name: 'address', label: 'Adresse' }, { type: 'string', name: 'email', label: 'E-mail' }, { type: 'string', name: 'phone', label: 'Téléphone' }],
          },
        ],
      },
      {
        name: 'nosgites',
        label: '🗂 Page « Nos Gîtes »',
        path: 'src/content/nosgites',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'title', label: 'Nom (interne)', isTitle: true, required: true },
          seoField,
          {
            type: 'object', name: 'hero', label: 'En-tête',
            fields: [{ type: 'string', name: 'eyebrow', label: 'Sur-titre' }, { type: 'string', name: 'title', label: 'Titre H1' }, { type: 'string', name: 'intro', label: 'Intro', ui: { component: 'textarea' } }],
          },
        ],
      },
      {
        name: 'home',
        label: '🏠 Page d’accueil',
        path: 'src/content/home',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'title', label: 'Nom (interne)', isTitle: true, required: true },
          seoField,
          {
            type: 'object', name: 'hero', label: '🏞️ Hero (en-tête)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sur-titre' },
              { type: 'string', name: 'title', label: 'Titre H1' },
              { type: 'string', name: 'lede', label: 'Accroche', ui: { component: 'textarea' } },
              imageWithAlt('image', 'Photo de fond'),
              { type: 'string', name: 'ctaPrimaryLabel', label: 'Bouton 1 — texte' },
              { type: 'string', name: 'ctaSecondaryLabel', label: 'Bouton 2 — texte (Airbnb)' },
            ],
          },
          {
            type: 'object', name: 'domaine', label: '🏡 Section « Notre domaine »',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sur-titre' },
              { type: 'string', name: 'heading', label: 'Titre (H2)' },
              { type: 'string', name: 'body', label: 'Texte (un paragraphe par ligne vide)', ui: { component: 'textarea' } },
              imageWithAlt('image1', 'Image 1'),
              imageWithAlt('image2', 'Image 2'),
            ],
          },
          {
            type: 'object', name: 'spaces', label: '🛋️ Section « À vivre »',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre (H2)' },
              { type: 'string', name: 'intro', label: 'Intro' },
              {
                type: 'object', name: 'cards', label: 'Cartes', list: true,
                ui: { itemProps: (i: any) => ({ label: i?.title }) },
                fields: [imageWithAlt('image', 'Photo'), { type: 'string', name: 'title', label: 'Titre' }, { type: 'string', name: 'text', label: 'Texte', ui: { component: 'textarea' } }],
              },
              {
                type: 'object', name: 'equipment', label: 'Équipements (puces)', list: true,
                ui: { itemProps: (i: any) => ({ label: i?.name }) },
                fields: [{ type: 'string', name: 'icon', label: 'Emoji' }, { type: 'string', name: 'name', label: 'Nom' }],
              },
            ],
          },
          {
            type: 'object', name: 'region', label: '📍 Section « La région »',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Sur-titre' },
              { type: 'string', name: 'heading', label: 'Titre (H2)' },
              { type: 'string', name: 'body', label: 'Texte', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object', name: 'reviewsSection', label: '⭐ Section « Avis »',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre (H2)' },
              {
                type: 'object', name: 'items', label: 'Avis', list: true,
                ui: { itemProps: (i: any) => ({ label: i?.who }) },
                fields: [
                  { type: 'string', name: 'who', label: 'Auteur' },
                  { type: 'string', name: 'via', label: 'Source (Airbnb, Google…)' },
                  { type: 'number', name: 'stars', label: 'Étoiles (1 à 5)' },
                  { type: 'string', name: 'text', label: 'Avis', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'faqSection', label: '❓ Section FAQ',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre (H2)' },
              {
                type: 'object', name: 'items', label: 'Questions / Réponses', list: true,
                ui: { itemProps: (i: any) => ({ label: i?.q }) },
                fields: [{ type: 'string', name: 'q', label: 'Question' }, { type: 'string', name: 'a', label: 'Réponse', ui: { component: 'textarea' } }],
              },
            ],
          },
          {
            type: 'object', name: 'cta', label: '🎯 Bandeau final',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'text', label: 'Texte' },
            ],
          },
        ],
      },
      {
        name: 'capacite',
        label: '👥 Pages « par capacité »',
        path: 'src/content/capacites',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Titre (interne / balise Title)', isTitle: true, required: true },
          { type: 'string', name: 'slug', label: 'Identifiant URL', required: true, description: 'Forme l’URL /capacite/{slug}. Modifier casse l’URL existante.' },
          { type: 'number', name: 'count', label: 'Nombre de personnes', description: 'Sert au tri et au contenu de la page.' },
          { type: 'string', name: 'angle', label: 'Accroche éditoriale', description: 'Angle différenciant (évite le contenu dupliqué).' },
          { type: 'string', name: 'intro', label: 'Introduction', ui: { component: 'textarea' } },
          { type: 'number', name: 'order', label: 'Ordre d’affichage' },
        ],
      },
      {
        name: 'sejour',
        label: '🎉 Pages « par séjour / occasion »',
        path: 'src/content/sejours',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Balise Title (≤ 60 car.)', isTitle: true, required: true, description: 'NE PAS recopier le H1.' },
          { type: 'string', name: 'slug', label: 'Identifiant URL', required: true, description: 'Forme l’URL /sejour/{slug}. Modifier casse l’URL existante.' },
          { type: 'string', name: 'h1', label: 'Titre H1 (titre visible)' },
          {
            type: 'string', name: 'category', label: 'Catégorie',
            options: [
              { value: 'evenement', label: 'Événements & fêtes' },
              { value: 'entreprise', label: 'Entreprise' },
              { value: 'groupe', label: 'Groupes & familles' },
              { value: 'passion', label: 'Sport & passion auto' },
            ],
          },
          { type: 'boolean', name: 'priority', label: 'Page prioritaire (mise en avant)' },
          { type: 'string', name: 'intro', label: 'Introduction', ui: { component: 'textarea' } },
          { type: 'string', name: 'body', label: 'Corps (un paragraphe par entrée)', list: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'bullets', label: 'Points clés', list: true },
          {
            type: 'object', name: 'faq', label: 'FAQ (→ données structurées auto)', list: true,
            ui: { itemProps: (i: any) => ({ label: i?.q }) },
            fields: [{ type: 'string', name: 'q', label: 'Question' }, { type: 'string', name: 'a', label: 'Réponse', ui: { component: 'textarea' } }],
          },
          { type: 'image', name: 'heroPhoto', label: 'Photo d’en-tête' },
          { type: 'number', name: 'order', label: 'Ordre d’affichage' },
        ],
      },
      {
        name: 'localite',
        label: '📍 Pages « par localité »',
        path: 'src/content/locations',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Balise Title (≤ 60 car.)', isTitle: true, required: true, description: 'NE PAS recopier le H1.' },
          { type: 'string', name: 'slug', label: 'Identifiant URL', required: true, description: 'Forme l’URL /location/{slug}. Modifier casse l’URL existante.' },
          { type: 'string', name: 'place', label: 'Nom du lieu (commune / zone)' },
          { type: 'string', name: 'h1', label: 'Titre H1 (titre visible)' },
          { type: 'boolean', name: 'isHub', label: 'Page pilier (hub local)' },
          { type: 'string', name: 'intro', label: 'Introduction', ui: { component: 'textarea' } },
          { type: 'number', name: 'order', label: 'Ordre d’affichage' },
        ],
      },
    ],
  },
});
