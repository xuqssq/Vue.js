import VueRouter from 'vue-router'
import HomeComtainer from './components/tabbar/HomeComtainer.vue'
import MemberComtainer from './components/tabbar/MemberComtainer.vue'
import ShopcarComtainer from './components/tabbar/ShopcarComtainer.vue'
import SearchComtainer from './components/tabbar/SearchComtainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import photos from './components/photos/photos.vue'
import shopping from './components/shopping/shopping.vue'
import message from './components/message/message.vue'
import video from './components/video/video.vue'
import about from './components/about/about.vue'

var router = new VueRouter({
        routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: HomeComtainer },
            { path: '/member', component: MemberComtainer },
            { path: '/shopcar', component: ShopcarComtainer },
            { path: '/search', component: SearchComtainer },
            { path: '/home/newslist', component: NewsList },
            { path: '/home/newsInfo:id', component: NewsInfo },
            { path: '/home/photos', component: photos },
            { path: '/home/shopping', component: shopping },
            { path: '/home/message', component: message },
            { path: '/home/video', component: video },
            { path: '/home/about', component: about }

        ],
        linkActiveClass: 'mui-active'
    })
    //把路由对象暴露出去
export default router