import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio_P8/", // <- Ajouté pour GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Chaque librairie majeure devient un chunk séparé
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
          // Optionnel : mettre tes gros composants dans un chunk à part
          if (id.includes("src/components/Projects")) {
            return "projects";
          }
          if (id.includes("src/components/Skills")) {
            return "skills";
          }
          if (id.includes("src/components/Hero")) {
            return "hero";
          }
        },
      },
    },
  },
});
