import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { preset } from 'prism-ui'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true, pt: preset })
app.mount('#app')
