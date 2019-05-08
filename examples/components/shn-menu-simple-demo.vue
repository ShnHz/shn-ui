<template>
  <div class="content-box">
    <h2 class="demo-title">MenuSimple 简单导航菜单</h2>
    <p class="demo-introduction">为网站提供导航功能的简单菜单。</p>

    <shn-anchor>
      <shn-anchor-link href="meun-simple" title="基础用法"/>
      <shn-anchor-link href="api" title="API"/>
    </shn-anchor>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="732" :title="'基础用法'" id="meun-simple">
      <template v-slot:demo>
        <shn-menu-simple color="#2cbfbe" :value="simple.list"/>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript">{{fCode(simple.code.javascript)}}</code>
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
  name: 'shn-menu-simple-demo',
  data() {
    return {
      a: document.getElementById('router_view_box'),
      simple: {
        code: {
          html: `
          <shn-menu-simple color="#2cbfbe" :value="list"/>
          `,
          javascript: `
          export default {
            data() {
              return {
                list: [
                  {
                    text: '首页',
                    icon: 'icon-home-fill',
                    link: 'home'
                  },
                  {
                    text: '热搜',
                    icon: 'icon-fire-fill',
                    link: 'hot'
                  },
                  {
                    text: '收藏',
                    icon: 'icon-star-fill'
                  },
                  {
                    text: '商店',
                    icon: 'icon-shop-fill'
                  },
                  {
                    text: '设置',
                    icon: 'icon-setting-fill'
                  }
                ]
              }
            }
          }
          `
        },
        list: [
          {
            text: '首页',
            icon: 'icon-home-fill',
            link: 'home'
          },
          {
            text: '热搜',
            icon: 'icon-fire-fill',
            link: 'hot'
          },
          {
            text: '收藏',
            icon: 'icon-star-fill'
          },
          {
            text: '商店',
            icon: 'icon-shop-fill'
          },
          {
            text: '设置',
            icon: 'icon-setting-fill'
          }
        ]
      },
      api: [
        {
          parameter: 'color',
          description: '自定义颜色',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'Array',
          optional: '',
          default: ''
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

