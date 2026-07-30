import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine de production : OVH `gites-de-la-mare-ronde.fr`, servi par GitHub Pages
// via public/CNAME. Déploiement à la racine — plus de base path.
export default defineConfig({
  site: 'https://www.gites-de-la-mare-ronde.fr',
  // Exclut du sitemap les pages en noindex : démonstration du page builder,
  // et /contact/ (masquée tant que les coordonnées ne sont pas fiables).
  integrations: [
    sitemap({
      filter: (page) => !['/demo/', '/contact/'].some((p) => page.includes(p)),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  // Autorise l'accès via tunnel (Cloudflare trycloudflare) en preview/dev
  vite: {
    preview: { allowedHosts: true },
    server: { allowedHosts: true },
  },
});
