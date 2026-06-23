import { defineConfig } from "oxfmt";

export default defineConfig({
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: "consistent",
	jsxSingleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	objectWrap: "preserve",
	bracketSameLine: false,
	arrowParens: "always",
	requirePragma: false,
	insertPragma: false,
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "css",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: true,
	sortPackageJson: {
		sortScripts: true,
	},
	ignorePatterns: [],
	overrides: [
		{
			files: ["*.md"],
			options: { useTabs: false },
		},
	],
});
