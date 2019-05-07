<template>
  <div class="content-box">
    <h2 class="demo-title">Anchor 锚点</h2>
    <p class="demo-introduction">用于平滑滚动到页面指定位置。</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="147" :title="'基础用法'" id="anchor-simple">
      <template v-slot:demo>
        <p class="demo-code-en-p">see the right bar.</p>
        <p class="demo-code-cn-p">查看页面右方导航栏</p>
        <shn-anchor position="right">
          <shn-anchor-link href="anchor-simple" title="基础用法"/>
          <shn-anchor-link href="anchor-customize" title="自定义样式"/>
        </shn-anchor>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 自定义样式DEMO -->
    <shn-el-demo-block :height="168" :title="'自定义样式'" id="anchor-customize">
      <template v-slot:demo>
        <shn-anchor customize>
          <shn-anchor-link href="api" title="API">
            <shn-button icon="icon-rotate-right" type="primary">API</shn-button>
          </shn-anchor-link>
        </shn-anchor>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(customize.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">Anchor API</h3>
      <shn-table-simple :data="anchorApi" :type="'demo'"/>
      <h3 class="demo-table-title">Link API</h3>
      <shn-table-simple :data="linkApi" :type="'demo'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shn-anchor-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-anchor position="right">
            <shn-anchor-link href="upload-img-simple" title="基础用法"/>
            <shn-anchor-link href="upload-img-cropper" title="裁剪图片"/>
          </shn-anchor>
          `
        }
      },
      customize: {
        code: {
          html: `
          <shn-anchor customize>
            <shn-anchor-link href="api" title="API">
              <shn-button icon="icon-rotate-right" type="primary">API</shn-button>
            </shn-anchor-link>
          </shn-anchor>
          `
        }
      },
      anchorApi: [
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素,默认为窗口',
          dataTypes: 'String',
          optional: '',
          default: 'window'
        },
        {
          parameter: 'anchorClass',
          description: '自定义Class',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'customize',
          description: '开启自定义',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'position',
          description: '导航栏位置',
          dataTypes: 'String',
          optional: 'left / right',
          default: 'right'
        }
      ],
      linkApi: [
        {
          parameter: 'href',
          description: '锚点链接,为dom元素id',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'title',
          description: '导航文字内容',
          dataTypes: 'String',
          optional: '',
          default: 'Title'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

