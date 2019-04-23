// 导入组件，组件必须声明 name
import Collapse from './src/shn-collapse.vue'

Collapse.install = function (Vue) {
    Vue.component(Collapse.name, Collapse)
}

export default Collapse