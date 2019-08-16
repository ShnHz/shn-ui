<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">vueCookies 操作Cookies</h2>
    <p
      class="demo-introduction"
    >在vue中如果想要操作cookie，可以使用vue-cookies插件，这是一个简单的Vue.js插件，专门用于在vue中处理浏览器的cookie操作，vue-cookies没有依赖关系，它可以独立存在，对vuejs友好。</p>

    <div class="demo-tip">
      <p>该插件的作者是cmp-cc，附上github地址</p>
      <p>
        <a
          href="https://github.com/cmp-cc/vue-cookies"
          target="_blank"
        >https://github.com/cmp-cc/vue-cookies</a>
        <img
          alt
          class="github-img"
          href="https://github.com/cmp-cc/vue-cookies"
          src="https://img.shields.io/github/stars/cmp-cc/vue-cookies.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>
    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm install vue-cookies --save</p>
      <shn-divider />
      <p>main.js里面使用</p>
      <p>import VueCookies from 'vue-cookies'</p>
      <p>Vue.use(VueCookies)</p>
    </div>

    <!-- 基础用法DEMO -->
    <h3 class="demo-table-title">基础用法</h3>
    <div class="demo-code-block">
      <p>- 设置全局配置，设置cookie过期时间和url</p>
      <p>this.$cookies.config(expireTimes[,path])</p>
      <p style="margin-top:10px">this.$cookies.config('30d')</p>
      <p>this.$cookies.config(new Date(2019,03,13).toUTCString())</p>
      <p>this.$cookies.config(60 * 60 * 24 * 30,'')</p>
      <shn-divider />
      <p>- 设置一个cookie</p>
      <p>this.$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]])</p>
      <p  style="margin-top:10px">this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")</p>
      <shn-divider />
      <p>- 获取一个cookie</p>
      <p>this.$cookies.get(keyName)</p>
      <shn-divider />
      <p>- 删除一个cookie</p>
      <p>this.$cookies.remove(keyName [, path [, domain]])</p>
      <shn-divider />
      <p>- 检查某个cookie是否存在</p>
      <p>this.$cookies.isKey(keyName)</p>
      <shn-divider />
      <p>- 获取所有 cookie name，以数组形式返回</p>
      <p>this.$cookies.keys()</p>
      <shn-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-cookies-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <vue-drag-resize :h="100" :w="100" :x="20" :y="20" v-on:dragging="resize" v-on:resizing="resize">
            <div class="simple-block">
              <div>
                我可以被拖动
                <p>{{ top }} х {{ left }}</p>
                <p>{{ width }} х {{ height }}</p>
              </div>
            </div>
          </vue-drag-resize>
          `,
          javascript: `
          export default {
            data(){
              return{
                width: 100,
                height: 100,
                top: 20,
                left: 20
              }
            },
            methods:{
              resize(newRect) {
                this.simple.width = newRect.width
                this.simple.height = newRect.height
                this.simple.top = newRect.top
                this.simple.left = newRect.left
              }
            }
          }
          `
        },
        width: 100,
        height: 100,
        top: 20,
        left: 20
      },
      axis: {
        code: {
          html: `
          <vue-drag-resize :h="100" :w="100" :x="20" :y="20" axis="x" parentLimitation>
            <div class="simple-block">
              <div>
                <p>左右拖动</p>
                <p>禁止超出</p>
              </div>
            </div>
          </vue-drag-resize>
          `,
          javascript: ``
        }
      },
      api: [
        {
          parameter: 'isActive',
          description: '是否激活状态',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'isDraggable',
          description: '是否允许拖拽',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'isResizable',
          description: '是否允许缩放',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'aspectRatio',
          description: '是否等比例缩放',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'isResizable',
          description: '是否允许缩放',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'w',
          description: '组件宽度',
          dataTypes: 'Number',
          optional: '',
          default: '200'
        },
        {
          parameter: 'h',
          description: '组件高度',
          dataTypes: 'Number',
          optional: '',
          default: '200'
        },
        {
          parameter: 'minw',
          description: '最小宽度',
          dataTypes: 'Number',
          optional: '>0',
          default: '50'
        },
        {
          parameter: 'minh',
          description: '最小高度',
          dataTypes: 'Number',
          optional: '>0',
          default: '50'
        },
        {
          parameter: 'x',
          description: '定位left',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'y',
          description: '定位top',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'z',
          description: '层级',
          dataTypes: 'Number',
          optional: '',
          default: 'auto'
        },
        {
          parameter: 'sticks',
          description: '元素缩放的节点定义',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'preventActiveBehavior',
          description: '单击组件外区域来禁止组件行为',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'parentLimitation',
          description: '是否禁止超出父级元素',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'parentW',
          description:
            '父级宽度，该值限制了元素可以拖动的水平最大宽度，前提是parentLimitation=true',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'parenth',
          description:
            '父级高度,该值限制了元素可以拖动的水平最大高度，前提是parentLimitation=true',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'axis',
          description: '允许拖拽的方向',
          dataTypes: 'String',
          optional: 'x / y / both / none',
          default: 'both'
        },
        {
          parameter: 'dragHandle',
          description: '定义拖拽时的classname',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'dragCancel',
          description: '定义取消拖拽时的classname',
          dataTypes: 'String',
          optional: '',
          default: ''
        }
      ],
      event: [
        {
          parameter: '@clicked',
          description: '组件点击事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@activated',
          description: '点击组件外事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@resizing',
          description: '缩放时事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@resizestop',
          description: '缩放结束事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@dragging',
          description: '拖拽时事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@dragstop',
          description: '拖拽结束事件',
          dataTypes: '',
          optional: '',
          default: ''
        }
      ]
    }
  },
  methods: {
    resize(newRect) {
      this.simple.width = newRect.width
      this.simple.height = newRect.height
      this.simple.top = newRect.top
      this.simple.left = newRect.left
    }
  }
}
</script>
<style lang="scss" scoped>
.simple-block {
  cursor: move;
  width: 100%;
  height: 100%;
  background: rgb(64, 158, 255);
  text-align: center;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 5px;
}
</style>

