// Post-build : préfixe les chemins absolus internes (href/src/url) avec le base path
// pour le déploiement GitHub Pages en site « projet » (/gite-mare-ronde/).
// Sûr : ignore les URLs externes (https), protocole-relatif (//) et déjà préfixées.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE = '/gite-mare-ronde';
const ROOT = 'dist';

function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(html|css)$/.test(f)) fix(p);
  }
}

function fix(p) {
  let t = readFileSync(p, 'utf8');
  const before = t;
  // href="/..." et src="/..." → préfixe, sauf déjà préfixé ou protocole-relatif //
  t = t.replace(/(href|src)="\/(?!gite-mare-ronde\/|\/)/g, `$1="${BASE}/`);
  // url(/...) dans styles inline / CSS
  t = t.replace(/url\(\/(?!gite-mare-ronde\/|\/)/g, `url(${BASE}/`);
  if (t !== before) writeFileSync(p, t);
}

walk(ROOT);
console.log(`fix-base: base path "${BASE}" appliqué dans ${ROOT}/`);
