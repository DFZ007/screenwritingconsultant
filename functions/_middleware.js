// Keep internal notes (README.md, SEO.md, etc.) off the public site.
export async function onRequest({ request, next }) {
  const path = new URL(request.url).pathname.toLowerCase();
  if (path.endsWith('.md') || path.startsWith('/functions/') || path === '/_headers') {
    return new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
  }
  return next();
}
