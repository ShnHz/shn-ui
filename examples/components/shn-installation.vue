<template>
  <div class="content-box">
    <h2 class="demo-title">安装</h2>

    <!-- 致谢 -->
    <h3 class="demo-table-title">致谢</h3>
    <div class="demo-tip">
      <p>
        该项目DEMO页面模仿
        <span style="color:#ff0000;margin:0 5px;font-weight:600">Element-ui</span>页面开发
      </p>
      <p>
        <a
          href="https://element.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >https://element.eleme.io/#/zh-CN/component/installation</a>
      </p>
    </div>

    <!-- NPM安装 -->
    <h3 class="demo-table-title">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">npm i shn-vue-ui -S</div>

    <!-- 快速上手 -->
    <h3 class="demo-table-title">快速上手</h3>
    <p class="demo-introduction">你可以在 main.js 中引入整个 shn-ui。</p>
    <div class="demo-code-block">
      <p>import shnUI from './../packages/index'</p>
      <p style="margin-top:20px">Vue.use(shnUI);</p>
    </div>

    <!-- 开始使用 -->
    <h3 class="demo-table-title">开始使用</h3>
    <p class="demo-introduction">至此，一个基于 Vue 安装了 Shn-ui插件 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
export default {
  name: 'shn-installation',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

