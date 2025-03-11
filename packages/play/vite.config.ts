import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
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
    }) as any
  ]
})
