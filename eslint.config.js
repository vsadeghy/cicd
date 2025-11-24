import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
export default defineConfig(
	js.configs.recommended,
	tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		files: ["**/*.js"],
		extends: [tseslint.configs.disableTypeChecked],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
	{
		plugins: { "unused-imports": unusedImports },
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},
	{
		ignores: ["/node_modules/**", "/dist/**", "**/*.d.ts"],
	}
);
