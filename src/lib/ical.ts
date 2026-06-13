// Parseur iCal minimal : extrait les dates RÉSERVÉES d'un calendrier Airbnb (.ics).
function toDate(yyyymmdd: string): Date {
  return new Date(Number(yyyymmdd.slice(0, 4)), Number(yyyymmdd.slice(4, 6)) - 1, Number(yyyymmdd.slice(6, 8)));
}
function iso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Retourne l'ensemble des jours réservés (YYYY-MM-DD) d'un flux iCal. */
export function parseIcalBookedDates(ics: string): Set<string> {
  const booked = new Set<string>();
  const events = ics.split('BEGIN:VEVENT').slice(1);
  for (const ev of events) {
    const ds = ev.match(/DTSTART[^:]*:(\d{8})/);
    const de = ev.match(/DTEND[^:]*:(\d{8})/);
    if (!ds) continue;
    const start = toDate(ds[1]);
    const end = de ? toDate(de[1]) : (() => { const x = new Date(start); x.setDate(x.getDate() + 1); return x; })();
    // DTEND Airbnb = jour de départ (exclusif) → on marque [start, end[
    for (const d = new Date(start); d < end; d.setDate(d.getDate() + 1)) booked.add(iso(d));
  }
  return booked;
}

/** Récupère et parse un calendrier iCal distant (au build). Renvoie null si indispo. */
export async function fetchBookedDates(url?: string): Promise<Set<string> | null> {
  if (!url) return null;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'MareRonde-Site' } });
    if (!r.ok) return null;
    return parseIcalBookedDates(await r.text());
  } catch {
    return null;
  }
}

export { iso };
