// 导入组件，组件必须声明 name
import Drawer from './src/shn-drawer.vue'

Drawer.install = function (Vue) {
    Vue.component(Drawer.name, Drawer)
}

export default Drawer