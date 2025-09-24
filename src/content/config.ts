import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().max(280),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    tldr: z.array(z.string()).max(5).optional()
  })
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    summary: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    paper: z.string().url(),     // DOI or paper link
    image: z.string().optional(),
    tldr: z.array(z.string()).max(5).optional()
  })
});

export const collections = { posts, projects, research };
