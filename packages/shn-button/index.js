// 导入组件，组件必须声明 name
import Button from './src/shn-button.vue'

Button.install = function (Vue) {
    Vue.component(Button.name, Button)
}

export default Button