import react from "@vitejs/plugin-react";
/// <reference types='vitest' />
import { defineConfig } from "vite";

export default defineConfig(() => ({
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    emptyOutDir: true,
    outDir: "./dist",
    reportCompressedSize: true,
  },
  cacheDir: "../../node_modules/.vite/apps/tanstack",
  plugins: [react()],
  preview: {
    host: "localhost",
    port: 4200,
  },
  root: __dirname,
  server: {
    host: "localhost",
    port: 4200,
  },
  test: {
    coverage: {
      provider: "v8" as const,
      reportsDirectory: "./test-output/vitest/coverage",
    },
    environment: "jsdom",
    globals: true,
    include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    watch: false,
  },
}));
