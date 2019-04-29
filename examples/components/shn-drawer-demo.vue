<template>
  <div class="content-box">
    <h2 class="demo-title">Drawer 抽屉</h2>
    <p class="demo-introduction">屏幕边缘滑出的浮层面板。</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="312" :introduction="'基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭'" :title="'基础用法'">
      <template v-slot:demo>
        <shn-button @click="simple.show = true" type="primary">Open</shn-button>
        <shn-drawer :visible.sync="simple.show" title="Basic Drawer">
          <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
        </shn-drawer>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 自定义位置DEMO -->
    <shn-el-demo-block
      :height="460"
      :introduction="'自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭'"
      :title="'自定义位置'"
    >
      <template v-slot:demo>
        <shn-button @click="placement.rightShow = true" type="primary">RightOpen</shn-button>
        <shn-button @click="placement.leftShow = true" type="primary">leftOpen</shn-button>

        <shn-drawer :visible.sync="placement.rightShow" title="Right Drawer">
          <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
        </shn-drawer>

        <shn-drawer :visible.sync="placement.leftShow" placement="left" title="Left Drawer">
          <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
        </shn-drawer>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(placement.code.html)}}</code>
        <code class="javascript">{{fCode(placement.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 二级抽屉DEMO -->
    <shn-el-demo-block :height="460" :introduction="'在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。'" :title="'二层抽屉'">
      <template v-slot:demo>
        <shn-button @click="levelDrawer.oneShow = true" type="primary">Open</shn-button>

        <shn-drawer :visible.sync="levelDrawer.oneShow" title="one Drawer">
          <shn-button @click="levelDrawer.twoShow = true" type="primary">Open</shn-button>
          <shn-drawer :visible.sync="levelDrawer.twoShow" title="two Drawer">
            <div style="width:400px"></div>
          </shn-drawer>
        </shn-drawer>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(levelDrawer.code.html)}}</code>
        <code class="javascript">{{fCode(levelDrawer.code.javascript)}}</code>
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
  name: 'shn-drawer-demo',
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `
          <shn-button @click="show = true" type="primary">Open</shn-button>
          <shn-drawer :show.sync="show" title="Basic Drawer">
            <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
          </shn-drawer>
          `,
          javascript: `
          export default {
            data() {
              return {
                show:false
              }
            }
          }
          `
        },
        show: false
      },
      //自定义位置DEMO
      placement: {
        code: {
          html: `
          <shn-button @click="rightShow = true" type="primary">RightOpen</shn-button>
          <shn-button @click="leftShow = true" type="primary">leftOpen</shn-button>

          <shn-drawer :visible.sync="rightShow" title="Right Drawer">
            <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
          </shn-drawer>

          <shn-drawer :visible.sync="leftShow" title="Left Drawer" placement="left">
            <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
          </shn-drawer>
          `,
          javascript: `
          export default {
            data() {
              return {
                leftShow: false,
                rightShow: false
              }
            }
          }
          `
        },
        leftShow: false,
        rightShow: false
      },
      //多级抽屉DEMO
      levelDrawer: {
        code: {
          html: `
          <shn-button @click="show = true" type="primary">Open</shn-button>
          <shn-drawer :show.sync="show" title="Basic Drawer">
            <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
          </shn-drawer>
          `,
          javascript: `
          export default {
            data() {
              return {
                show:false
              }
            }
          }
          `
        },
        oneShow: false,
        twoShow: false
      },
      api: [
        {
          parameter: 'visible',
          description: '是否显示 Drawer,支持 .sync 修饰符',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false'
        },
        {
          parameter: 'title',
          description: '标题',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'placement',
          description: '抽屉的方向',
          dataTypes: 'String',
          optional: 'left / right',
          default: 'right'
        },
        {
          parameter: 'mask',
          description: '是否显示遮罩层',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'maskClosable',
          description: '点击蒙层是否允许关闭',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: '@close',
          description: 'Drawer 关闭时的回调',
          dataTypes: 'Function',
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

