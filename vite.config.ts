import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import { defineConfig } from "vite";
// import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "empty",
  plugins: [dts({outDir: 'lib'})],
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "is-ecma-keyword",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    target: "es6",
    minify: false,
  },
});
