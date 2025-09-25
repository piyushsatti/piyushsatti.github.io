import { getCollection } from "astro:content";
import { getAllTags } from "../lib/tags";

export const prerender = true;

const basePaths = [
  "",
  "about",
  "projects",
  "research",
  "blog",
  "tags",
  "hobbies",
  "contact",
];

const formatDate = (value) =>
  value ? new Date(value).toISOString() : undefined;

export async function GET({ site }) {
  const origin = site ?? "https://piyushsatti.github.io";

  const urls = new Map();

  basePaths.forEach((path) => {
    const loc = new URL(path, origin).toString();
    urls.set(loc, {});
  });

  const blogEntries = await getCollection("blog");
  blogEntries.forEach((entry) => {
    const loc = new URL(`blog/${entry.slug}/`, origin).toString();
    const lastmod =
      formatDate(entry.data.updated ?? entry.data.pubDate) ?? undefined;
    urls.set(loc, { lastmod });
  });

  const projectEntries = await getCollection("projects");
  projectEntries.forEach((entry) => {
    const loc = new URL(`projects/${entry.slug}/`, origin).toString();
    const lastmod =
      formatDate(entry.data.endDate ?? entry.data.startDate) ?? undefined;
    urls.set(loc, { lastmod });
  });

  const researchEntries = await getCollection("research");
  researchEntries.forEach((entry) => {
    const loc = new URL(`research/${entry.slug}/`, origin).toString();
    const lastmod = formatDate(entry.data.pubDate) ?? undefined;
    urls.set(loc, { lastmod });
  });

  const tagBuckets = await getAllTags();
  tagBuckets.forEach((tag) => {
    const loc = new URL(`tags/${tag.slug}/`, origin).toString();
    urls.set(loc, {});
  });

  const urlset = Array.from(urls.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([loc, details]) => {
      const lines = [`  <url>`, `    <loc>${loc}</loc>`];
      if (details.lastmod) {
        lines.push(`    <lastmod>${details.lastmod}</lastmod>`);
      }
      lines.push(`  </url>`);
      return lines.join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}