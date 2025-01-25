import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  integrations: [
    react(),
    mdx(),
    {
      name: 'tina-cms',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            vite: {
              plugins: [],
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
      proxy: {
        '/api/tina': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
  },
});