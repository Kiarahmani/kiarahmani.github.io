// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Custom domain (krahmani.com) → site root, no base path.
export default defineConfig({
  site: "https://krahmani.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
