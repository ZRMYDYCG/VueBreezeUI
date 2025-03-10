import { createApp } from 'vue'
import App from './App.vue'
import BreezeUi from 'breeze-ui-lib'
import 'breeze-ui-lib/dist/index.css'
import './style.css'
import router from './router'

createApp(App).use(router).use(BreezeUi).mount('#app')
