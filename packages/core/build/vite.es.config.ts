import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import dts from 'vite-plugin-dts'
import { filter, map } from "lodash-es"
import {readdirSync} from "node:fs";

function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath, { withFileTypes: true })

    return map(
        filter(entries, (entry) => entry.isDirectory()),
        (entry) => entry.name
    )
}

export default defineConfig({
    plugins: [vue(), dts({
        tsconfigPath: "../../tsconfig.build.json",
        outDir: "./dist/types"
    }) as any],
    build: {
        outDir: './dist/es',
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, "../index.ts"),
            name: "BreezeUi",
            fileName: "index",
            formats: ["es"]
        },
        rollupOptions: {
            external: [
                "vue",
                "@fortawesome/fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons",
                "@fortawesome/vue-fontawesome",
                "@popperjs/core",
                "async-validator",
            ],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css") {
                        return "index.css"
                    }
                    if(
                        assetInfo.type === "asset" &&
                        /\.(css)$/i.test(assetInfo.name as string)
                    ) {
                        return 'theme/[name].[ext]'
                    }
                    return assetInfo.name as string
                },
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor"
                    }
                    if(id.includes("packages/hooks")) {
                        return "hooks"
                    }
                    if(id.includes("packages/utils") || id.includes("plugin-vue:export-helper")) {
                        return "utils"
                    }
                    // 按组件分包
                    for(const item of getDirectoriesSync("../components")) {
                        if(id.includes(`/packages/components/${item}`)) {
                            return item
                        }
                    }
                }
            },
        }
    },
})