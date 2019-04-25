<template>
  <div class="content-box">
    <h2 class="demo-title">Statistic 统计数值</h2>
    <p class="demo-introduction">展示统计数值</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :title="'基础用法'"
                       :introduction="'千分位分割数值，默认保留两位小数'"
                       :height="250">
      <template v-slot:demo>
        <shn-statistic v-model="simple.value" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 单位DEMO -->
    <shn-el-demo-block :title="'单位'"
                       :introduction="'数值后加入自定义单位'"
                       :height="250">
      <template v-slot:demo>
        <shn-statistic v-model="unit.value"
                       :unit="'￥'" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(unit.code.html)}}</code>
        <code class="javascript">{{fCode(unit.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 字体大小DEMO -->
    <shn-el-demo-block :title="'字体大小'"
                       :introduction="'更改整数位、小数位或单位的字体大小'"
                       :height="250">
      <template v-slot:demo>
        <shn-statistic v-model="fontSize.value"
                       :intFontSize="16"
                       :decimalFontSize="24"
                       :unitFontSize="30"
                       :unit="'￥'" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(fontSize.code.html)}}</code>
        <code class="javascript">{{fCode(fontSize.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 保留小数位数及千分位分割DEMO -->
    <shn-el-demo-block :title="'保留小数位数及千分位分割'"
                       :introduction="'保留小数位数，是否开启千分位分割整数位'"
                       :height="250">
      <template v-slot:demo>
        <shn-statistic v-model="decimalNum.value"
                       :decimalNum="1"
                       :groupSeparator="false" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(decimalNum.code.html)}}</code>
        <code class="javascript">{{fCode(decimalNum.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 开启百分比DEMO -->
    <shn-el-demo-block :title="'百分比'"
                       :introduction="'开启百分比，将数值乘以100'"
                       :height="250">
      <template v-slot:demo>
        <shn-statistic v-model="percent.value"
                       :unit="'%'"
                       percent/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(percent.code.html)}}</code>
        <code class="javascript">{{fCode(percent.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>
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
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

