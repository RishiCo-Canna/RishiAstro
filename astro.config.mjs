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
    react(), // Required for Tina
    mdx(), // Add MDX support
    tailwind(),
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
              },
            },
          });
        },
      },
    },
  ],
  vite: {
    server: {
      fs: {
        strict: false,
      },
      hmr: {
        clientPort: 5000,
      },
    },
  },
});