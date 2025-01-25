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
                  protocol: 'wss', // Use secure WebSocket
                  host: '0.0.0.0', // Use 0.0.0.0 to listen on all interfaces
                  port: 443, // Standard HTTPS port
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
    port: process.env.REPL_SLUG ? 443 : 3000,
    host: '0.0.0.0', // Use 0.0.0.0 for better compatibility
  },
});