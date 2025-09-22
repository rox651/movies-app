import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig(() => {
  return {
    envDir: path.resolve(__dirname, ".."),
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      preact(),
      tailwindcss(),
      svgr(),
    ],
    build: {
      assetsDir: "",
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
