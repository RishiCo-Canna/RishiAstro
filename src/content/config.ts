import { defineCollection, z } from 'astro:content';

// Define the schema for posts to match Tina's configuration
export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      draft: z.boolean().default(false),
      // Add any additional fields that match your Tina schema
    }),
  }),
  // Add settings collection to match Tina's configuration
  settings: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
};