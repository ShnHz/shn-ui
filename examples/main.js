
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/css/cover.scss';
import '../public/iconfont/iconfont.css';
import '../public/js/base.js'


// 导入组件库
import shnUI from './../packages/index'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

// 注册组件库
Vue.use(shnUI)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
