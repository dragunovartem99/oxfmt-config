/**
 * The same config for Prettier, for files oxfmt cannot format yet (e.g. `.astro`).
 * Consumers add their own plugins on top.
 */
import config from "./index";

/** Keys only oxfmt understands — Prettier warns on unknown options */
const OXFMT_ONLY = new Set([
	"ignorePatterns",
	"insertFinalNewline",
	"jsdoc",
	"overrides",
	"sortImports",
	"sortPackageJson",
	"sortTailwindcss",
	"svelte",
]);

export default Object.fromEntries(Object.entries(config).filter(([key]) => !OXFMT_ONLY.has(key)));
