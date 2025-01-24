import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import tina from "tinacms/astro";

export default defineConfig({
  integrations: [
    react(), 
    tailwind(),
    tina({
      publicFolder: "public",
      clientId: process.env.TINA_CLIENT_ID,
      token: process.env.TINA_TOKEN,
    })
  ],
  output: 'static'
});