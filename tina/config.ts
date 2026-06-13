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
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
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
            templates: [heroBlock, richTextBlock, imageTextBlock, featuresBlock, galleryBlock, tableBlock, faqBlock, countdownBlock, weatherBlock, reviewsBlock, ctaBlock],
          },
        ],
      },
    ],
  },
});
