// 导入组件，组件必须声明 name
import BackTop from './src/shn-backtop.vue'

BackTop.install = function (Vue) {
    Vue.component(BackTop.name, BackTop)
}

export default BackTop