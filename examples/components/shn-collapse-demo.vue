<template>
  <div class="content-box">
    <h2 class="demo-title">Collapse 折叠动画盒子</h2>
    <p class="demo-introduction">通过折叠盒子收缩内容区域</p>
    <div class="demo-waring">
      <p>
        该组件待优化，被收缩内容带有
        <code>margin</code>会导致动画卡顿
      </p>
    </div>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="417" :title="'基础用法'">
      <template v-slot:demo>
        <shn-button @click="simple.show = !simple.show" type="primary">点我！</shn-button>
        <shn-collapse>
          <div class="simple" v-show="simple.show">
            <p>被折叠模块</p>
            <p>被折叠模块</p>
            <p>被折叠模块</p>
            <p>被折叠模块</p>
          </div>
        </shn-collapse>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>
  </div>
</template>

<script>
export default {
  name: 'shn-collapse-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-button @click="show = !show" type="primary">点我！</shn-button>
          <shn-collapse>
            <div v-show="show">
              <p>被折叠模块</p>
              <p>被折叠模块</p>
              <p>被折叠模块</p>
              <p>被折叠模块</p>
            </div>
          </shn-collapse>
          `,
          javascript: `
          export default {
            data() {
              return {
                show:true
              }
            }
          }
          `
        },
        show: true
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.simple {
  margin: 10px;
}
</style>

