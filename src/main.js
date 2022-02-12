import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './style/colors/color-1.css'
import './style/style.sass'

createApp(App).use(store).use(router).mount('#app')
