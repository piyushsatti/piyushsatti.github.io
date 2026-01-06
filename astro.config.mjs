// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://piyushsatti.github.io",
  // Only use base path in production (GitHub Pages)
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  integrations: [
    sitemap(),
    tailwind({
      config: "./tailwind.config.mjs",
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      langs: [],
      wrap: true,
    },
  },
});
