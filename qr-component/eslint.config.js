import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler";
import tseslint from "typescript-eslint";

export default tseslint.config([
    // Global ignores
    {
        ignores: ["dist/**", "build/**", "node_modules/**"],
    },

    // Base configuration for all files
    js.configs.recommended,

    // TypeScript configuration
    {
        files: ["**/*.{ts,tsx}"],
        extends: [...tseslint.configs.recommended],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ["./tsconfig.app.json", "./tsconfig.node.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // React configuration
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "react-compiler": reactCompiler,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "react-compiler/react-compiler": "error",
        },
    },
]);
