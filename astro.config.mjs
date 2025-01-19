import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://old.buildingblocs.sg',
  base: '/2024',
  redirects: {
    '/past-years': '/2024/archive'
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap()]
});