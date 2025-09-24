export async function get() {
  // List your URLs here. You can automate this if you have content collections.
  const urls = [
    "https://piyushsatti.github.io/",
    "https://piyushsatti.github.io/projects",
    "https://piyushsatti.github.io/research",
    "https://piyushsatti.github.io/blog",
    "https://piyushsatti.github.io/contact",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

  return {
    body: xml.trim(),
    headers: {
      "Content-Type": "application/xml",
    },
  };
}