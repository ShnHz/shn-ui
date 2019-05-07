<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">按钮用于开始一个即时操作。</p>

    <shn-anchor>
      <shn-anchor-link href="button-simple" title="基础用法"/>
      <shn-anchor-link href="button-disabled" title="禁用"/>
      <shn-anchor-link href="button-circle" title="圆形按钮"/>
      <shn-anchor-link href="button-customize" title="自定义颜色"/>
      <shn-anchor-link href="button-block" title="block按钮"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="315" :title="'基础用法'" id="button-simple">
      <template v-slot:demo>
        <div>
          <shn-button>Default</shn-button>
          <shn-button type="success">Success</shn-button>
          <shn-button type="primary">Primary</shn-button>
          <shn-button type="danger">Danger</shn-button>
          <shn-button type="warning">Warning</shn-button>
          <shn-button icon="icon-search" type="primary">Search</shn-button>
        </div>
        <div>
          <shn-button type="dashed">Dashed</shn-button>
          <shn-button type="dotted">Dotted</shn-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 禁用DEMO -->
    <shn-el-demo-block :height="168" :title="'禁用'" id="button-disabled">
      <template v-slot:demo>
        <shn-button disabled>Default</shn-button>
        <shn-button disabled type="primary">Primary</shn-button>
        <shn-button disabled type="dashed">Dashed</shn-button>
        <shn-button disabled type="danger">Danger</shn-button>
        <shn-button disabled type="warning">Warning</shn-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 圆形按钮DEMO -->
    <shn-el-demo-block :height="168" :title="'圆形按钮'" id="button-circle">
      <template v-slot:demo>
        <shn-button circle icon="icon-user"></shn-button>
        <shn-button circle icon="icon-heart-fill" type="primary"></shn-button>
        <shn-button circle type="dashed"></shn-button>
        <shn-button circle icon="icon-delete-fill" type="danger"></shn-button>
        <shn-button circle icon="icon-plus" type="warning"></shn-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(circle.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 自定义颜色DEMO -->
    <shn-el-demo-block
      :height="105"
      :title="'自定义颜色'"
      id="button-customize"
      introduction="自定义修改颜色，其type必须设置为customize"
    >
      <template v-slot:demo>
        <shn-button color="#2cbfbe" type="customize">customize</shn-button>
        <shn-button circle color="#2cbfbe" icon="icon-heart-fill" type="customize"></shn-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(customize.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- block按钮DEMO -->
    <shn-el-demo-block :height="147" id="button-block" introduction="将使按钮适合其父宽度" title="block按钮">
      <template v-slot:demo>
        <shn-button block>Default</shn-button>
        <shn-button block type="primary">Primary</shn-button>
        <shn-button block type="dashed">Dashed</shn-button>
        <shn-button block color="#2cbfbe" type="customize">customize</shn-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(block.code.html)}}</code>
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
  name: 'shn-backtop-demo',
  data() {
    return {
      a: document.getElementById('router_view_box'),
      simple: {
        code: {
          html: `
          <div>
            <shn-button>Default</shn-button>
            <shn-button type="success">Success</shn-button>
            <shn-button type="primary">Primary</shn-button>
            <shn-button type="danger">Danger</shn-button>
            <shn-button type="warning">Warning</shn-button>
            <shn-button icon="icon-search" type="primary">Search</shn-button>
          </div>
          <div>
            <shn-button type="dashed">Dashed</shn-button>
            <shn-button type="dotted">Dotted</shn-button>
          </div>
          `
        }
      },
      disabled: {
        code: {
          html: `
          <shn-button disabled>Default</shn-button>
          <shn-button type="primary" disabled>Primary</shn-button>
          <shn-button type="dashed" disabled>Dashed</shn-button>
          <shn-button type="danger" disabled>Danger</shn-button>
          <shn-button type="warning" disabled>Warning</shn-button>
          `
        }
      },
      circle: {
        code: {
          html: `
          <shn-button circle icon="icon-user"></shn-button>
          <shn-button circle icon="icon-heart-fill" type="primary"></shn-button>
          <shn-button circle type="dashed"></shn-button>
          <shn-button circle icon="icon-delete-fill" type="danger"></shn-button>
          <shn-button circle icon="icon-plus" type="warning"></shn-button>
          `
        }
      },
      customize: {
        code: {
          html: `
          <shn-button color="#2cbfbe" type="customize">customize</shn-button>
          <shn-button color="#2cbfbe" circle icon="icon-heart-fill" type="customize"></shn-button>
          `
        }
      },
      block: {
        code: {
          html: `
          <shn-button block>Default</shn-button>
          <shn-button type="primary" block>Primary</shn-button>
          <shn-button type="dashed" block>Dashed</shn-button>
          <shn-button color="#2cbfbe" type="customize" block>customize</shn-button>
          `
        }
      },
      api: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional:
            'default / primary / success / dashed / dotted / danger / warning / customize',
          default: 'default'
        },
        {
          parameter: 'animation',
          description: '是否开启点击动画效果',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'true'
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'icon',
          description: '图标类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'color',
          description: '自定义按钮颜色，必须将按钮类型设置为customize',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'block',
          description: '将按钮宽度调整为其父宽度的选项',
          dataTypes: 'Boolean',
          optional: 'true/false',
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

