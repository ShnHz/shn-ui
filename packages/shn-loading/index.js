// 导入组件，组件必须声明 name
import Loading from './src/shn-loading.vue'

Loading.install = function (Vue) {
    Vue.component(Loading.name, Loading)
}

export default Loading