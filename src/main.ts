  
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/tailwind.css'

export const app = createApp(App)

document.addEventListener('DOMContentLoaded', () => {
  app.use(store).use(router).mount('#app')
})