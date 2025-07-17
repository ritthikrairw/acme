/// <reference types='vitest' />

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

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
  cacheDir: "../../node_modules/.vite/apps/tanstack-start",
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({ customViteReactPlugin: true }),
    viteReact(),
  ],
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
