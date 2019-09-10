<template>
  <div class="content-box">
    <h2 class="demo-title">DatePicker 日期选择器</h2>
    <p class="demo-introduction">用于选择日期。</p>

    <!-- 日期范围选择DEMO -->
    <shn-el-demo-block :height="354" :introduction="'可在一个选择器中便捷地选择一个时间范围'" :title="'日期范围选择'">
      <template v-slot:demo>
        <shn-date-range-picker rangeSeparator="至" v-model="range.value"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(range.code.html)}}</code>
        <code class="javascript">{{fCode(range.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 日期范围选择DEMO -->
    <shn-el-demo-block
      :height="354"
      :introduction="'通过扩展基础的日期选择，可以选择周、月、季度或年，默认全选'"
      :title="'选择日期单位组'"
    >
      <template v-slot:demo>
        <shn-date-range-picker
          :periods="['month','year']"
          rangeSeparator="至"
          v-model="periods.value"
        />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(periods.code.html)}}</code>
        <code class="javascript">{{fCode(periods.code.javascript)}}</code>
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
          <shn-date-range-picker v-model="range.value" rangeSeparator="至" />
          `,
          javascript: `
          export default {
            data() {
              return {
                range:{
                  value:''
                }
              }
            },
            methods: {
              
            }
          }
          `
        },
        value: ''
      },
      periods: {
        code: {
          html: `
          <shn-date-range-picker v-model="periods.value" rangeSeparator="至" :periods="['month','year']"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                periods:{
                  value:''
                }
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
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'rangeSeparator',
          description: '范围间隔符',
          dataTypes: 'String',
          optional: '',
          default: '-'
        },
        {
          parameter: 'periods',
          description: '日期单位组',
          dataTypes: 'Array',
          optional: 'day / week / month / quarter / year',
          default: 'all'
        },
        {
          parameter: 'allDate',
          description: '全部日期数组',
          dataTypes: 'Array',
          optional: '',
          default: `['1970-01-01',today]`
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

