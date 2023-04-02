import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    // Inject vite plugins
    plugins: [
        react(),
        viteTsconfigPaths(),
        Unfonts({
            custom: {
                families: [{ name: "Arcade", local: "Arcade", src: "./public/fonts/*.ttf" }],
                display: "auto",
                preload: true,
                injectTo: "head-prepend",
            },
        }),
        eslint(),
    ],
    // Config build options
    build: {
        outDir: "build",
    },
    // Config development options
    server: {
        open: true,
        port: 3000,
    },
});
