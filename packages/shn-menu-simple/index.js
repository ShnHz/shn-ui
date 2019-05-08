// 导入组件，组件必须声明 name
import MenuSimple from './src/shn-menu-simple.vue'

MenuSimple.install = function (Vue) {
    Vue.component(MenuSimple.name, MenuSimple)
}

export default MenuSimple