import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/element-plus/lib/theme-chalk/src/index.scss";

createApp(App).use(store).use(router).mount('#app')
