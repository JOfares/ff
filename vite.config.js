import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // تمكين React و JSX
  build: {
    rollupOptions: {
      input: "public/index.html",
    },
  },
});
