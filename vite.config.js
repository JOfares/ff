import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // تأكد من أن Vite يبدأ من المجلد الرئيسي
  build: {
    rollupOptions: {
      input: "public/index.html", // تحديد مسار index.html
    },
  },
});
