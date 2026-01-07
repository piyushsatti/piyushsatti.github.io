import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    externalLink: z.string().url().optional(),
    sourceLink: z.string().url().optional(),
    tldr: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    summary: z.string().max(280),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    role: z.string().optional(),
    stack: z.union([z.array(z.string()), z.string()]).optional(),
    tldr: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    pubDate: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    paper: z.string().url(), // DOI or paper link
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    repo: z.string().url().optional(),
    slides: z.string().url().optional(),
    authors: z.array(z.string()).optional(),
    tldr: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects, research };
