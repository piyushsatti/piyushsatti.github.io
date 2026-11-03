export const prerender = true;

export async function GET({ site }) {
  const origin = site ?? "https://piyushsatti.com";
  const sitemapURL = new URL("sitemap.xml", origin).toString();

  const body = [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapURL}`]
    .join("\n")
    .trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}