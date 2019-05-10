<script>
let _scrollTop

//popup 显示时调用
function afterOpen() {
  _scrollTop = document.scrollingElement.scrollTop
  document.body.style.position = 'fixed'
  document.body.style.top = -_scrollTop + 'px'
}

//popup 关闭时调用
function beforeClose() {
  document.body.style.position = ''
  document.body.style.top = ''
  document.scrollingElement.scrollTop = _scrollTop
}
export default {
  afterOpen,
  beforeClose
}
</script>