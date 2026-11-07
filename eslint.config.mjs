// @ts-check
import antfu from "@antfu/eslint-config";
import tailwindcss from "eslint-plugin-tailwindcss";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  }, {
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfig: {
            rootDir: ".",
          },
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  }),
  {
    settings: {
      tailwindcss: {
        cssConfigPath: "./app/assets/css/main.css",
      },
    },
  },
  // @ts-expect-error -- Tailwind plugin config types are incompatible with ESLint 10 types
  tailwindcss.configs.recommended,
);
