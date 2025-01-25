import { defineCollection, z } from 'astro:content';

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      draft: z.boolean().default(false),
    }),
  }),
};