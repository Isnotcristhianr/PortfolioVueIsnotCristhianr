import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//traductions
import { createI18n } from 'vue-i18n'
import es from '../src/locales/es.json'
import en from '@/locales/en.json'






const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
