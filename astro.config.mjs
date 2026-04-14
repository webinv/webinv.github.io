// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/nasze-realizacje': '/realizacje',
    '/nasze-realizacje.html': '/realizacje',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});