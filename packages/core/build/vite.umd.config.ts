import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import { compression } from 'vite-plugin-compression2'
import { resolve } from "path"

export default defineConfig({
    plugins: [
        vue(),
        compression({
            include: /.(cjs|css)$/i,
        }) as any
    ],
    build: {
        outDir: './dist/umd',
        lib: {
            entry: resolve(__dirname, "../index.ts"),
            name: "BreezeUi",
            fileName: "index",
            formats: ["umd"]
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                exports: "named",
                globals: {
                    vue: "Vue"
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css") {
                        return "index.css"
                    }
                    return assetInfo.name as string
                }
            }
        }
    },
})