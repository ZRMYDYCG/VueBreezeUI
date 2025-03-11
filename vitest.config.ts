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
      // 开启自动 h 函数注入
      transformOn: true,
      optimize: true
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
