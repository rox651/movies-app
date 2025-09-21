/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.tsx",
    exclude: ["tests/**", "playwright/**", "node_modules/**"],
    deps: {
      inline: ["@tanstack/react-query", "zustand"],
    },
  },
  resolve: {
    alias: [
      { find: "react", replacement: "preact/compat" },
      { find: "react-dom/test-utils", replacement: "preact/test-utils" },
      { find: "react-dom", replacement: "preact/compat" },
      { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
      { find: "@preact/signals-react", replacement: "@preact/signals" },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
