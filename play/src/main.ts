import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index.ts'
import '@yq-design/theme-chalk/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount('#app')
