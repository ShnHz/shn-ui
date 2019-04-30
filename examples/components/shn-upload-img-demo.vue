<template>
  <div class="content-box">
    <h2 class="demo-title">UploadImg 上传图片</h2>
    <p class="demo-introduction">通过点击或者拖拽上传图片。</p>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="250" :title="'基础用法'">
      <template v-slot:demo>
        <shn-upload-img addText="上传图片" v-model="simple.list"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
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
        list: ['/img/Koala.jpg']
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
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

