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
                <a :class="{'active':active == item_2.id}" :href="item_2.path" @click="active = item_2.id">{{item_2.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      active: 0,
      ul_data: [
        {
          title: '组件',
          li_data: [
            {
              id: 0,
              name: 'Input 输入框',
              path: '#/component/input'
            },
            {
              id: 1,
              name: 'Statistic 统计数值',
              path: '#/component/statistic'
            },
            {
              id: 2,
              name: 'ImgCard 图片卡片',
              path: '#/component/img-card'
            },
            {
              id: 3,
              name: 'Collapse 折叠动画盒子',
              path: '#/component/collapse'
            }
          ]
        }
      ]
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
    top: 80px;
    display: flex;
    .sidebar {
      position: relative;
      width: 240px;
      padding-top: 50px;
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
      height: 100%;
      overflow-y: auto;
      padding:0 10px;
    }
  }
}
</style>

