import { defineConfig } from "tinacms";

// Determine the branch from the environment or default to "main"
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

// Validate required environment variables for TinaCMS
if (!process.env.TINA_CLIENT_ID || !process.env.TINA_TOKEN) {
  throw new Error("TINA_CLIENT_ID and TINA_TOKEN environment variables must be set.");
}

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "", // TinaCMS Client ID
  token: process.env.TINA_TOKEN || "", // TinaCMS Token
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Short description for SEO and previews.",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            description: "Add tags to categorize the post.",
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            description: "Add a thumbnail or banner image.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
