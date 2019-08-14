import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
//导入mui的样式表，和bootstarp的用法没有差别
import './lib/mui/css/mui.min.css'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// import './css/app.css'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

import app from './app.vue'
//导入自定义路由模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})