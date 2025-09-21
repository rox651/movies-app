import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import csp from "vite-plugin-csp-guard";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      preact(),
      tailwindcss(),
      svgr(),
      csp({
        policy: {
          "default-src": ["'self'"],
          "connect-src": ["'self'", env.VITE_API_URL || ""],
          "style-src": ["'self'", "'unsafe-inline'"],
        },
      }),
    ],
    build: {
      assetsDir: "",
      rollupOptions: {
        output: {
          entryFileNames: "chatbot.bundle.js",
        },
      },
    },
    resolve: {
      dedupe: ["preact"],
      alias: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom/test-utils", replacement: "preact/test-utils" },
        { find: "react-dom", replacement: "preact/compat" },
        { find: "react-dom/client", replacement: "preact/compat" },
        { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
        { find: "@preact/signals-react", replacement: "@preact/signals" },
        { find: "@", replacement: path.resolve(__dirname, "./src") },
      ],
    },
  };
});
