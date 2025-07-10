
import { defineCollection, z } from 'astro:content';

const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    slides: z.string().optional(),
    video: z.string().optional(),
  }),
});

export const collections = {
  talks,
};