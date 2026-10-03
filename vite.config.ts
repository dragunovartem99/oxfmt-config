import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: {
				index: "src/index.ts",
				prettier: "src/prettier.ts",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["oxfmt"],
		},
	},
});
