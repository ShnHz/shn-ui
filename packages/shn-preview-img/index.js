// 导入组件，组件必须声明 name
import PreviewImg from './src/shn-preview-img.vue'

PreviewImg.install = function (Vue) {
    Vue.component(PreviewImg.name, PreviewImg)
}

export default PreviewImg