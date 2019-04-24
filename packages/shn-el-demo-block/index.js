// 导入组件，组件必须声明 name
import ElDemoBlock from './src/shn-el-demo-block.vue'

ElDemoBlock.install = function (Vue) {
    Vue.component(ElDemoBlock.name, ElDemoBlock)
}

export default ElDemoBlock