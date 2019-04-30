// 导入组件，组件必须声明 name
import UploadImg from './src/shn-upload-img.vue'

UploadImg.install = function (Vue) {
    Vue.component(UploadImg.name, UploadImg)
}

export default UploadImg