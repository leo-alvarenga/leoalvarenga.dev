// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  image: {
    domains: ["https://cdn.jsdelivr.net"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },

  integrations: [icon()],
});