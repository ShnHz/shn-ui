import Vue from 'vue'
//格式化日期 填0
Vue.prototype.Appendzero = function (obj) {
  if (obj < 10) return "0" + "" + obj;
  else return obj;
}

//取今天 yyyy-MM-dd
Vue.prototype.gettoday = function (date) {
  date = new Date()
  return (
    date.getFullYear() + '-' + this.Appendzero((date.getMonth() + 1)) + '-' + this.Appendzero(date.getDate())
  )
}

//取今天前几天 yyyy-MM-dd 返回数组[前,今天]
Vue.prototype.getlastday = function (num) {
  let date_e = new Date().getTime()
  let date_s = date_e - num * 24 * 60 * 60 * 1000

  return [this.formatdate(date_s), this.formatdate(date_e)]
}


//格式化日期 yyyy-MM-dd
Vue.prototype.formatdate = function (date) {
  date = new Date(date)
  return (
    date.getFullYear() + '-' + this.Appendzero((date.getMonth() + 1)) + '-' + this.Appendzero(date.getDate())
  )
}

//格式化日期 yyyy年MM月dd日
Vue.prototype.formatdatechinese = function (date) {
  date = new Date(date)
  return (
    date.getFullYear() + '年' + this.Appendzero((date.getMonth() + 1)) + '月' + this.Appendzero(date.getDate()) + '日'
  )
}

//格式化日期 yyyy.MM.dd
Vue.prototype.formatdatepoint = function (date) {
  date = new Date(date)
  return (
    date.getFullYear() + '.' + this.Appendzero((date.getMonth() + 1)) + '.' + this.Appendzero(date.getDate())
  )
}

//格式化日期 yyyy-MM-dd 00:00:00
Vue.prototype.formatdate2 = function (date) {
  date = new Date(date)

  return (
    date.getFullYear() + '-' + this.Appendzero(date.getMonth() + 1) + '-' + this.Appendzero(date.getDate()) + " " + this.Appendzero(date.getHours()) + ":" + this.Appendzero(date.getMinutes()) + ":" + this.Appendzero(date.getSeconds())
  )
}


//格式化日期 dd\MM\yyyy
Vue.prototype.formatdate4 = function (date) {
  date = new Date(date)

  return (
    this.Appendzero(date.getDate()) + '/' + this.Appendzero((date.getMonth() + 1)) + '/' + date.getFullYear()
  )
}

//格式化日期 MM\dd
Vue.prototype.formatdate3 = function (date) {
  date = new Date(date)

  return (
    this.Appendzero(date.getMonth() + 1) + '/' + this.Appendzero(date.getDate())
  )
}