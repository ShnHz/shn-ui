// 导入组件，组件必须声明 name
import ModelMask from './src/shn-model-mask.vue'

ModelMask.install = function (Vue) {
    Vue.component(ModelMask.name, ModelMask)
}

export default ModelMask