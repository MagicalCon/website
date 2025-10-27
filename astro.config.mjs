// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
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
});
