// 导入组件，组件必须声明 name
import Input from './src/shn-input.vue'

Input.install  = function (Vue) {
    Vue.component(Input.name, Input)
}

export default Input