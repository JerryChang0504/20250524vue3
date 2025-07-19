import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'
import { formatPrice, formatDate } from './utils/format'


const app =createApp(App)
app.component('AlertBox',AlertBox)
app.config.globalProperties.$formatPrice= formatPrice
app.config.globalProperties.$formatDate = formatDate
app.mount('#app')
