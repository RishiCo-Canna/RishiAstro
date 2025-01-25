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
    port: 3000,
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
              optimizeDeps: {
                include: ['tinacms'],
              },
              server: {
                fs: {
                  strict: false,
                  allow: ['..'],
                },
                hmr: {
                  protocol: 'ws',
                  port: 3001
                }
              },
            },
          });
        },
      },
    },
  ],
});