import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify"; 
import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://kd.ms",
  trailingSlash: "never",
  integrations: [
    embeds({
      services: {
        LinkPreview: false,
      },
    }),
    mdx({
      allowEmpty: true,
    }),
    tailwind(),
    alpinejs(),
    sitemap(),
    icon(),
  ],
  output: "server",
  adapter: netlify(), // Ensure this is static for Netlify
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
      rehypeKatex,
    ],
    remarkPlugins: [remarkMath],
  },
});
