<template>
  <div class="content-box">
    <h2 class="demo-title">BackTop 回到顶部</h2>
    <p class="demo-introduction">返回页面顶部的操作按钮。</p>
    <!-- <div class="demo-waring">
      <p>
        该组件待优化，被收缩内容带有
        <code>padding</code>或
        <code>margin</code>会导致动画卡顿
      </p>
    </div>-->

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="82" :title="'基础用法'">
      <template v-slot:demo>
        <p class="demo-code-en-p">Scroll down to see the bottom-right gray button.</p>
        <p class="demo-code-cn-p">向下滚动以查看右下方的按钮。</p>
        <shn-backtop :visibilityHeight="100"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 自定义样式DEMO -->
    <shn-el-demo-block :height="125" :introduction="'可以自定义回到顶部按钮的样式'" :title="'自定义样式'">
      <template v-slot:demo>
        <p class="demo-code-cn-p">单击下方文字回到顶部。</p>
        <shn-backtop :visibilityHeight="0">
          <div style="font-size:14px;margin-top:20px;cursor: pointer;">回到顶部</div>
        </shn-backtop>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(customize.code.html)}}</code>
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
  name: 'shn-backtop-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-backtop :target="'router_view_box'" :visibilityHeight="100"/>
          `
        }
      },
      customize: {
        code: {
          html: `
          <shn-backtop :visibilityHeight="0">
            <div style="font-size:14px;margin-top:20px;cursor: pointer;">回到顶部</div>
          </shn-backtop>
          `
        }
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
          description: '滚动高度达到此参数值才出现按钮，为0时不隐藏按钮',
          dataTypes: 'Number',
          optional: '',
          default: '500'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

