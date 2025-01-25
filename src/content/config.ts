import { defineCollection, z } from 'astro:content';

// Define the 'posts' collection schema
export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      body: z.string(),
    }),
  }),
};
