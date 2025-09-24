import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO date string
    summary: z.string().max(280),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // optional fields
    tldr: z.array(z.string()).max(3).optional(),
    cover: z.string().optional(), // path to image in /public
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    doi: z.string().url(),
    summary: z.string(),
    pdf: z.string().url().optional()
  })
});

export const collections = { projects, blog, research };