import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/home'
import member from '../components/tabbar/member.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import search from '../components/tabbar/search.vue'

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
  }],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类router-link-active
})
