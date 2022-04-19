import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import api from './apis/index'
import 'virtual:windi.css'

createApp(App).use(createPinia()).use(router).use(api).mount('#app')
