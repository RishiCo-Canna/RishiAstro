import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static', // Changed from 'server' to 'static' for static site generation
  integrations: [
    react(),
    mdx(),
    {
      name: 'tina-cms',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            vite: {
              define: {
                'process.env.TINA_CLIENT_ID': JSON.stringify(process.env.TINA_CLIENT_ID),
                'process.env.TINA_TOKEN': JSON.stringify(process.env.TINA_TOKEN),
                'process.env.TINA_SEARCH_TOKEN': JSON.stringify(process.env.TINA_SEARCH_TOKEN),
              },
            },
          });
        },
      },
    },
  ],
  vite: {
    server: {
      hmr: {
        clientPort: 5000,
        port: 5000,
      },
    },
  },
});