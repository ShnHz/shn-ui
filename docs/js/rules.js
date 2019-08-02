import Vue from 'vue'

//格式化日期 填0
Vue.prototype.rulesDate = function (val) {
    let format = /^(\d{4})-(\d{2})-(\d{2})$/;
    if (format.test(val)) {
        return true
    } else {
        return false
    }
}