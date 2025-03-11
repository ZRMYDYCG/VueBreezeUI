/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 允许混合模式
          compatConfig: {
            MODE: 3
          }
        }
      }
    }),
    vueJsx({
      // 新增 babel 插件配置
      babelPlugins: [
        [
          '@vue/babel-plugin-jsx',
          {
            autoImport: true, // 自动注入 h 函数
            transformOn: true,
            mergeProps: true
          }
        ]
      ]
    })
  ],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true)
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, './vitest.setup.ts')]
  }
})
