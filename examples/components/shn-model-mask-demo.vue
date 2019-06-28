<template>
  <div class="content-box">
    <h2 class="demo-title">ModelMask 模块蒙版</h2>
    <!-- <p class="demo-introduction">通过点击或者拖拽上传图片。</p> -->

    <!-- <div class="demo-tip">
      <p>致谢：该组件裁剪图片功能使用vue-cropper组件完成，感谢作者的支持，附上github地址</p>
      <p>
        <a
          href="https://github.com/xyxiao001/vue-cropper"
          target="_blank"
        >https://github.com/xyxiao001/vue-cropper</a>
      </p>
    </div>-->

    <shn-anchor>
      <shn-anchor-link href="model-mask-simple" title="基础用法"/>
      <shn-anchor-link href="model-mask-open-display" title="常显"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="250" :title="'基础用法'" id="model-mask-simple">
      <template v-slot:demo>
        <shn-model-mask>
          <img alt src="https://shnhz.github.io/shn-ui/img/Koala.jpg" style="width:300px">
        </shn-model-mask>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="250" :title="'常显'" id="model-mask-open-display">
      <template v-slot:demo>
        <shn-model-mask ofenDisplay>
          <img alt src="https://shnhz.github.io/shn-ui/img/Koala.jpg" style="width:300px">
        </shn-model-mask>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(ofenDisplay.code.html)}}</code>
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
  name: 'shn-model-mask-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-model-mask>
            <img alt src="https://shnhz.github.io/shn-ui/img/Koala.jpg" style="width:300px">
          </shn-model-mask>
          `
        }
      },
      ofenDisplay: {
        code: {
          html: `
          <shn-model-mask ofenDisplay>
            <img alt src="https://shnhz.github.io/shn-ui/img/Koala.jpg" style="width:300px">
          </shn-model-mask>
          `
        }
      },
      api: [
        {
          parameter: 'delbtn',
          description: '是否开启删除按钮',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'ofenDisplay',
          description: '是否开启常显示',
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

