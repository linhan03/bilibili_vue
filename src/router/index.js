import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/home'
import member from '../components/tabbar/member.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import search from '../components/tabbar/search.vue'
import newslist from '../components/news/newslist.vue'
import newsinfo from '../components/news/newsinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  }, {
    path: '/member',
    component: member
  }, {
    path: '/shopcar',
    component: shopcar
  }, {
    path: '/search',
    component: search
  }, {
    path: '/home/newslist',
    component: newslist
  }, {
    path: '/home/newsinfo/:id',
    component: newsinfo
  }],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类router-link-active
})
