import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

// import './assets/main.css'
import './assets/css/app.css'

// 动态注册所有 icon 无奈之举
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)

// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})

app.use(router)

app.mount('#app')
