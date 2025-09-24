import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  })
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
    repo: z.string().url().optional(),
    demo: z.string().url().optional()
  })
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    pubDate: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    paper: z.string().url(),     // DOI or paper link
    image: z.string().optional(),
    repo: z.string().url().optional(),
    slides: z.string().url().optional()
  })
});

export const collections = { blog, projects, research };