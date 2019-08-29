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

//数组去重
Vue.prototype.unique = function (array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
      var current = array[i];
      if (res.indexOf(current) === -1) {
          res.push(current)
      }
  }
  return res;
}