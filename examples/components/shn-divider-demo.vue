<template>
  <div class="content-box">
    <h2 class="demo-title">Divider 分割线</h2>
    <p class="demo-introduction">区隔内容的分割线。</p>

    <shn-anchor>
      <shn-anchor-link href="divider-simple" title="基础用法"/>
      <shn-anchor-link href="divider-text" title="设置文案"/>
      <shn-anchor-link href="divider-direction" title="垂直分割线"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="168" :title="'基础用法'" id="divider-simple" introduction="对不同章节的文本段落进行分割。">
      <template v-slot:demo>
        <p
          class="demo-code-en-p"
        >Human growth is a process of experimentation, trial, and error, ultimately leading to wisdom.To ease this process of learning, you must first master the basic lessons of compassion and forgiveness. without these essential lessons, you remain trapped in your limited view and unable to parlay mistakes into valuable learning opportunities.</p>
        <shn-divider/>
        <p
          class="demo-code-en-p"
        >Compassion. Compassion is the act of opening your heart. To live in a state of compassion means you approach the world with your emotional barriers lowered. Compassion is the emotional glue connecting you to your essence and to the essence of those around you.</p>
        <shn-divider/>
        <p
          class="demo-code-en-p"
        >You have the ability to choose whether or not you will learn the lessons you are presented with, so you will then need to use your discretion to choose whether to invite in compassion or remain closed. If you choose compassion, you can try on what it would feel like to be that person you are judging and imagine putting yourself in her reality. This will connect you to her essence and evaporate the judgment encrusted around your heart.</p>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 设置文案DEMO -->
    <shn-el-demo-block :height="189" :title="'设置文案'" id="divider-text" introduction="可以在分割线上自定义文案内容。">
      <template v-slot:demo>
        <shn-divider>With Text</shn-divider>
        <shn-divider content-position="left">Element-ui</shn-divider>
        <shn-divider content-position="right">Ant Design Vue</shn-divider>
        <shn-divider content-position="right">
          <i class="shni shn-github-fill"></i>github
        </shn-divider>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(text.code.html)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 垂直分割线DEMO -->
    <shn-el-demo-block :height="168" :title="'垂直分割线'" id="divider-direction">
      <template v-slot:demo>
        Text
        <shn-divider direction="vertical"/>
        <a>Link</a>
        <shn-divider direction="vertical"/>
        <a>Link</a>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(direction.code.html)}}</code>
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
  name: 'shn-divider-demo',
  data() {
    return {
      a: document.getElementById('router_view_box'),
      simple: {
        code: {
          html: `
          <p>something...</p>
          <shn-divider/>
          <p>something...</p>
          <shn-divider/>
          <p>something...</p>
          `
        }
      },
      text: {
        code: {
          html: `
          <shn-divider>With Text</shn-divider>
          <shn-divider content-position="left">Element-ui</shn-divider>
          <shn-divider content-position="right">Ant Design Vue</shn-divider>
          <shn-divider content-position="right">
            <i class="iconfont icon-github-fill"></i>github
          </shn-divider>
          `
        }
      },
      direction: {
        code: {
          html: `
          Text
          <shn-divider direction="vertical"/>
          <a>Link</a>
          <shn-divider direction="vertical"/>
          <a>Link</a>
          `
        }
      },
      api: [
        {
          parameter: 'direction',
          description: '设置分割线方向	',
          dataTypes: 'String',
          optional: 'horizontal / vertical',
          default: 'horizontal'
        },
        {
          parameter: 'content-position',
          description: '设置分割线文案的位置',
          dataTypes: 'String',
          optional: 'left / right / center',
          default: 'center'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

