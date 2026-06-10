import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const files = readdirSync('.').filter(f => /^ab_\d+\.html$/.test(f));

function extractJsonScripts(html) {
  const out = [];
  const re = /<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try { out.push(JSON.parse(m[1])); } catch {}
  }
  return out;
}

// Recursive search: collect all values for a given key
function collect(obj, key, acc = []) {
  if (obj == null || typeof obj !== 'object') return acc;
  if (Array.isArray(obj)) { for (const v of obj) collect(v, key, acc); return acc; }
  for (const [k, v] of Object.entries(obj)) {
    if (k === key) acc.push(v);
    collect(v, key, acc);
  }
  return acc;
}
// Find first object that has ALL given keys
function findObjWith(obj, keys, hits = []) {
  if (obj == null || typeof obj !== 'object') return hits;
  if (Array.isArray(obj)) { for (const v of obj) findObjWith(v, keys, hits); return hits; }
  if (keys.every(k => k in obj)) hits.push(obj);
  for (const v of Object.values(obj)) findObjWith(v, keys, hits);
  return hits;
}

const results = {};

for (const file of files) {
  const id = file.match(/\d+/)[0];
  const html = readFileSync(file, 'utf8');
  const blobs = extractJsonScripts(html);
  const root = blobs.length ? { blobs } : {};

  // Photos: only listing photos (Hosting-{id})
  const photoRe = new RegExp(`https://a0\\.muscache\\.com/im/pictures/(?:hosting/Hosting-${id}|miso/Hosting-${id})/original/[A-Za-z0-9-]+\\.(?:jpe?g|png|webp)`, 'g');
  const photos = [...new Set((html.match(photoRe) || []))];

  // Structured fields via recursive search across blobs
  const personCapacity = collect(root, 'personCapacity').find(v => typeof v === 'number');
  const starRating = collect(root, 'starRating').find(v => typeof v === 'number');
  const reviewCount = collect(root, 'reviewCount').find(v => typeof v === 'number')
                   ?? collect(root, 'visibleReviewCount').find(v => typeof v === 'number');
  const htmlDescriptions = collect(root, 'htmlDescription')
    .map(v => (typeof v === 'object' && v?.htmlText) ? v.htmlText : v)
    .filter(v => typeof v === 'string');
  // titles / section names
  const seoTitle = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const ogDesc = (html.match(/<meta property="og:description" content="([^"]*)"/) || [])[1] || '';
  // coordinates
  const lat = collect(root, 'lat').find(v => typeof v === 'number');
  const lng = collect(root, 'lng').find(v => typeof v === 'number');
  // sleeping / rooms arrangement labels
  const labels = collect(root, 'title').filter(v => typeof v === 'string' && v.length < 60);
  // amenities (names)
  const amenityObjs = collect(root, 'amenities').flat?.() || [];
  let amenities = [];
  // amenities often appear as objects with .title
  const amenObjs = findObjWith(root, ['title', 'available']).map(o => o.title).filter(Boolean);
  amenities = [...new Set(amenObjs)];

  results[id] = {
    id,
    seoTitle,
    ogDesc,
    personCapacity,
    starRating,
    reviewCount,
    descriptions: [...new Set(htmlDescriptions)].slice(0, 6),
    lat, lng,
    labels: [...new Set(labels)].slice(0, 40),
    amenities: amenities.slice(0, 80),
    photoCount: photos.length,
    photos,
  };
}

writeFileSync('airbnb-data.json', JSON.stringify(results, null, 2));
// Console summary (compact)
for (const [id, r] of Object.entries(results)) {
  console.log(`\n=== ${id} ===`);
  console.log('seoTitle:', r.seoTitle.slice(0, 90));
  console.log('capacity:', r.personCapacity, '| rating:', r.starRating, '| reviews:', r.reviewCount);
  console.log('photos:', r.photoCount);
  console.log('amenities(', r.amenities.length, '):', r.amenities.slice(0, 25).join(' · '));
  console.log('labels:', r.labels.slice(0, 15).join(' | '));
  console.log('descr[0]:', (r.descriptions[0] || '').replace(/<[^>]+>/g, ' ').slice(0, 240));
}
