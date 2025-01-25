// tina/config.ts
import { defineConfig } from "tinacms";

// tina/schema.ts
import { defineSchema } from "tinacms";
var schema_default = defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "post",
      path: "src/content/posts",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          isTitle: true,
          required: true
        },
        {
          type: "datetime",
          label: "Publish Date",
          name: "publishDate",
          required: true
        },
        {
          type: "boolean",
          label: "Draft",
          name: "draft",
          required: true,
          description: "Set to true to hide this post from the site"
        },
        {
          type: "rich-text",
          label: "Body",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "CalloutBox",
              label: "Callout Box",
              fields: [
                {
                  name: "type",
                  label: "Type",
                  type: "string",
                  options: ["info", "warning", "error"]
                },
                {
                  name: "text",
                  label: "Text",
                  type: "string"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Global Settings",
      name: "settings",
      path: "src/content/settings",
      format: "json",
      fields: [
        {
          type: "string",
          label: "Site Title",
          name: "title",
          required: true
        },
        {
          type: "string",
          label: "Site Description",
          name: "description",
          ui: {
            component: "textarea"
          }
        }
      ]
    }
  ]
});

// tina/config.ts
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  // Client configuration
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: ""
  },
  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public"
    }
  },
  schema: schema_default,
  // Search configuration
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"]
    },
    maxSearchIndexFieldLength: 100
  },
  // Local API configuration
  contentApiUrlOverride: "/api/tina/gql"
});
export {
  config_default as default
};
