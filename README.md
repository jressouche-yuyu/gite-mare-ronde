# Gîte de la Mare Ronde — Site Astro

Site vitrine SEO/GEO premium (Direction A « Domaine »). Génération statique multi-pages avec Astro.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère /dist (statique)
npm run preview    # prévisualise le build
```

## Structure

```
src/
  data/            # ← le contenu qui pilote les pages
    site.ts        # NAP, atouts, distances (⚠️ placeholders "XX" à compléter)
    capacities.ts  # SILO B — pages par capacité → /capacite/{slug}
    usages.ts      # SILO C — pages par occasion → /sejour/{slug}
    locations.ts   # SILO D — pages locales      → /location/{slug}
  layouts/BaseLayout.astro   # <head> SEO/OG + JSON-LD + header/footer + scripts
  components/      # Header, Footer
  pages/
    index.astro              # Accueil (Direction A)
    le-gite, galerie, tarifs, contact, faq, acces, a-propos
    mentions-legales, confidentialite
    capacite/[slug].astro    # template + index hub
    sejour/[slug].astro      # template + index hub
    location/[slug].astro    # template + index hub
  styles/global.css          # design tokens « Domaine »
public/robots.txt
```

## Ajouter des pages SEO

Il suffit d'ajouter une entrée dans le fichier de données correspondant (`capacities.ts`, `usages.ts`, `locations.ts`) : la page, son URL, ses balises et le sitemap sont générés automatiquement.

## À faire avant production
- Compléter les valeurs `XX` dans `src/data/site.ts` (capacité, chambres, distances, tarifs).
- Remplacer les blocs `.ph[data-label]` par de vraies `<img>` optimisées (`astro:assets`).
- Ajouter le logo (`Document/Logo`) et brancher le formulaire de contact.
- Mettre à jour le domaine dans `astro.config.mjs` et `robots.txt`.
- Vagues 2-4 : pages atouts (piscine/tennis), reste des capacités, blog (cf. `STRATEGIE-SEO-GEO-ARBORESCENCE.md`).
