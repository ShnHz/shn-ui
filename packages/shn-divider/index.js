// 导入组件，组件必须声明 name
import Divider from './src/shn-divider.vue'

Divider.install = function (Vue) {
    Vue.component(Divider.name, Divider)
}

export default Divider