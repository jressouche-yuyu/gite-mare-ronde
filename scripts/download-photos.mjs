import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const data = JSON.parse(readFileSync('airbnb-data.json', 'utf8'));
const slugMap = {
  '1694094489622768302': 'domaine',
  '1670469102359046485': 'jardin',
  '1694091011638103276': 'escapade',
};
const WIDTH = 1200;
const manifest = {};

async function dl(url, path) {
  const u = url + `?im_w=${WIDTH}`;
  const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'image/*' } });
  if (!res.ok) throw new Error(`${res.status} ${u}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(path, buf);
  return buf.length;
}

for (const [id, r] of Object.entries(data)) {
  const slug = slugMap[id];
  const dir = `public/photos/${slug}`;
  mkdirSync(dir, { recursive: true });
  manifest[slug] = [];
  // concurrency batches of 6
  const photos = r.photos;
  let i = 0;
  for (let b = 0; b < photos.length; b += 6) {
    const batch = photos.slice(b, b + 6);
    await Promise.all(batch.map(async (url, j) => {
      const n = String(b + j + 1).padStart(2, '0');
      const out = `${dir}/${n}.jpg`;
      try {
        const sz = await dl(url, out);
        manifest[slug][b + j] = `/photos/${slug}/${n}.jpg`;
        process.stdout.write(`${slug}/${n} (${Math.round(sz/1024)}k) `);
      } catch (e) { process.stdout.write(`\nERR ${slug}/${n}: ${e.message}\n`); }
    }));
  }
  manifest[slug] = manifest[slug].filter(Boolean);
  console.log(`\n→ ${slug}: ${manifest[slug].length} photos`);
}
writeFileSync('photo-manifest.json', JSON.stringify(manifest, null, 2));
console.log('\nManifest written.');
