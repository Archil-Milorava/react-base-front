import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/react-base-front",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
