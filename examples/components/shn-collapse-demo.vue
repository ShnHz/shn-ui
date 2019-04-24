<template>
  <div class="content-box">
    <h2 class="demo-title">Collapse 折叠动画盒子</h2>
    <p class="demo-introduction">通过折叠盒子收缩内容区域</p>
    <div class="demo-waring">
      <p>该组件待优化，被收缩内容带有<code>padding</code>或<code>margin</code>会导致动画卡顿</p>
    </div>
    <shn-el-demo-block :title="'基本用法'">
      <template v-slot:demo>
        <button @click="simple.show = !simple.show">点我</button>
        <shn-collapse>
          <div class="simple" v-show="simple.show">
            <p>被折叠模块</p>
            <p>被折叠模块</p>
            <p>被折叠模块</p>
            <p>被折叠模块</p>
          </div>
        </shn-collapse>
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
        show: true
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.simple {
  // height: 100px;
  // line-height: 100px;
}
</style>

