import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//组件
import component from './routers/component'
//网络插件
import elseComponent from './routers/elseComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/component/installation',
      children: [
        //组件
        ...component,
        ...elseComponent
      ]
    },
  ]
})
