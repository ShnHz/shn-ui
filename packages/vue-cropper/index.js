// 导入组件，组件必须声明 name
import VueCropper from './src/vue-cropper.vue'

VueCropper.install = function (Vue) {
    Vue.component(VueCropper.name, VueCropper)
}

export default VueCropper