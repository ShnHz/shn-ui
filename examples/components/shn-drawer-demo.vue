<template>
  <div class="content-box">
    <h2 class="demo-title">Drawer 抽屉</h2>
    <p class="demo-introduction">屏幕边缘滑出的浮层面板。</p>

    <shn-anchor>
      <shn-anchor-link href="drawer-simple" title="基础用法"/>
      <shn-anchor-link href="drawer-loading" title="区域加载"/>
      <shn-anchor-link href="drawer-placement" title="自定义位置"/>
      <shn-anchor-link href="drawer-s" title="二级抽屉"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="312" :introduction="'基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭'" :title="'基础用法'" id="drawer-simple">
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

    <!-- 加载DEMO -->
    <shn-el-demo-block :height="627" :introduction="'在容器中加载数据时显示'" :title="'区域加载'" id="drawer-loading">
      <template v-slot:demo>
        <shn-button @click="loadingOpen" type="primary">Open</shn-button>
        <shn-drawer
          :loading="loading.loading"
          :visible.sync="loading.show"
          @close="loading.loading = true"
          title="Basic Drawer"
        >
          <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
        </shn-drawer>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(loading.code.html)}}</code>
        <code class="javascript">{{fCode(loading.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 自定义位置DEMO -->
    <shn-el-demo-block
      :height="460"
      :introduction="'自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭'"
      :title="'自定义位置'"
      id="drawer-placement"
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
    <shn-el-demo-block :height="396" :introduction="'在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。'" :title="'二层抽屉'" id="drawer-s">
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
    <div class="demo-waring">
      <p>暂时只支持二层抽屉，嵌套三层及以上会导致页面卡顿且抽屉宽度出现bug。</p>
    </div>

    <!-- API -->
    <div id="api">
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
      //加载DEMO
      loading: {
        code: {
          html: `
          <shn-button @click="loadingOpen" type="primary">Open</shn-button>
          <shn-drawer
            :loading="loading"
            :visible.sync="show"
            @close="loading = true"
            title="Basic Drawer"
          >
            <div :key="index" style="font-size: 14px;" v-for="(item,index) in 5">Some contents...</div>
          </shn-drawer>
          `,
          javascript: `
          export default {
            data() {
              return {
                show:false,
                loading:true
              }
            },
            methods:{
              loadingOpen() {
                let _this = this
                this.show = true
                setTimeout(() => {
                  _this.loading = false
                }, 3000)
              }
            }
          }
          `
        },
        show: false,
        loading: true
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
          <shn-button @click="oneShow = true" type="primary">Open</shn-button>
          <shn-drawer :visible.sync="oneShow" title="one Drawer">
            <shn-button @click="twoShow = true" type="primary">Open</shn-button>
            <shn-drawer :visible.sync="twoShow" title="two Drawer">
              <div style="width:400px"></div>
            </shn-drawer>
          </shn-drawer>
          `,
          javascript: `
          export default {
            data() {
              return {
                oneShow:false,
                twoShow:false
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
  methods: {
    loadingOpen() {
      let _this = this
      this.loading.show = true
      setTimeout(() => {
        _this.loading.loading = false
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

