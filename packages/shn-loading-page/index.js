// 导入组件，组件必须声明 name
import LoadingPage from './src/shn-loading-page.vue'

LoadingPage.install = function (Vue) {
    Vue.component(LoadingPage.name, LoadingPage)
}

export default LoadingPage