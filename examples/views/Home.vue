<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <span class="title">SHN-UI</span>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <ul>
          <li :key="item_1.title" class="nav-item" v-for="item_1 in ul_data">
            <a>{{item_1.title}}</a>
            <ul class="pure-menu-list" v-if="item_1.li_data.length != 0">
              <li :key="item_2.path" class="nav-item" v-for="item_2 in item_1.li_data">
                <div class="nav-group__title" v-if="item_2.group">{{item_2.group}}</div>
                <a
                  :class="{'active':active == item_2.id}"
                  :href="item_2.path"
                  @click="active = item_2.id"
                >{{item_2.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="content" id="router_view_box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      active: 1,
      ul_data: [
        {
          title: '开发指南',
          li_data: [
            { id: -1, name: '安装/快速上手', path: '#/component/installation' },
            { id: -2, name: 'Icon 图标', path: '#/component/icon' }
          ]
        },
        {
          title: '组件',
          li_data: [
            {
              id: '000',
              group: '通用',
              name: 'Button 按钮',
              path: '#/component/button'
            },
            {
              id: '001',
              name: 'Shadow 投影',
              path: '#/component/shadow'
            },
            {
              id: '100',
              group: '数据录入',
              name: 'Input 输入框',
              path: '#/component/input'
            },
            {
              id: '101',
              name: 'UploadImg 上传图片',
              path: '#/component/uploadimg'
            },
            {
              id: '102',
              name: 'DatePicker 日期选择器',
              path: '#/component/date-picker'
            },
            {
              id: '103',
              name: 'CountryPicker 国家选择器',
              path: '#/component/country-picker'
            },
            {
              id: '200',
              group: '数据展示',
              name: 'Statistic 统计数值',
              path: '#/component/statistic'
            },
            {
              id: '201',
              name: 'ImgCard 图片卡片',
              path: '#/component/img-card'
            },
            {
              id: '202',
              name: 'ModelMask 模块蒙版',
              path: '#/component/model-mask'
            },
            {
              id: '300',
              group: '其他',
              name: 'Collapse 折叠动画盒子',
              path: '#/component/collapse'
            },
            {
              id: '301',
              name: 'BackTop 回到顶部',
              path: '#/component/backtop'
            },
            {
              id: '302',
              name: 'FooterToolbar 底部工具栏',
              path: '#/component/footertoolbar'
            },
            {
              id: '303',
              name: 'Drawer 抽屉',
              path: '#/component/drawer'
            },
            {
              id: '304',
              name: 'Anchor 锚点',
              path: '#/component/anchor'
            },
            {
              id: '304',
              name: 'Divider 分割线',
              path: '#/component/divider'
            },
            {
              id: '306',
              name: 'MenuSimple 简单菜单',
              path: '#/component/meunsimple'
            },
            {
              id: '307',
              name: 'WidgetModal 可拖动模态框',
              path: '#/component/widget-modal'
            }
          ]
        },
        {
          title: '网络实用插件',
          li_data: [
            { id: -99, name: '图片裁剪', path: '#/component/vue-cropper' },
            {
              id: -100,
              name: '拖拽/缩放',
              path: '#/component/vue-drag-resize'
            },
            { id: -101, name: '操作Cookies', path: '#/component/vue-cookies' },
            { id: -102, name: '云词', path: '#/component/vue-word-cloud' },
            {
              id: -103,
              name: '脉冲圆点',
              path: '#/component/vue-status-indicator'
            },
            {
              id: -104,
              name: 'Loading素材',
              path: '#/component/epic-spinners'
            }
          ]
        }
      ],
      sidebarHover: false
    }
  },
  watch: {
    $route: function(to, from) {
      if (from.path != to.path) {
        document.documentElement.scrollTop = 0
      }
    }
  },
  mounted() {
    switch (this.$router.history.current.fullPath) {
      case '/component/installation':
        this.active = -1
        break
      case '/component/icon':
        this.active = -2
        break
      case '/component/input':
        this.active = '100'
        break
      case '/component/statistic':
        this.active = '200'
        break
      case '/component/img-card':
        this.active = '201'
        break
      case '/component/collapse':
        this.active = '300'
        break
      case '/component/backtop':
        this.active = '301'
        break
      case '/component/button':
        this.active = '000'
        break
      case '/component/shadow':
        this.active = '001'
        break
      case '/component/footertoolbar':
        this.active = '302'
        break
      case '/component/drawer':
        this.active = '303'
        break
      case '/component/uploadimg':
        this.active = '101'
        break
      case '/component/anchor':
        this.active = '304'
        break
      case '/component/divider':
        this.active = '305'
        break
      case '/component/meunsimple':
        this.active = '306'
        break
      case '/component/model-mask':
        this.active = '202'
        break
      case '/component/date-picker':
        this.active = '102'
        break
      case '/component/country-picker':
        this.active = '103'
        break
      case '/component/widget-modal':
        this.active = '307'
        break
      case '/component/vue-drag-resize':
        this.active = -100
        break
      case '/component/vue-cropper':
        this.active = -99
        break
      case '/component/vue-cookies':
        this.active = -101
        break
      case '/component/vue-word-cloud':
        this.active = -102
        break
      case '/component/vue-status-indicator':
        this.active = -103
        break
      case '/component/epic-spinners':
        this.active = -104
        break
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #dcdfe6;
      .title {
        // color: $--color-primary;
        color: #409eff;
        font-size: 26px;
        font-weight: 500;
        font-family: '微软雅黑';
      }
    }
  }
  .main {
    position: relative;
    width: 1140px;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    top: 80px;
    display: flex;
    // transform: translate(0, 0);
    // overflow: auto;
    // visibility: hidden;
    // &:focus,
    // &:hover {
    //   visibility: visible;
    // }
    .sidebar {
      position: fixed;
      margin-right: 40px;
      width: 200px;
      height: 80%;
      top: 135px;
      visibility: hidden;
      overflow: auto;
      &:hover {
        visibility: visible;
      }
      > ul {
        visibility: visible;
      }
      .nav-item {
        list-style: none;
        a {
          font-size: 15px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          display: block;
          position: relative;
          transition: 0.15s ease-out;
          font-weight: 700;
        }
        .nav-group__title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
        .pure-menu-list {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            &:hover {
              color: #409eff;
            }
          }
          .active {
            color: #409eff;
          }
        }
      }
    }
    .content {
      flex: 1;
      width: 100%;
      padding: 0 50px 0 10px;
      margin-left: 240px;
    }
  }
}
</style>

