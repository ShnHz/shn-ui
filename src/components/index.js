import Vue from "vue"

import Input from './shn-input.vue'

const Components = {
    Input
}

Object.keys(Components).forEach(name => {
    Vue.component(name,Components[name])
})

export default Components