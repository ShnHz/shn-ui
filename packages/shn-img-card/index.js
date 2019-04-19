// 导入组件，组件必须声明 name
import ImgCard from './src/shn-img-card.vue'

ImgCard.install = function (Vue) {
    Vue.component(ImgCard.name, ImgCard)
}

export default ImgCard