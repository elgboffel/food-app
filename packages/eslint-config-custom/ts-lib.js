const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.

 *
 */

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
