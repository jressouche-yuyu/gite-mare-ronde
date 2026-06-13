// Convertit le rich-text de TinaCMS (AST) — ou une chaîne simple — en HTML.
function esc(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(node: any): string {
  if (node == null) return '';
  if (node.type === 'text' || typeof node.text === 'string') {
    let t = esc(node.text);
    if (node.bold) t = `<strong>${t}</strong>`;
    if (node.italic) t = `<em>${t}</em>`;
    if (node.code) t = `<code>${t}</code>`;
    return t;
  }
  if (node.type === 'a' || node.type === 'link') {
    const href = esc(node.url || node.href || '#');
    return `<a href="${href}">${(node.children || []).map(inline).join('')}</a>`;
  }
  if (node.type === 'break') return '<br/>';
  return (node.children || []).map(inline).join('');
}
function block(node: any): string {
  if (!node) return '';
  const kids = (node.children || []).map(inline).join('');
  switch (node.type) {
    case 'h1': return `<h1>${kids}</h1>`;
    case 'h2': return `<h2>${kids}</h2>`;
    case 'h3': return `<h3>${kids}</h3>`;
    case 'h4': return `<h4>${kids}</h4>`;
    case 'blockquote': return `<blockquote>${kids}</blockquote>`;
    case 'ul': return `<ul>${(node.children || []).map((li: any) => `<li>${(li.children || []).map(inline).join('')}</li>`).join('')}</ul>`;
    case 'ol': return `<ol>${(node.children || []).map((li: any) => `<li>${(li.children || []).map(inline).join('')}</li>`).join('')}</ol>`;
    case 'p':
    default: return `<p>${kids}</p>`;
  }
}
export function richTextToHtml(doc: any): string {
  if (!doc) return '';
  if (typeof doc === 'string') {
    return doc.split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/\n/g, '<br/>')}</p>`).join('');
  }
  const children = doc.children || (Array.isArray(doc) ? doc : []);
  return children.map(block).join('');
}
// Extrait le texte brut (pour les méta descriptions / schema).
export function richTextToPlain(doc: any): string {
  const html = richTextToHtml(doc);
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
