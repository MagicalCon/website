// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://magicalcon.be",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("thank-you"),
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Mouse Memoirs",
        cssVariable: "--font-mouse",
        weights: [400, 700],
      },
      {
        provider: fontProviders.google(),
        name: "Open Sans",
        cssVariable: "--font-open",
        weights: [400, 700],
      },
    ],
  },
  adapter: netlify(),
});
