<template>
  <div class="content-box">
    <h2 class="demo-title">WidgetModal 可拖动模态框</h2>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="252" :title="'基础用法'" id="widget-modal-simple">
      <template v-slot:demo>
        <p class="demo-code-en-p">see the bottom left modal.</p>
        <p class="demo-code-cn-p">查看页面右下方模态框</p>
        <shn-widget-modal :visible.sync="simple.show" title="我可以被拖动及缩放">
          <p>这是内容</p>
          <p>这是内容</p>
          <p>这是内容</p>
          <p>这是内容</p>
          <p>这是内容</p>
          <p>这是内容</p>
          <p>这是内容</p>
        </shn-widget-modal>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
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
  name: 'shn-widget-modal-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-widget-modal :visible.sync="simple.show" title="我可以被拖动及缩放">
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
            <p>这是内容</p>
          </shn-widget-modal>
          `
        },
        show: true
      },
      api: [
        {
          parameter: 'visible',
          description: '是否显示 Modal，支持 .sync 修饰符	',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'title',
          description: '设置Modal标题',
          dataTypes: 'String',
          optional: '',
          default: 'Title'
        },
        {
          parameter: 'width',
          description: '组件宽度',
          dataTypes: 'Number',
          optional: '',
          default: '450'
        },
        {
          parameter: 'height',
          description: '组件宽度',
          dataTypes: 'Number',
          optional: '',
          default: '200'
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
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

