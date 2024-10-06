import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            rollupTypes: true,
        }),
        libCss(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "index.ts"),
            name: "modal-bottom-sheet",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDom",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
