import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/css/cover.scss';
import '../public/iconfont/iconfont.css';


// 导入组件库
import shnUI from './../packages/index'
// 注册组件库
Vue.use(shnUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
