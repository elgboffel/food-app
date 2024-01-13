import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  target: "es2019",
  entry: ["src"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  minify: true,
  ...options,
}));
