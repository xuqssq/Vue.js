//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import app from './app.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
    //全局过滤器格式化时间
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂载路由对象

})