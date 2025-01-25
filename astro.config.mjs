import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static', // Static site generation
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
              server: {
                hmr: {
                  protocol: 'ws',
                  host: '0.0.0.0',
                  port: 3000,
                  clientPort: 443,
                },
                watch: {
                  usePolling: true
                }
              }
            },
          });
        },
      },
    },
  ],
  server: {
    port: 3000,
    host: true, // Required for Replit
  },
});