import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
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
    ],
    build: {
        outDir: "build",
    },
    server: {
        open: true,
        port: 3000,
    },
});
