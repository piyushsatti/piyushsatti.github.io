// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://piyushsatti.com",
  // Only use base path in production (GitHub Pages)
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  integrations: [
    // /design/ (design proof) and /retro/ (iframes of other pages) stay out of the sitemap.
    sitemap({ filter: (page) => !/\/(design|retro)\/$/.test(page) }),
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
