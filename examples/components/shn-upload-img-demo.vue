<template>
  <div class="content-box">
    <h2 class="demo-title">UploadImg 上传图片</h2>
    <p class="demo-introduction">通过点击或者拖拽上传图片。</p>

    <div class="demo-tip">
      <p>致谢：该组件裁剪图片功能使用vue-cropper组件完成，感谢作者的支持，附上github地址</p>
      <p>
        <a
          href="https://github.com/xyxiao001/vue-cropper"
          target="_blank"
        >https://github.com/xyxiao001/vue-cropper</a>
        <img
          alt
          class="github-img"
          href="https://github.com/xyxiao001/vue-cropper"
          src="https://img.shields.io/github/stars/xyxiao001/vue-cropper.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>

    <shn-anchor>
      <shn-anchor-link href="upload-img-simple" title="基础用法" />
      <shn-anchor-link href="upload-img-cropper" title="裁剪图片" />
      <shn-anchor-link href="api" title="API" />
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="250" :title="'基础用法'" id="upload-img-simple">
      <template v-slot:demo>
        <shn-upload-img addText="上传图片" v-model="simple.list" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 裁剪图片DEMO -->
    <shn-el-demo-block :height="250" :title="'裁剪图片'" id="upload-img-cropper">
      <template v-slot:demo>
        <shn-upload-img :cropper="true" addText="裁剪图片/上传" cropType="blob" v-model="cropper.list" />
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(cropper.code.html)}}</code>
        <code class="javascript">{{fCode(cropper.code.javascript)}}</code>
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
  name: 'shn-upload-img-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <shn-upload-img addText="上传图片" v-model="list"/>
          `,
          javascript: `
          export default {
            data(){
              return{
                list:[]
              }
            }
          }
          `
        },
        list: ['https://shnhz.github.io/shn-ui/img/Koala.jpg']
      },
      cropper: {
        code: {
          html: `
          <shn-upload-img :cropper="true" addText="裁剪图片/上传" v-model="list"/>
          `,
          javascript: `
          export default {
            data(){
              return{
                list:[]
              }
            }
          }
          `
        },
        list: ['https://shnhz.github.io/shn-ui/img/Koala.jpg']
      },
      api: [
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'addText',
          description: '上传图片框文本',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'width',
          description: '图片限制宽度',
          dataTypes: 'Number',
          optional: '',
          default: '104'
        },
        {
          parameter: 'height',
          description: '图片限制高度',
          dataTypes: 'Number',
          optional: '',
          default: '104'
        },
        {
          parameter: 'view',
          description: '是否开启图片预览',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'cropper',
          description: '是否开启图片裁剪',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'outputSize',
          description: '裁剪生成图片的质量',
          dataTypes: 'Number',
          optional: '0.1 - 1',
          default: '1'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

