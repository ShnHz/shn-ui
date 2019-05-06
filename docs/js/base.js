import Vue from 'vue'

//格式化代码,去除行前空格
Vue.prototype.fCode = function (code) {
  let code_list = []
  code.trim().split('\n').forEach(function (v) {
    code_list.push(v)
  })

  let fcode = ''
  if (code_list.length > 1) {
    let length = code_list[code_list.length - 1].match(/(^(?:\s|\t)+)/);
    length = length[0].length
    for (let i = 1; i < code_list.length; i++) {
      code_list[i] = code_list[i].slice(length)
    }
    for (let i = 0; i < code_list.length; i++) {
      fcode = fcode + code_list[i] + '\n'
    }
  } else {
    fcode = code_list[0]
  }
  return fcode
}

let _scrollTop

//popup 显示时调用
Vue.prototype.afterOpen = function () {
  _scrollTop = document.scrollingElement.scrollTop
  document.body.style.position = 'fixed'
  document.body.style.top = -_scrollTop + 'px'
}

//popup 关闭时调用
Vue.prototype.beforeClose = function () {
  document.body.style.position = ''
  document.body.style.top = ''
  document.scrollingElement.scrollTop = _scrollTop
}