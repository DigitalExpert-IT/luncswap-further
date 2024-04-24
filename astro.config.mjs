import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import postcssImport from "postcss-import";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
  server: {
    port: 3000,
  },
  vite: {
    // server: {
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:3001",
    //       changeOrigin: true,
    //     },
    //   },
    // },
    css: {
      postcss: {
        plugins: [tailwindcssNesting(), postcssImport()],
      },
    },
  },
});
