import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { isPublished } from "../lib/published";

export const prerender = true;

export async function GET(context) {
  const posts = (await getCollection("blog", isPublished)).sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
  return rss({
    title: "Piyush Satti",
    description: "Blog posts by Piyush Satti.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/blog/${post.slug}/`,
    })),
  });
}
