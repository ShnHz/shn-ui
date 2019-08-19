<template>
  <div class="shn-country-picker" v-clickoutside="handleClose">
    <shn-button @click="show = !show" style="margin-bottom:0">
      <div class="shn-country-picker-editor">
        <div class="shn-country-picker-editor-body">
          <span :class="'flag_' + value" class="shn-country-picker-editor-flags"></span>
          <span
            :class="{'ellipsis' : chinese}"
            class="shn-country-picker-editor-span"
          >{{chinese ? formatChinese() : value.toUpperCase() }}</span>
          <i :class="{'is-reverse':show}" class="shni shn-up"></i>
        </div>
      </div>
    </shn-button>

    <transition name="drop-down">
      <div class="shn-country-picker-panel" v-show="show">
        <div class="popper__arrow" style="left:30px"></div>
        <div class="shn-country-picker-panel-search" v-if="search">
          <shn-input
            :height="28"
            :pattern="'frame'"
            placeholder="请输入关键字搜索"
            style="width:100%"
            suffix-icon="shn-search"
            v-model="input"
          />
        </div>
        <shn-divider style="margin: 0 0;" />
        <div class="shn-country-picker-panel-content">
          <ul
            :key="'shn-country-picker-panel-ul-' + name + index"
            class="shn-country-picker-panel-ul"
            v-for="(group,name,index) in showListData()"
          >
            <li class="group__title">{{name}}</li>
            <li
              :class="{'is_active':value == item[0]}"
              :key="'shn-country-picker-panel-ul-li-' + item[0]"
              @click="handleClick(item)"
              class="shn-country-picker-panel-ul-li"
              v-for="item in group"
            >
              <span :class="'flag_' + item[0]" class="shn-country-picker-panel-flags"></span>
              {{item[1]}} - {{item[0].toUpperCase()}}
            </li>
            <div class="shn-country-picker-panel-divider-box">
              <shn-divider style="margin: 12px 0;" />
            </div>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import clickoutside from '../../../public/js/clickoutside'

