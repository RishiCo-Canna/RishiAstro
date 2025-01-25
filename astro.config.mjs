import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

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
    tailwind(),
    {
      name: 'tina-cms',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            vite: {
              define: {
                'process.env.TINA_CLIENT_ID': JSON.stringify(process.env.TINA_CLIENT_ID),
                'process.env.TINA_TOKEN': JSON.stringify(process.env.TINA_TOKEN),
              },
              optimizeDeps: {
                include: ['tinacms'],
              },
              server: {
                fs: {
                  strict: false,
                },
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
    optimizeDeps: {
      include: ['tinacms'],
    }
  },
});