<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">vueCropper 图片裁剪</h2>
    <p class="demo-introduction">vue-cropper是一个优雅的图片裁剪插件。</p>

    <div class="demo-tip">
      <p>该插件的作者是xyxiao001，附上github地址</p>
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

    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm install vue-cropper</p>
      <p>yarn add vue-cropper</p>
      <shn-divider />
      <p>main.js里面使用</p>
      <p>import VueCropper from 'vue-cropper'</p>
      <p>Vue.use(VueCropper)</p>
      <shn-divider />
      <p>组件内使用</p>
      <p>import { VueCropper } from 'vue-cropper'</p>
      <p>components: {</p>
      <p style="padding-left:10px">VueCropper</p>
      <p>}</p>
    </div>

    <shn-anchor>
      <shn-anchor-link href="vue-draag-resize-simple" title="基础用法" />
      <shn-anchor-link href="vue-draag-resize-fix" title="截图框固定比例" />
      <shn-anchor-link href="api" title="API" />
      <shn-anchor-link href="event" title="事件" />
      <shn-anchor-link href="methods" title="内置方法" />
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block
      :height="354"
      :title="'基础用法'"
      id="vue-draag-resize-simple"
      introduction="需要使用外层容器包裹并设置宽高。"
    >
      <template v-slot:demo>
        <div style="width:100%;height:500px">
          <vue-cropper
            autoCrop
            centerBox
            img="https://shnhz.github.io/shn-ui/img/Koala.jpg"
            ref="cropper"
          />
        </div>
        <shn-button
          @click="getCropBlob()"
          block
          ref="cropper"
          style="margin:10px 0"
          type="primary"
        >获取截图后的图片</shn-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>
    
    <!-- 截图框固定比例DEMO -->
    <shn-el-demo-block :height="126" :title="'截图框固定比例'" id="vue-draag-resize-fix">
      <template v-slot:demo>
        <div style="width:100%;height:500px">
          <vue-cropper
            :fixedNumber="[2,1]"
            autoCrop
            centerBox
            fixed
            img="https://shnhz.github.io/shn-ui/img/Koala.jpg"
            ref="cropper"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(fix.code.html)}}</code>
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

    <!-- 内置方法 -->
    <div id="methods">
      <h3 class="demo-table-title">内置方法</h3>
      <P class="demo-table-introduction">内置方法说明如下：</P>
      <shn-table-simple :data="methods" :type="'demo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-cropper-demo',
  data() {
    return {
      simple: {
        code: {
          html: `
          <div style="width:100%;height:500px">
            <vue-cropper autoCrop img="https://shnhz.github.io/shn-ui/img/Koala.jpg" ref="cropper" centerBox/>
          </div>
          <shn-button @click="getCropData()" block ref="cropper" style="margin:10px 0" type="primary">获取截图后的图片</shn-button>
          `,
          javascript: `
          export default {
            methods:{
              getCropData() {
                this.$refs.cropper.getCropData(data => {
                  console.log(data)
                })
              }
            }
          }
          `
        }
      },
      fix: {
        code: {
          html: `
              <div style="width:100%;height:500px">
                <vue-cropper autoCrop img="https://shnhz.github.io/shn-ui/img/Koala.jpg" ref="cropper" centerBox fixed :fixedNumber="[2,1]"/>
              </div>
          `
        }
      },
      api: [
        {
          parameter: 'img',
          description: '裁剪图片的地址',
          dataTypes: 'String',
          optional: 'url 地址 / base64 / blob',
          default: ''
        },
        {
          parameter: 'outputSize',
          description: '裁剪生成图片的质量',
          dataTypes: 'Number',
          optional: '0.1 - 1',
          default: '1'
        },
        {
          parameter: 'outputType',
          description: '裁剪生成图片的格式',
          dataTypes: 'String',
          optional: 'jpeg / png / webp',
          default: 'jpeg'
        },
        {
          parameter: 'info',
          description: '裁剪框的大小信息',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'canScale',
          description: '图片是否允许滚轮缩放',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'autoCrop',
          description: '是否默认生成截图框',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'autoCropWidth',
          description: '默认生成截图框宽度',
          dataTypes: 'String',
          optional: '',
          default: '80%'
        },
        {
          parameter: 'autoCropHeight',
          description: '默认生成截图框高度',
          dataTypes: 'String',
          optional: '',
          default: '80%'
        },
        {
          parameter: 'fixed',
          description: '是否开启截图框宽高固定比例',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'fixedNumber',
          description: '截图框的宽高比例',
          dataTypes: 'Array',
          optional: '[宽度, 高度]',
          default: '[1, 1]'
        },
        {
          parameter: 'full',
          description: '是否输出原图比例的截图',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'fixedBox',
          description: '固定截图框大小 不允许改变',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'canMove',
          description: '上传图片是否可以移动',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'canMoveBox',
          description: '截图框能否拖动',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'original',
          description: '上传图片按照原始比例渲染',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'centerBox',
          description: '截图框是否被限制在图片里面',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'high',
          description: '是否按照设备的dpr 输出等比例图片',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'infoTrue',
          description: 'true 为展示真实输出图片宽高 false 展示看到的截图框宽高',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'maxImgSize',
          description: '限制图片最大宽度和高度',
          dataTypes: 'Number',
          optional: '',
          default: '2000'
        },
        {
          parameter: 'enlarge',
          description: '图片根据截图框输出比例倍数',
          dataTypes: 'String',
          optional: '',
          default: '1'
        },
        {
          parameter: 'mode',
          description: '图片默认渲染方式',
          dataTypes: 'String',
          optional: 'contain / cover / 100px / 100% / auto',
          default: 'contain'
        }
      ],
      event: [
        {
          parameter: '@imgMoving',
          description: '图片移动事件',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: '@cropMoving',
          description: '截图框移动事件',
          dataTypes: '',
          optional: '',
          default: ''
        }
      ],
      methods: [
        {
          parameter: 'startCrop',
          description: '开始截图',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'stopCrop',
          description: '停止截图',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'clearCrop',
          description: '清除截图',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'changeScale',
          description: '修改图片大小 正数为变大 负数变小',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'getImgAxis',
          description: '获取图片基于容器的坐标点',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'getCropAxis',
          description: '获取截图框基于容器的坐标点',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'goAutoCrop',
          description: '自动生成截图框函数',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'rotateRight',
          description: '向右边旋转90度',
          dataTypes: '',
          optional: '',
          default: ''
        },
        {
          parameter: 'rotateLeft',
          description: '向左边旋转90度',
          dataTypes: '',
          optional: '',
          default: ''
        }
      ]
    }
  },
  methods: {
    getCropData() {
      this.$refs.cropper.getCropData(data => {
        window.alert(data)
      })
    },
    getCropBlob() {
      this.$refs.cropper.getCropBlob(data => {
        console.log(data)
      })
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

