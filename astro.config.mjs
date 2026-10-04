import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://rub-ep1.github.io',
  base: process.env.BASE_PATH ?? '/agmikhasenko-website',
  output: 'static',
});
