import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './assets/scss/base/_base.scss' // 重置檔
import { createApp } from 'vue'
import App from './App.vue' // 引入根组件
import router from './router/index.ts' // 引入路由



const app = createApp(App)
app.use(router) // 使用路由
app.mount('#page-layout')
