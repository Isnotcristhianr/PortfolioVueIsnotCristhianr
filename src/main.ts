import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//traductions
import { createI18n } from 'vue-i18n'
import es from '../locales/es.json'
import en from '../locales/en.json'

const i18n = createI18n({
    legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

const app = createApp(App)
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')

export default i18n
