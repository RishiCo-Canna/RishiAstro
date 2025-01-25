import { defineConfig } from "tinacms";
import schema from "./schema";

// Get the current branch from environment variables
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,

  // Client configuration
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "",
  },

  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },

  schema,

  // Search configuration
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"]
    },
    maxSearchIndexFieldLength: 100
  },

  // Local API configuration
  contentApiUrlOverride: "/api/tina/gql",

  // Configure datalayer port to avoid conflicts
  admin: {
    dataLayer: {
      port: 5001
    }
  }
});