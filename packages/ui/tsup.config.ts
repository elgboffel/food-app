import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  banner: {
    js: "'use client'",
  },
  target: "es2019",
  entry: ["src"],
  dts: true,
  splitting: true,
  format: ["esm", "cjs"],
  ...options,
}));
