// 导入组件，组件必须声明 name
import WidgetModal from './src/shn-widget-modal.vue'

WidgetModal.install = function (Vue) {
    Vue.component(WidgetModal.name, WidgetModal)
}

export default WidgetModal