import { defineConfig } from "tinacms";

export default defineConfig({
  // Local-only mode
  localMode: true,

  // Basic build configuration
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  // Media configuration
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  // Content schema
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
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
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