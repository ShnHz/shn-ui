// 导入组件，组件必须声明 name
import CountryPicker from './src/shn-country-picker.vue'

CountryPicker.install = function (Vue) {
    Vue.component(CountryPicker.name, CountryPicker)
}

export default CountryPicker