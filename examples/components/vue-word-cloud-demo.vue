<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">VueWordCloud 云词</h2>

    <div class="demo-tip">
      <p>该插件的作者是SeregPie，附上github地址</p>
      <p>
        <a
          href="https://github.com/SeregPie/VueWordCloud"
          target="_blank"
        >https://github.com/SeregPie/VueWordCloud</a>
        <img
          alt
          class="github-img"
          href="https://github.com/SeregPie/VueWordCloud"
          src="https://img.shields.io/github/stars/SeregPie/VueWordCloud.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>

    <div class="demo-tip">
      <p>官方demo</p>
      <p>
        <a
          href="https://seregpie.github.io/VueWordCloud/"
          target="_blank"
        >https://seregpie.github.io/VueWordCloud/</a>
      </p>
    </div>

    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm install vuewordcloud</p>
      <shn-divider />
      <p>main.js里面使用</p>
      <p>import VueWordCloud from 'vuewordcloud'</p>
      <p>Vue.component(VueWordCloud.name, VueWordCloud)</p>
      <shn-divider />
      <p>组件内使用</p>
      <p>import VueWordCloud from 'vuewordcloud'</p>
      <p>components: {</p>
      <p style="padding-left:10px">[VueWordCloud.name]: VueWordCloud</p>
      <p>}</p>
    </div>

    <shn-anchor>
      <shn-anchor-link href="vue-word-clound-simple" title="基础用法" />
      <shn-anchor-link href="vue-word-clound-other" title="其他用法" />
      <shn-anchor-link href="api" title="API" />
      <shn-anchor-link href="event" title="事件" />
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block
      :height="168"
      :title="'基础用法'"
      id="vue-word-clound-simple"
      introduction="需要使用外层容器包裹并设置宽高。"
    >
      <template v-slot:demo>
        <div style="width:100%;height:500px">
          <vue-word-cloud
            :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
            :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
            font-family="Roboto"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <!-- <code class="javascript">{{fCode(simple.code.javascript)}}</code> -->
      </template>
    </shn-el-demo-block>
    <!-- 其他用法 -->
    <shn-el-demo-block
      :arrow-animation="false"
      :height="816"
      :title="'其他用法'"
      id="vue-word-clound-other"
    >
      <template v-slot:demo>
        <div style="width:100%;height:500px">
          <vue-word-cloud
            :color="([, weight]) => other.colors[Math.ceil(Math.random() * 5 - 1)]"
            :font-size-ratio="5"
            :words="other.code.words"
            enter-animation="bounceIn"
            font-family="SimSun"
            font-weight="800"
            leave-animation="bounceOut"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(other.code.html)}}</code>
        <code class="javascript">{{fCode(other.code.javascript)}}</code>
      </template>
    </shn-el-demo-block>
    <shn-el-demo-block
      :arrow-animation="false"
      :height="942"
      :title="''"
      id="vue-word-clound-other"
    >
      <template v-slot:demo>
        <div style="width:100%;height:500px">
          <vue-word-cloud
            :color="([, weight]) => other.colors[Math.ceil(Math.random() * 5 - 1)]"
            :font-size-ratio="5"
            :words="other.code_2.words"
            enter-animation="bounceIn"
            font-family="SimSun"
            font-weight="800"
            leave-animation="bounceOut"
            rotation-unit="deg"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(other.code_2.html)}}</code>
        <code class="javascript">{{fCode(other.code_2.javascript)}}</code>
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
import VueWordCloud from 'vuewordcloud'

