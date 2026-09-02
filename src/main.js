import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vAnimate } from './directives/animate'

const app = createApp(App)

app.use(router)
app.directive('animate', vAnimate)

app.mount('#app')
