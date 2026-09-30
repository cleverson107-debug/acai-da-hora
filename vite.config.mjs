import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "release",
    emptyOutDir: true,
    sourcemap: false,
  },
});
