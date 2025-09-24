export async function get() {
  return {
    body: `
User-agent: *
Allow: /

Sitemap: https://piyushsatti.github.io/sitemap.xml
    `.trim(),
    headers: {
      'Content-Type': 'text/plain',
    },
  };
}