import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE || 'https://yourusername.github.io',
  base: process.env.BASE || '/',
  output: 'static',
});
