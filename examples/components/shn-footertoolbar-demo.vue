<template>
  <div class="content-box">
    <h2 class="demo-title">FooterToolbar 底部工具栏</h2>
    <p class="demo-introduction">固定在底部的工具栏。</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="522" :title="'基础用法'">
      <template v-slot:demo>
        <p class="demo-code-en-p">see the bottom bar.</p>
        <p class="demo-code-cn-p">查看页面下方工具栏</p>
        <shn-footertoolbar
          :cancelButtonText="simple.cancelButtonText"
          :visibilityHeight="200"
          @cancel="cancel"
          @confirm="confirm"
        ></shn-footertoolbar>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- API -->
    <div>
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <shn-table-simple :data="api" :type="'demo'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shn-footertoolbar-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-footertoolbar
            :cancelButtonText="cancelButtonText"
            :visibilityHeight="50"
            @cancel="cancel"
            @confirm="confirm"
          ></shn-footertoolbar>
          `,
          javascript: `
          export default {
            data() {
              return {
                cancelButtonText:''
              }
            },
            methods: {
              confirm() {
                this.cancelButtonText = '取消'
              },
              cancel() {
                this.cancelButtonText = 'Cancel'
              }
            }
          }
          `
        },
        cancelButtonText: 'Cancel'
      },
      api: [
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素,默认为窗口',
          dataTypes: 'String',
          optional: '',
          default: 'window'
        },
        {
          parameter: 'visibilityHeight',
          description: '滚动高度达到此参数值才出现工具栏，为0时不隐藏工具栏',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'content',
          description: '显示的内容',
          dataTypes: 'String',
          optional: '',
          default: 'extra information'
        },
        {
          parameter: 'cancelButtonShow',
          description: '是否显示取消按钮',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'confirmButtonShow',
          description: '是否显示确定按钮',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'cancelButtonText',
          description: '取消按钮的文本内容',
          dataTypes: 'String',
          optional: '',
          default: 'Cancel'
        },
        {
          parameter: 'confirmButtonText',
          description: '确定按钮的文本内容',
          dataTypes: 'String',
          optional: '',
          default: 'Confirm'
        },
        {
          parameter: '@cancel',
          description: '取消按钮回调事件',
          dataTypes: 'Function',
          optional: '',
          default: ''
        },
        {
          parameter: '@confirm',
          description: '确定按钮回调事件',
          dataTypes: 'Function',
          optional: '',
          default: ''
        }
      ]
    }
  },
  methods: {
    confirm() {
      this.simple.cancelButtonText = '取消'
    },
    cancel() {
      this.simple.cancelButtonText = 'Cancel'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

