// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";
//import github from '@astrojs/github-pages';

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
	//site: "https://IshaanSaxena0.github.io/sidstarch-website",
	//adapter: github(),
	base: "/",
	// trailingSlash: 'always',
	integrations: [
		tailwind(),
		alpinejs(),
		mdx(),
		(await import("@playform/inline")).default({
			Critters: true,
		}),
	],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	experimental: {
		svg: true,
	},
});
