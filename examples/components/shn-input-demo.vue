<template>
  <div class="content-box">
    <h2 class="demo-title">Input 输入框</h2>
    <p class="demo-introduction">通过鼠标或键盘输入字符</p>
    <div class="demo-waring">
      <p>Input 为受控组件，它总会显示 Vue 绑定值。</p>
    </div>

    <shn-anchor>
      <shn-anchor-link href="input-simple" title="基础用法"/>
      <shn-anchor-link href="input-pattern" title="模式"/>
      <shn-anchor-link href="input-disabled" title="禁用"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="312" :title="'基础用法'" id="input-simple">
      <template v-slot:demo>
        <shn-input v-model="simple.input"/>
        <span style="margin-left:20px">{{simple.input}}</span>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 输入框模式DEMO -->
    <shn-el-demo-block :height="375" :title="'输入框模式'" id="input-pattern">
      <template v-slot:demo>
        <div style="padding:0 0 15px">
          <div style="display:inline-block;width:100px;font-size:14px">line模式</div>
          <shn-input :pattern="'line'" v-model="pattern.line_input"/>
          <span style="margin-left:20px">{{pattern.line_input}}</span>
        </div>
        <div style="padding:0 0 15px">
          <div style="display:inline-block;width:100px;font-size:14px">frame模式</div>
          <shn-input :pattern="'frame'" v-model="pattern.frame_input"/>
          <span style="margin-left:20px">{{pattern.frame_input}}</span>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(pattern.code.html)}}</code>
        <code class="javascript">{{fCode(pattern.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 禁用状态DEMO -->
    <shn-el-demo-block :height="375" :title="'禁用状态'" id="input-disabled">
      <template v-slot:demo>
        <div style="padding:0 0 15px">
          <div style="display:inline-block;width:100px;font-size:14px">line模式</div>
          <shn-input :pattern="'line'" disabled v-model="disabled.line_input"/>
          <span style="margin-left:20px">{{disabled.line_input}}</span>
        </div>
        <div style="padding:0 0 15px">
          <div style="display:inline-block;width:100px;font-size:14px">frame模式</div>
          <shn-input :pattern="'frame'" disabled v-model="disabled.frame_input"/>
          <span style="margin-left:20px">{{disabled.frame_input}}</span>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code.html)}}</code>
        <code class="javascript">{{fCode(disabled.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

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
  name: 'shn-input-demo',
  data() {
    return {
      //基础用法DEMO
      simple: {
        code: {
          html: `
          <template>
            <shn-input v-model="input"/>
            <span style="margin-left:20px">{{input}}</span>
          </template>
          `,
          javascript: `
          export default {
            data() {
              return {
                input:''
              }
            }
          }
          `
        },
        input: ''
      },
      pattern: {
        code: {
          html: `
          <template>
            <shn-input v-model="line_input" :pattern="'line'"/>
            <span style="margin-left:20px">{{line_input}}</span>
            <shn-input v-model="frame_input" :pattern="'frame'" />
            <span style="margin-left:20px">{{frame_input}}</span>
          </template>
          `,
          javascript: `
          export default {
            data() {
              return {
                line_input:'',
                frame_input:''
              }
            }
          }
          `
        },
        line_input: '',
        frame_input: ''
      },
      disabled: {
        code: {
          html: `
          <template>
            <shn-input v-model="line_input" :pattern="'line'" disabled/>
            <span style="margin-left:20px">{{line_input}}</span>
            <shn-input v-model="frame_input" :pattern="'frame'" disabled/>
            <span style="margin-left:20px">{{frame_input}}</span>
          </template>
          `,
          javascript: `
          export default {
            data() {
              return {
                line_input:'',
                frame_input:''
              }
            }
          }
          `
        },
        line_input: '',
        frame_input: ''
      },
      api: [
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'pattern',
          description: '输入框样式',
          dataTypes: 'String',
          optional: 'line / frame',
          default: 'line'
        },
        {
          parameter: 'type',
          description: '输入框类型',
          dataTypes: 'String',
          optional: 'text 及其他原生input类型',
          default: 'text'
        },
        {
          parameter: 'placeholder',
          description: '输入框占位文本',
          dataTypes: 'String',
          optional: '',
          default: '请输入内容'
        },
        {
          parameter: 'height',
          description: '输入框高度',
          dataTypes: 'Number',
          optional: '',
          default: '40'
        },
        {
          parameter: 'disabled',
          description: '禁用',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'animation',
          description: 'line模式下的动画',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'mode',
          description: '布局方式',
          dataTypes: 'String',
          optional: 'horizontal / vertical',
          default: 'horizontal'
        },
        {
          parameter: 'margin',
          description: '边距',
          dataTypes: 'String',
          optional: '',
          default: '0'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