export default {
  name: 'shn-country-picker',
  directives: { clickoutside },

  props: {
    value: {
      type: String,
      default: 'cn'
    },
    sort: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: false
    },
    searchSort: {
      type: Boolean,
      default: true
    },
    chinese: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.$nextTick(function() {
      if (!this.sort) {
        let list = {}
        list['国家 / 地区'] = new Array()
        for (let k in this.list) {
          for (let i = 0; i < this.list[k].length; i++) {
            list['国家 / 地区'].push(this.list[k][i])
          }
        }
        this.list = list
        // console.log(list)
      }
      if (JSON.stringify(this.option) != '{}') {
        this.list = this.option
      }
    })
  },
  watch: {
    value: function(val) {
      this.data = val
    }
  },
  data() {
    return {
      show: false,
      data: 'cn',
      input: '',

      list: {
        '热门国家 / 地区': [
          ['cn', '中国'],
          ['us', '美国'],
          ['jp', '日本'],
          ['kr', '韩国'],
          ['hk', '中国香港'],
          ['tw', '中国台湾'],
          ['th', '泰国'],
          ['in', '印度'],
          ['ru', '俄罗斯'],
          ['br', '巴西']
        ],
        亚洲: [
          ['ae', '阿联酋'],
          ['az', '阿塞拜疆'],
          ['id', '印度尼西亚'],
          ['il', '以色列'],
          ['kw', '科威特'],
          ['kz', '哈萨克斯坦'],
          ['lb', '黎巴嫩'],
          ['lk', '斯里兰卡'],
          ['mo', '中国澳门'],
          ['my', '马来西亚'],
          ['om', '阿曼'],
          ['ph', '菲律宾'],
          ['pk', '巴基斯坦'],
          ['qa', '卡塔尔'],
          ['sa', '沙特阿拉伯'],
          ['sg', '新加坡'],
          ['vn', '越南']
        ],
        大洋洲: [['au', '澳大利亚'], ['nz', '新西兰']],
        欧洲: [
          ['at', '奥地利'],
          ['be', '比利时'],
          ['bg', '保加利亚'],
          ['by', '白俄罗斯'],
          ['ch', '瑞士'],
          ['cz', '捷克共和国'],
          ['de', '德国'],
          ['dk', '丹麦'],
          ['es', '西班牙'],
          ['fi', '芬兰'],
          ['fr', '法国'],
          ['gb', '英国'],
          ['gr', '希腊'],
          ['hr', '克罗地亚'],
          ['hu', '匈牙利'],
          ['ie', '爱尔兰'],
          ['it', '意大利'],
          ['lt', '立陶宛'],
          ['lu', '卢森堡'],
          ['nl', '荷兰'],
          ['no', '挪威'],
          ['pl', '波兰'],
          ['pt', '葡萄牙'],
          ['ro', '罗马尼亚'],
          ['se', '瑞典'],
          ['sk', '斯洛伐克'],
          ['tr', '土耳其'],
          ['ua', '乌克兰']
        ],
        美洲: [
          ['ar', '阿根廷'],
          ['ca', '加拿大'],
          ['cl', '智力'],
          ['co', '哥伦比亚'],
          ['cr', '哥斯达黎加'],
          ['do', '多米尼加共和国'],
          ['ec', '厄瓜多尔'],
          ['gt', '危地马拉'],
          ['mx', '墨西哥'],
          ['pe', '秘鲁'],
          ['uy', '乌拉圭'],
          ['ve', '委内瑞拉']
        ],
        非洲: [
          ['dz', '阿尔及利亚'],
          ['eg', '埃及'],
          ['ng', '尼日利亚'],
          ['za', '南非']
        ]
      }
    }
  },
  methods: {
    init() {
      if (this.value == '') {
        this.$emit('input', this.data)
      }
    },
    showListData() {
      if (this.input == '') {
        return this.list
      } else {
        let list = {}
        if (!this.searchSort) {
          list['搜索结果'] = new Array()
        }
        for (let k in this.list) {
          let ul = []
          for (let i = 0; i < this.list[k].length; i++) {
            for (let j = 0; j < this.list[k][i].length; j++) {
              if (
                this.list[k][i][j].indexOf(this.input.toLocaleLowerCase()) > -1
              ) {
                if (this.searchSort) {
                  ul.push(this.list[k][i])
                } else {
                  list['搜索结果'].push(this.list[k][i])
                }
              }
            }
          }
          if (ul.length != 0 && this.searchSort) {
            list[k] = ul
          }
        }

        return list
      }
    },
    formatChinese() {
      for (let k in this.list) {
        for (let i = 0; i < this.list[k].length; i++) {
          if (this.list[k][i][0] == this.value) {
            return this.list[k][i][1]
          }
        }
      }
    },
    handleClose() {
      this.input = ''
      this.show = false
    },
    handleClick(item) {
      this.$emit('change', item[0])
      this.$emit('input', item[0])
      this.handleClose()
    },
    confirm() {
      this.$emit('change', this.data)
      this.$emit('input', this.data)
      this.handleClose()
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-country-picker {
  display: inline-block;
  position: relative;
  .shn-country-picker-editor {
    .shn-country-picker-editor-body {
      display: flex;
      justify-items: center;
      align-items: center;
      position: relative;
      // top: -1px;
      .shn-country-picker-editor-flags {
        position: relative;
      }
      i {
        display: inline-block;
        color: #c0c4cc;
        font-size: 13px;
        transition: transform 0.3s;
        transform: rotate(180deg);
        &.is-reverse {
          transform: rotate(0deg);
        }
      }
    }
    .shn-country-picker-editor-span {
      position: relative;
      left: 5px;
      display: inline-block;
      width: 50px;
      padding: 0 0 0 5px;
      text-align: left;
      &.ellipsis {
        width: 100px;
      }
    }
  }

  .shn-country-picker-panel {
    z-index: 150;
    position: absolute;
    margin: 5px 0;
    margin-top: 12px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    line-height: 30px;
    backface-visibility: hidden;
    .shn-country-picker-panel-search {
      padding-left: 20px;
      padding-top: 10px;
      padding: 10px 20px;
    }
    .shn-country-picker-panel-content {
      padding: 6px 0;
      width: 255px;
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
      transform: translateZ(0px);

      .shn-country-picker-panel-ul {
        position: relative;
        list-style: none;
        margin: 0;
        line-height: 34px;
        .group__title {
          font-size: 12px;
          color: #909399;
          line-height: 30px;
          padding-left: 20px;
        }
        .shn-country-picker-panel-ul-li {
          width: 250px;
          font-size: 14px;
          padding: 0 20px;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #606266;
          display: flex;
          align-items: center;
          cursor: pointer;
          .shn-country-picker-panel-flags {
            margin-right: 20px;
          }
          &:hover {
            background-color: #f5f7fa;
          }
          &.is_active {
            color: $--color-primary;
            font-weight: 600;
          }
        }
        .shn-country-picker-panel-divider-box {
          padding: 0 20px;
        }
        &:last-child {
          .shn-country-picker-panel-divider-box {
            display: none;
          }
        }
      }
    }
  }
}
</style>
