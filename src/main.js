import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'
import FormatPlugin from './plugins/format'　// 載入插件
import router from './router'



const app =createApp(App)
app.component('AlertBox',AlertBox)
app.use(FormatPlugin) // 註冊插件
app.use(router)
app.mount('#app')
