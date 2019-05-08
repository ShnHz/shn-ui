// 导入组件，组件必须声明 name
import PulldownRefresh from './src/shn-pulldown-refresh.vue'

PulldownRefresh.install = function (Vue) {
    Vue.component(PulldownRefresh.name, PulldownRefresh)
}

export default PulldownRefresh