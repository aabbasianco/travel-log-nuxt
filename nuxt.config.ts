import tailwindcss from "@tailwindcss/vite";

import "./lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon/module",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  debug: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    dataValue: "theme",
  },
  typescript: {
    nodeTsConfig: {
      include: ["../lib/**/*.ts"],
      compilerOptions: {
        types: ["node"],
      },
    },
  },
});
