import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine de production : OVH `gites-de-la-mare-ronde.fr`, servi par GitHub Pages
// via public/CNAME. Déploiement à la racine — plus de base path.
export default defineConfig({
  site: 'https://www.gites-de-la-mare-ronde.fr',
  // Exclut la page de démonstration (noindex) du sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/demo/') })],
  build: { inlineStylesheets: 'auto' },
  // Autorise l'accès via tunnel (Cloudflare trycloudflare) en preview/dev
  vite: {
    preview: { allowedHosts: true },
    server: { allowedHosts: true },
  },
});
