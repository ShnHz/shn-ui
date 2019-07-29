// 导入组件，组件必须声明 name
import DateRangePicker from './src/shn-date-range-picker.vue'

DateRangePicker.install = function (Vue) {
    Vue.component(DateRangePicker.name, DateRangePicker)
}

export default DateRangePicker