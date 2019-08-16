<template>
  <div class="content-box">
    <h2 class="demo-title">CountryPicker 国家选择器</h2>
    <p class="demo-introduction">用于选择国家。</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="354" :title="'基础用法'">
      <template v-slot:demo>
        <shn-country-picker v-model="simple.value" />
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
      <shn-table-simple :data="api" :type="'demo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'shn-country-picker-demo',
  data() {
    return {
      simple: {
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
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

