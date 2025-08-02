import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AlertBox from './components/AlertBox.vue'
import FormatPlugin from './plugins/format'　// 載入插件



const app =createApp(App)
app.component('AlertBox',AlertBox)
app.use(FormatPlugin) // 註冊插件
app.mount('#app')
