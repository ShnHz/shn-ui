<template>
  <div class="content-box">
    <h2 class="demo-title">DatePicker 日期选择器</h2>
    <p class="demo-introduction">用于选择日期。</p>

    <!-- 日期范围选择DEMO -->
    <shn-el-demo-block :height="522" :introduction="'可在一个选择器中便捷地选择一个时间范围'" :title="'日期范围选择'">
      <template v-slot:demo>
        <shn-date-range-picker v-model="range.value" rangeSeparator="至"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(range.code.html)}}</code>
        <code class="javascript">{{fCode(range.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- API -->
    <div>
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <shn-table-simple :data="api" :type="'demo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'shn-date-picker-demo',
  data() {
    return {
      range: {
        code: {
          html: `
          
          `,
          javascript: `
          export default {
            data() {
              return {
              }
            },
            methods: {
          
            }
          }
          `
        },
        value: ''
      },
      api: [
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素,默认为窗口',
          dataTypes: 'String',
          optional: '',
          default: 'window'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

