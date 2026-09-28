// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    prefetch: true,

    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "IBM Plex Sans",
            cssVariable: "--font-sans",
        },
        {
            provider: fontProviders.fontsource(),
            name: "IBM Plex Mono",
            cssVariable: "--font-mono",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Newsreader",
            cssVariable: "--font-serif",
        },
    ],
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
    },
    site: "https://adrianjust.com",
    integrations: [sitemap(), mdx(), icon()],
});