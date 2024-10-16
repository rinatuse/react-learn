import pluginJs from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    pluginJs.configs.recommended,

    {
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },

    // Отключаем конфликтующие правила ESLint
    prettierConfig,
];
