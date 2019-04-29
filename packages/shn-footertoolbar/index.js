// 导入组件，组件必须声明 name
import FooterToolbar from './src/shn-footertoolbar.vue'

FooterToolbar.install = function (Vue) {
    Vue.component(FooterToolbar.name, FooterToolbar)
}

export default FooterToolbar