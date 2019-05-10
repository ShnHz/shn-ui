<template>
  <div class="shn-menu-simple">
    <ul class="shn-meun-simple-nav">
      <div class="shn-menu-simple-nav-active-bar" ref="menuActiveBar"></div>
      <li
        :key="item.text"
        @mouseenter="typeof item.link != 'undefined' && hoverColor(true,`li_${index}`)"
        @mouseleave="typeof item.link != 'undefined' && hoverColor(false,`li_${index}`)"
        class="shn-meun-simple-li"
        v-for="(item,index) in value"
      >
        <router-link :to="item.link" v-if="typeof item.link != 'undefined'">
          <div @click="select(item,index)">
            <i :class="item.icon" :style="customizeColor" class="iconfont"></i>
            <p :id="`li_${index}`">{{item.text}}</p>
          </div>
        </router-link>
        <div v-else>
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'shn-menu-simple',
  props: {
    value: {
      type: Array,
      default: function() {
        return []
      }
    },
    color: {
      type: String,
      default: ''
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      customizeColor: {
        color: this.color
      },
      liWidth: []
    }
  },
  mounted() {
    this.$refs.menuActiveBar.style.backgroundColor = this.color
    for (
      let i = 0;
      i < document.getElementsByClassName('shn-meun-simple-li').length;
      i++
    ) {
      this.liWidth.push(
        document.getElementsByClassName('shn-meun-simple-li')[i].clientWidth
      )
    }

    this.menuActiveBarScoll(this.activeIndex)
  },
  methods: {
    hoverColor(isChange, dom) {
      if (isChange) {
        document.getElementById(dom).style.color = this.color
      } else {
        document.getElementById(dom).style.color = '#222'
      }
    },
    select(item, index) {
      this.$emit('select', item, index)
      this.menuActiveBarScoll(index)
    },
    menuActiveBarScoll(index) {
      let translateX = 0
      for (let i = 0; i < index; i++) {
        translateX += this.liWidth[i]
      }

      this.$refs.menuActiveBar.style.width = this.liWidth[index] + 'px'
      this.$refs.menuActiveBar.style.transform = `translateX(${translateX}px)`
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-menu-simple {
  margin: 0;
  padding: 0;
  padding: 8px 0 0;
  .shn-meun-simple-nav {
    position: relative;
    z-index: 200;
    border-bottom: 1px solid #e5e9ef;
    .shn-menu-simple-nav-active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #409eff;
      z-index: 1;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
    }
    &:after {
      clear: both;
      content: '.';
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .shn-meun-simple-li {
      display: block;
      position: relative;
      padding: 0 10px;
      float: left;
      text-align: center;
      i {
        color: #666;
        font-size: 20px;
      }
      p {
        color: #666;
        font-size: 12px;
        height: 40px;
        padding-top: 8px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      a {
        cursor: pointer;
        i {
          color: #409eff;
        }
        p {
          color: #222;
        }
      }
    }
  }
}
</style>
