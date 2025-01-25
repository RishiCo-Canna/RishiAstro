import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import { tinaPlugin } from "tinacms/dist/astro-plugin";

export default defineConfig({
  output: 'static', // Static site generation
  integrations: [
    react(),
    mdx(),
    tinaPlugin({
      clientId: process.env.TINA_CLIENT_ID,
      token: process.env.TINA_TOKEN,
      build: {
        outputFolder: "admin",
        publicFolder: "public",
        basePath: "admin",
      },
      media: {
        tina: {
          mediaRoot: "public/images",
          publicFolder: "public",
        },
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});