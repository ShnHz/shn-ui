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

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="354" :title="'搜索功能'">
      <template v-slot:demo>
        <shn-country-picker search v-model="search.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(search.code.html)}}</code>
        <code class="javascript">{{fCode(search.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="354" :title="'显示中文'">
      <template v-slot:demo>
        <shn-country-picker chinese search v-model="chinese.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(chinese.code.html)}}</code>
        <code class="javascript">{{fCode(chinese.code.javascript)}}</code>
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
          <shn-country-picker v-model="simple.value" />
          `,
          javascript: `
          export default {
            data() {
              return {
                simple:{
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
      search: {
        code: {
          html: `
          <shn-country-picker v-model="search.value" search/>
          `,
          javascript: `
          export default {
            data() {
              return {
                search:{
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
      chinese: {
        code: {
          html: `
          <shn-country-picker v-model="search.value" search chinese/>
          `,
          javascript: `
          export default {
            data() {
              return {
                chinese:{
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
          parameter: 'search',
          description: '是否开启搜索',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'chinese',
          description: '按钮内值是否显示中文',
          dataTypes: 'String',
          optional: 'true / false',
          default: 'false'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

