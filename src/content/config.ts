import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    author: z.string(),
    date: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
