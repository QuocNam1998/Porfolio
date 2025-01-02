import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import compress from "vite-plugin-compression2";
const viteConfig = defineViteConfig({
  plugins: [
    react(),
    compress({
      deleteOriginalAssets: false,
      threshold: 10240, // Kích thước tệp tối thiểu để nén (ở đây là 10KB)
    }),
  ],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
const vitestConfig = defineVitestConfig({
  test: {
    globals: true, // Kích hoạt các hàm toàn cục như describe, it, test
    environment: "jsdom", // Mô phỏng trình duyệt
    setupFiles: "./vitest.setup.ts", // Tệp setup cho kiểm thử
  },
});
export default mergeConfig(viteConfig, vitestConfig);
