import { defineConfig } from "oxfmt";

export default defineConfig({
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertFinalNewline: true,
	jsdoc: false,
	jsxSingleQuote: false,
	objectWrap: "preserve",
	printWidth: 100,
	proseWrap: "preserve",
	quoteProps: "consistent",
	semi: true,
	singleAttributePerLine: true,
	singleQuote: false,
	sortImports: true,
	sortPackageJson: {
		sortScripts: true,
	},
	sortTailwindcss: false,
	svelte: false,
	tabWidth: 4,
	trailingComma: "es5",
	useTabs: true,
	vueIndentScriptAndStyle: false,

	ignorePatterns: [],

	overrides: [
		{
			files: ["*.md"],
			options: { useTabs: false },
		},
	],
});
