import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine final avant mise en production.
export default defineConfig({
  // GitHub Pages (site projet) — URL : https://jressouche-yuyu.github.io/gite-mare-ronde/
  site: 'https://jressouche-yuyu.github.io',
  base: '/gite-mare-ronde',
  // Exclut la page de démonstration (noindex) du sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/demo/') })],
  build: { inlineStylesheets: 'auto' },
  // Autorise l'accès via tunnel (Cloudflare trycloudflare) en preview/dev
  vite: {
    preview: { allowedHosts: true },
    server: { allowedHosts: true },
  },
});
