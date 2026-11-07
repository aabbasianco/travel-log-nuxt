import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

import "./lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon/module", "@nuxtjs/color-mode"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "~": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/app",
    "@": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/app",
    "~~": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt",
    "@@": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt",
    "#shared": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/shared",
    "#server": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/server",
    "assets": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/app/assets",
    "public": "/Work/Studios/Shape/Projects/Flow/Code/travel-log-nuxt/public",
    "images": fileURLToPath(new URL("./assets/images", import.meta.url)),
    "style": fileURLToPath(new URL("./assets/style", import.meta.url)),
  },
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
