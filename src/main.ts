import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

/* 加载 ant 的 message 样式 */
import 'ant-design-vue/es/message/style/css';

// 动态注册所有 icon 无奈之举
import * as antIcons from '@ant-design/icons-vue'

// import './assets/main.css'
import './assets/css/app.css'

const app = createApp(App)

// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})

app.use(router)

app.mount('#app')
