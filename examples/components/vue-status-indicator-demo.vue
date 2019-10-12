<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">vue-status-indicator 脉冲圆点</h2>
    <p class="demo-introduction">脉冲圆点,可起弱强调作用,能方便快速的引入。</p>

    <div class="demo-tip">
      <p>该插件的作者是coderdiaz，附上github地址</p>
      <p>
        <a
          href="https://github.com/coderdiaz/vue-status-indicator"
          target="_blank"
        >https://github.com/coderdiaz/vue-status-indicator</a>
        <img
          alt
          class="github-img"
          href="https://github.com/coderdiaz/vue-status-indicator"
          src="https://img.shields.io/github/stars/coderdiaz/vue-status-indicator.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>

    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm i -S vue-status-indicator</p>
      <p>yarn add vue-status-indicator</p>
      <shn-divider />
      <p>组件内使用</p>
      <p>import {StatusIndicator} from 'vue-status-indicator'</p>
      <p>components: {</p>
      <p style="padding-left:10px">StatusIndicator</p>
      <p>}</p>
    </div>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block
      :height="168"
      :title="'基础用法'"
      id="vue-status-indicator-simple"
    >
      <template v-slot:demo>
        <div class="vue-status-indicator-simple-demo">
          <status-indicator pulse status="active"></status-indicator>
          <status-indicator positive pulse></status-indicator>
          <status-indicator intermediary pulse></status-indicator>
          <status-indicator negative pulse></status-indicator>
          <status-indicator pulse></status-indicator>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <shn-table-simple :data="api" :type="'demo'" />
    </div>
  </div>
</template>

<script>
import { StatusIndicator } from 'vue-status-indicator'

export default {
  name: 'vue-status-indicator-demo',
  components: {
    StatusIndicator
  },
  data() {
    return {
      simple: {
        code: {
          html: `
          <status-indicator pulse status="active"></status-indicator>
          <status-indicator positive pulse></status-indicator>
          <status-indicator intermediary pulse></status-indicator>
          <status-indicator negative pulse></status-indicator>
          <status-indicator pulse></status-indicator>
          `
        }
      },
      api: [
        {
          parameter: 'status',
          description: '状态（颜色）',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'pulse',
          description: '是否启用脉冲效果',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        }
      ]
    }
  },
  methods: {
    getCropData() {
      this.$refs.cropper.getCropData(data => {
        window.alert(data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-status-indicator-simple-demo {
  .status-indicator {
    margin: 10px;
  }
}
</style>