export default {
  name: 'vue-word-cloud-demo',
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  data() {
    return {
      words: [
        '游戏',
        '应用',
        '贴吧',
        '腾讯',
        '阿里巴巴',
        '百度',
        '美团',
        '网易',
        'shn-ui',
        'QQ',
        '微信',
        '英雄联盟',
        '支付宝',
        '绝地求生',
        '知乎',
        '微博',
        '淘宝',
        '头条',
        '京东',
        '抖音',
        '爱奇艺',
        '哔哩哔哩',
        '优酷',
        '携程',
        '去哪儿',
        '飞常准',
        '地图',
        '饿了么',
        '豆瓣',
        '口碑',
        '网易云音乐'
      ],
      simple: {
        code: {
          html: `
          <vue-word-cloud
            :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
            :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
            font-family="Roboto"
          />
          `
        }
      },
      other: {
        colors: ['#ffd077', '#3bc4c7', '#3a9eea', '#ff4e69', '#461e47'],
        code: {
          html: `
              <div style="width:100%;height:500px">
                <vue-word-cloud
                  :color="([, weight]) => other.colors[Math.ceil(Math.random() * 5 - 1)]"
                  :font-size-ratio="5"
                  :words="other.words"
                  enter-animation="bounceIn"
                  font-family="SimSun"
                  font-weight="800"
                  leave-animation="bounceOut"
                />
              </div>
          `,
          javascript: `
            export default {
              data() {
                return {
                  word:[
                    '游戏',
                    '应用',
                    ...
                  ],
                  words:[]
                }
              },
              mounted(){
                this.words = this.getWord()
              },
              methods: {
                getWord() {
                  for (let i = 0; i < this.word.length; i++) {
                    this.word[i] = [this.word[i], Math.ceil(Math.random() * 30)]
                  }

                  return this.word
                }
              }
            }
          `,
          words: []
        },
        code_2: {
          html: `
              <div style="width:100%;height:500px">
                <vue-word-cloud
                    :color="([, weight]) => other.colors[Math.ceil(Math.random() * 5 - 1)]"
                    :font-size-ratio="5"
                    :words="other.words"
                    enter-animation="bounceIn"
                    font-family="SimSun"
                    font-weight="800"
                    leave-animation="bounceOut"
                    rotation-unit="deg"
                />
              </div>
          `,
          javascript: `
            export default {
              data() {
                return {
                  word:[
                    '游戏',
                    '应用',
                    ...
                  ],
                  words:[]
                }
              },
              mounted(){
                this.words = this.getWord()
              },
              methods: {
                getWord() {
                  let word = JSON.parse(JSON.stringify(this.words))
                  for (let i = 0; i < word.length; i++) {
                    word[i] = {
                      text: word[i],
                      weight: Math.ceil(Math.random() * 30),
                      rotation: Math.ceil(Math.random() * 12) * 30
                    }
                  }

                  return word
                }
              }
            }
          `,
          words: []
        }
      },
      api: [
        {
          parameter: 'animation-duration',
          description: '动画持续时间',
          dataTypes: 'Number',
          optional: '',
          default: '1000'
        },
        {
          parameter: 'animation-easing',
          description: '动画模式',
          dataTypes: 'String',
          optional:
            'ease / linear / ease-in / ease-out / ease-in-out / cubic-bezier(.1,.7,1,.1)',
          default: 'ease'
        },
        {
          parameter: 'animation-overlap',
          description: '同时动画的单词数量',
          dataTypes: 'Number',
          optional: '[ 1 - 5 ]',
          default: '1'
        },
        {
          parameter: 'color',
          description: '默认颜色',
          dataTypes: 'String / Function',
          optional: '',
          default: 'Black'
        },
        {
          parameter: 'create-canvas',
          description: 'Creates a new Canvas instance.',
          dataTypes: 'Function',
          optional: '',
          default: ''
        },
        {
          parameter: 'create-worker',
          description: 'Creates a new Worker instance.',
          dataTypes: 'Function',
          optional: '',
          default: ''
        },
        {
          parameter: 'enter-animation',
          description: 'The enter animation.',
          dataTypes: 'Object / String',
          optional: '',
          default: ''
        },
        {
          parameter: 'font-family',
          description: '默认字体',
          dataTypes: 'String / Function',
          optional: '',
          default: 'serif'
        },
        {
          parameter: 'font-size-ratio',
          description:
            '单词之间的字体大小比例。例如，如果值为5，则最大的单词将比最小的单词大5倍。该值5与值具有相同的作用1/5。',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'font-style',
          description: '默认字体样式',
          dataTypes: 'String / Function',
          optional: '',
          default: 'normal'
        },
        {
          parameter: 'font-variant',
          description: '默认字体变体',
          dataTypes: 'String / Function',
          optional: '',
          default: 'normal'
        },
        {
          parameter: 'font-weight',
          description: '默认字体粗细',
          dataTypes: 'String / Function',
          optional: '',
          default: 'normal'
        },
        {
          parameter: 'leave-animation',
          description: 'The leave animation.',
          dataTypes: 'Object / String',
          optional: '',
          default: ''
        },
        {
          parameter: 'load-font',
          description: 'Loads the font.',
          dataTypes: 'Function',
          optional: '',
          default: ''
        },
        {
          parameter: 'rotation-unit',
          description: '默认旋转单位',
          dataTypes: 'String / Function',
          optional: 'turn / deg / rad',
          default: 'turn'
        },
        {
          parameter: 'rotation',
          description: 'The default rotation for each word.',
          dataTypes: 'Number/ Function',
          optional: '',
          default: '0'
        },
        {
          parameter: 'spacing',
          description: '默认间距。该值是相对于字体大小',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        },
        {
          parameter: 'text',
          description: '默认文本',
          dataTypes: 'String / Function',
          optional: '',
          default: ''
        },
        {
          parameter: 'weight',
          description: '默认权重',
          dataTypes: 'Number / Function',
          optional: '',
          default: '1'
        },
        {
          parameter: 'words',
          description: `放置在云中的单词。数组的值可以是对象，数组或字符串。
                        如果该值是一个对象，它将解析为{text, weight, rotation, rotationUnit, fontFamily, fontStyle, fontVariant, fontWeight, color}。
                        如果该值为数组，则将解析为[text, weight]。
                        如果值为字符串，则将解析为text。`,
          dataTypes: 'Array',
          optional: '',
          default: '[]'
        }
      ],
      event: [
        {
          parameter: '@update',
          description: '更新事件，计算进度',
          dataTypes: '',
          optional: '',
          default: ''
        }
      ]
    }
  },
  mounted() {
    this.other.code.words = this.getWord()
    this.other.code_2.words = this.getWordCode2()
  },
  methods: {
    getWord() {
      let word = JSON.parse(JSON.stringify(this.words))
      for (let i = 0; i < word.length; i++) {
        word[i] = [word[i], Math.ceil(Math.random() * 30)]
      }

      return word
    },
    getWordCode2() {
      let word = JSON.parse(JSON.stringify(this.words))
      for (let i = 0; i < word.length; i++) {
        word[i] = {
          text: word[i],
          weight: Math.ceil(Math.random() * 30),
          rotation: Math.ceil(Math.random() * 12) * 30
        }
      }

      return word
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

