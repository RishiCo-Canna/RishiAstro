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
    basePath: "/admin",
  },

  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },

  schema,

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
  },

  // Use direct host configuration instead of relying on REPL_SLUG
  admin: {
    host: '0.0.0.0',
    port: 443
  }
});