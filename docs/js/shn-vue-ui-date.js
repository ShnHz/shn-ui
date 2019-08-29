const shnUiDate = {
  //格式化日期 填0
  appendZero(val) {
    if (val < 10) return "0" + "" + val;
    else return val;
  },
  //取今天 yyyy-MM-dd
  getToday(date) {
    date = new Date()
    return (
      date.getFullYear() + '-' + shnUiDate.appendZero((date.getMonth() + 1)) + '-' + shnUiDate.appendZero(date.getDate())
    )
  },
  //取今天前几天 yyyy-MM-dd 返回数组[前,今天]
  getLastDay(num) {
    let date_e = new Date().getTime()
    let date_s = date_e - num * 24 * 60 * 60 * 1000
    return [shnUiDate.formatDate(date_s), shnUiDate.getToday()]
  },
  //取某天的某周 周日和本周六 yyyy-MM-dd 返回数组[周日,周六]
  getSomeWeek(date) {
    let todayWeek = shnUiDate.getWeek(date)
    return [shnUiDate.formatDate(new Date(date).getTime() - (todayWeek) * 24 * 60 * 60 * 1000), shnUiDate.formatDate(new Date(date).getTime() + (6 - todayWeek) * 24 * 60 * 60 * 1000)]
  },
  //取年份 yyyy
  getYear(date) {
    return new Date(date).getFullYear()
  },
  //取月份 MM
  getMonth(date) {
    return new Date(date).getMonth() + 1
  },
  //取天 dd
  getDay(date) {
    return new Date(date).getDate()
  },
  //取礼拜几 "星期日","星期一","星期二","星期三","星期四","星期五","星期六"
  getWeek(date) {
    return new Date(date).getDay()
  },
  //取某年某月最后一天 dd
  getLastDayOfMonth(year, month) {
    let date = new Date(year, month - 1, '01');
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);

    return cdate.getDate();
  },
  //格式化日期 yyyy-MM-dd
  formatDate(date) {
    date = new Date(date)
    return (
      date.getFullYear() + '-' + shnUiDate.appendZero((date.getMonth() + 1)) + '-' + shnUiDate.appendZero(date.getDate())
    )
  },
  //格式化日期 yyyy年MM月dd日
  formatDateChinese(date) {
    date = new Date(date)
    return (
      date.getFullYear() + '年' + shnUiDate.appendZero((date.getMonth() + 1)) + '月' + shnUiDate.appendZero(date.getDate()) + '日'
    )
  },
  //格式化日期 yyyy.MM.dd
  formatDatePoint(date) {
    date = new Date(date)
    return (
      date.getFullYear() + '.' + shnUiDate.appendZero((date.getMonth() + 1)) + '.' + shnUiDate.appendZero(date.getDate())
    )
  },
}

export {
  shnUiDate
}