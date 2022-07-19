import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

import './style/style.sass'

createApp(App).use(i18n).use(store).use(router).mount('#app')
