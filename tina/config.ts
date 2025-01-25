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
    basePath: "", // Ensure correct path resolution
  },

  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },

  schema,

  // Enhanced search configuration
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
      indexBatchSize: 100, // Optimize batch size for better indexing
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  // Local API configuration for development
  localContentApiHost: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000' 
    : undefined,

  // API endpoint configuration
  contentApiUrlOverride: process.env.NODE_ENV === 'development'
    ? '/api/tina/gql'
    : undefined,
});