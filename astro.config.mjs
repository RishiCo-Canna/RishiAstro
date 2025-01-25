import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 5000,
    host: '0.0.0.0', // Allow connections from external hosts
  },
  integrations: [
    {
      name: 'tina-cms',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            vite: {
              plugins: [],
            },
          });
        },
      },
    },
  ],
  vite: {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        // Update with current replit domain
        '4cfdb5e0-48f2-4114-a872-9ce4be5cf34f-00-3u06s2weisy18.picard.replit.dev'
      ],
      port: 5000,
      host: '0.0.0.0',
      strictPort: true,
    },
  },
});