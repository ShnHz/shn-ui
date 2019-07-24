<template>
  <div class="content-box">
    <h2 class="demo-title">Statistic 统计数值</h2>
    <p class="demo-introduction">展示统计数值</p>

    <shn-anchor>
      <shn-anchor-link href="statistic-simple" title="基础用法" />
      <shn-anchor-link href="statistic-unit" title="单位" />
      <shn-anchor-link href="statistic-prefix" title="前缀" />
      <shn-anchor-link href="statistic-fontsize" title="字体大小" />
      <shn-anchor-link href="statistic-decimalNum" title="保留小数位数及千分位分割" />
      <shn-anchor-link href="statistic-percent" title="百分比" />
      <shn-anchor-link href="api" title="API" />
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block
      :height="250"
      :introduction="'千分位分割数值，默认保留两位小数'"
      :title="'基础用法'"
      id="statistic-simple"
    >
      <template v-slot:demo>
        <shn-statistic v-model="simple.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 单位DEMO -->
    <shn-el-demo-block :height="250" :introduction="'数值后加入自定义单位'" :title="'单位'" id="statistic-unit">
      <template v-slot:demo>
        <shn-statistic :unit="'￥'" v-model="unit.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(unit.code.html)}}</code>
        <code class="javascript">{{fCode(unit.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 前缀DEMO -->
    <shn-el-demo-block :height="250" :introduction="'数值前加入前缀'" :title="'前缀'" id="statistic-prefix">
      <template v-slot:demo>
        <shn-statistic :prefix="prefix.prefix" v-model="prefix.value" style="color:#67C23A" :decimalNum="0"/>
        <shn-statistic :prefix="prefix.prefix_2" style="margin-left:10px;color:#F56C6C" v-model="prefix.value" :decimalNum="0"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(prefix.code.html)}}</code>
        <code class="javascript">{{fCode(prefix.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 字体大小DEMO -->
    <shn-el-demo-block
      :height="250"
      :introduction="'更改整数位、小数位或单位的字体大小'"
      :title="'字体大小'"
      id="statistic-fontsize"
    >
      <template v-slot:demo>
        <shn-statistic
          :decimalFontSize="24"
          :intFontSize="16"
          :unit="'￥'"
          :unitFontSize="30"
          v-model="fontSize.value"
        />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(fontSize.code.html)}}</code>
        <code class="javascript">{{fCode(fontSize.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 保留小数位数及千分位分割DEMO -->
    <shn-el-demo-block
      :height="250"
      :introduction="'保留小数位数，是否开启千分位分割整数位'"
      :title="'保留小数位数及千分位分割'"
      id="statistic-decimalNum"
    >
      <template v-slot:demo>
        <shn-statistic :decimalNum="1" :groupSeparator="false" v-model="decimalNum.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(decimalNum.code.html)}}</code>
        <code class="javascript">{{fCode(decimalNum.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 开启百分比DEMO -->
    <shn-el-demo-block
      :height="250"
      :introduction="'开启百分比，将数值乘以100'"
      :title="'百分比'"
      id="statistic-percent"
    >
      <template v-slot:demo>
        <shn-statistic :unit="'%'" percent v-model="percent.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(percent.code.html)}}</code>
        <code class="javascript">{{fCode(percent.code.javascript)}}</code>
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
export default {
  name: 'shn-statistic-demo',
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `
          <shn-statistic v-model="value"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'800547.20'
              }
            }
          }
          `
        },
        value: '800547.20'
      },
      //单位DEMO
      unit: {
        code: {
          html: `
          <shn-statistic v-model="unit.value" :unit="'￥'"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'800547.20'
              }
            }
          }
          `
        },
        value: '800547.20'
      },
      //前缀DEMO
      prefix: {
        code: {
          html: `
          <shn-statistic v-model="prefix.value" :prefix="prefix.prefix" style="color:#67C23A" :decimalNum="0"/>
          <shn-statistic v-model="prefix.value" :prefix="prefix.prefix_2" style="color:#F56C6C" :decimalNum="0"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'8',
                prefix:'<i class="shni shn-arrowup" />',
                prefix_2: '<i class="shni shn-arrowdown" />'
              }
            }
          }
          `
        },
        value: '8',
        prefix: '<i class="shni shn-arrowup" />',
        prefix_2: '<i class="shni shn-arrowdown" />'
      },
      //字体大小DEMO
      fontSize: {
        code: {
          html: `
          <shn-statistic v-model="fontSize.value" :intFontSize="16" :decimalFontSize="24" :unitFontSize="30" :unit="'￥'"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'800547.20'
              }
            }
          }
          `
        },
        value: '800547.20'
      },
      //保留小数位数及千分位分割DEMO
      decimalNum: {
        code: {
          html: `
          <shn-statistic v-model="decimalNum.value" :decimalNum="1" :groupSeparator="false" />
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'800547.20'
              }
            }
          }
          `
        },
        value: '800547.20'
      },
      //开启百分比DEMO
      percent: {
        code: {
          html: `
          <shn-statistic v-model="percent.value" :unit="'%'" percent/>
          `,
          javascript: `
          export default {
            data() {
              return {
                value:'800547.28489'
              }
            }
          }
          `
        },
        value: '800547.28489'
      },
      api: [
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'Number / String',
          optional: '',
          default: '0'
        },
        {
          parameter: 'prefixFontSize',
          description: '前缀字体大小',
          dataTypes: 'Number',
          optional: '',
          default: '18'
        },
        {
          parameter: 'intFontSize',
          description: '整数位字体大小',
          dataTypes: 'Number',
          optional: '',
          default: '24'
        },
        {
          parameter: 'decimalFontSize',
          description: '小数位字体大小',
          dataTypes: 'Number',
          optional: '',
          default: '16'
        },
        {
          parameter: 'unitFontSize',
          description: '单位字体大小',
          dataTypes: 'Number',
          optional: '',
          default: '16'
        },
        {
          parameter: 'prefix',
          description: '前缀标识符',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'unit',
          description: '单位标识符',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'groupSeparator',
          description: '是否开启千分位',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'decimalNum',
          description: '保留几位小数',
          dataTypes: 'Number',
          optional: '',
          default: '2'
        },
        {
          parameter: 'prefixFontClass',
          description: '前缀自定义类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'intFontClass',
          description: '整数位自定义类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'decimalFontClass',
          description: '小数位自定义类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'unitFontClass',
          description: '单位自定义类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'percent',
          description: '百分比',
          dataTypes: 'Boolean',
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

