import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Import the router instance we created

const app = createApp(App)

app.use(router) // 2. This is the crucial line: Tell the app to use the router

app.mount('#app')
