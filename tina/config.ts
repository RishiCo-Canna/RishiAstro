import { defineConfig } from "tinacms";
import type { TokenObject } from "tinacms/dist/admin/authenticate";

export default defineConfig({
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
  // Enable local mode explicitly
  local: true,
  // Configure basic auth for local admin
  admin: {
    auth: {
      // Using simple local authentication with proper type
      onLogin: async ({ token }: { token: TokenObject }) => {
        // Simple local auth - always allow access
        return;
      },
      logout: async () => {
        return;
      },
      getToken: async () => {
        return null;
      },
      getUser: async () => {
        return { id: '1', name: 'Admin' };
      },
      authorize: async () => {
        return true;
      }
    }
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