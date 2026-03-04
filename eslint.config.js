import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  tseslint.configs.recommended,
  eslintConfigPrettier,

  {
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Recomendado desativar outras regras de ordenação para evitar conflitos
      "sort-imports": "off",
      "import/order": "off",
    },
    // Certifique-se que o parser entende a sintaxe de import/export (ES Modules)
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
]);
