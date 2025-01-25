import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  integrations: [tailwind()],
});