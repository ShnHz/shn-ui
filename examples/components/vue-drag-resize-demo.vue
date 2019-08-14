<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">vueDragResize 拖拽/缩放</h2>
    <p class="demo-introduction">vue-drag-resize是一个支持拖拽与缩放的vue插件，支持vue 1.x与2.x，使用方便，上手便利。</p>

    <div class="demo-tip">
      <p>该插件的作者是kirillmurashov，附上github地址</p>
      <p>
        <a
          href="https://github.com/kirillmurashov/vue-drag-resize"
          target="_blank"
        >https://github.com/kirillmurashov/vue-drag-resize</a>
        <img
          alt
          class="github-img"
          href="https://github.com/kirillmurashov/vue-drag-resize"
          src="https://img.shields.io/github/stars/kirillmurashov/vue-drag-resize.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>

    <shn-anchor>
      <shn-anchor-link href="vue-draag-resize-simple" title="基础用法" />
      <shn-anchor-link href="vue-draag-resize-axis" title="拖动方向" />
      <shn-anchor-link href="api" title="API" />
      <shn-anchor-link href="event" title="事件" />
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="648" :title="'基础用法'" id="vue-draag-resize-simple">
      <template v-slot:demo>
        <div style="height:200px">
          <vue-drag-resize
            :h="100"
            :w="100"
            :x="20"
            :y="20"
            v-on:dragging="resize"
            v-on:resizing="resize"
          >
            <div class="simple-block">
              <div>
                我可以被拖动
                <p>{{ simple.top }} х {{ simple.left }}</p>
                <p>{{ simple.width }} х {{ simple.height }}</p>
              </div>
            </div>
          </vue-drag-resize>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 拖拽方向DEMO -->
    <shn-el-demo-block :height="210" :title="'拖拽方向'" id="vue-draag-resize-axis">
      <template v-slot:demo>
        <div style="height:200px">
          <vue-drag-resize :h="100" :w="100" :x="20" :y="20" axis="x">
            <div class="simple-block">
              <div>左右拖动</div>
            </div>
          </vue-drag-resize>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(axis.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <shn-table-simple :data="api" :type="'demo'" />
    </div>

    <!-- 事件 -->
    <div id="event">
      <h3 class="demo-table-title">事件</h3>
      <P class="demo-table-introduction">事件说明如下：</P>
      <shn-table-simple :data="event" :type="'demo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-drag-resize-demo',
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
          <vue-drag-resize :h="100" :w="100" :x="20" :y="20" axis="x">
            <div class="simple-block">
              <div>
                我可以被左右拖动
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
          default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`
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
          description: '是否超出父级元素',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'parentW',
          description: '父级宽度',
          dataTypes: 'Number',
          optional:
            '该值限制了元素可以拖动的水平最大宽度，前提是parentLimitation=true',
          default: '0'
        },
        {
          parameter: 'parenth',
          description: '父级高度',
          dataTypes: 'Number',
          optional:
            '该值限制了元素可以拖动的水平最大高度，前提是parentLimitation=true',
          default: '0'
        },
        {
          parameter: 'axis',
          description: '允许拖拽的方向',
          dataTypes: 'String',
          optional: '取值可以为x、 y、 both、none',
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

