import { defineConfig } from "tinacms";
import schema from "./schema";

// Get the current branch from environment variables
// This ensures Tina Cloud uses the correct branch during deployment
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  // Branch configuration for Tina Cloud
  branch,

  // Authentication credentials
  clientId: process.env.TINA_CLIENT_ID || "", // Get from app.tina.io
  token: process.env.TINA_TOKEN || "", // Get from app.tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },

  // Use the schema defined in schema.ts
  schema,

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  // API endpoint configuration
  contentApiUrlOverride: "/api/tina/gql",
});