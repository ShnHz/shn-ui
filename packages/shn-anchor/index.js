// 导入组件，组件必须声明 name
import Anchor from './src/shn-anchor.vue'

Anchor.install = function (Vue) {
    Vue.component(Anchor.name, Anchor)
}

export default Anchor