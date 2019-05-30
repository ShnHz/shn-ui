// 导入组件，组件必须声明 name
import UrlParam from './src/shn-url-param.vue'

UrlParam.install = function (Vue) {
    Vue.component(UrlParam.name, UrlParam)
}

export default UrlParam