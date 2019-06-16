// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload
// } from 'mint-ui'
// 懒加载需要导入全部样式才能正常显示延迟样式
import MintUI from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
Vue.use(VueResource)
// Vue.use(Lazyload)
Vue.use(MintUI)
Vue.use(VuePreview)

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON = true //全局设置post时表单数据格式组织形式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
