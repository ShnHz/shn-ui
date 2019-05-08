<template>
  <div class="shn-menu-simple">
    <ul class="shn-meun-simple-nav">
      <li
        :key="item.text"
        @mouseenter="typeof item.link != 'undefined' && hoverColor(true,`li_text${item.text}${index}`)"
        @mouseleave="typeof item.link != 'undefined' && hoverColor(false,`li_text${item.text}${index}`)"
        class="shn-meun-simple-li"
        v-for="(item,index) in value"
      >
        <router-link :to="item.link" v-if="typeof item.link != 'undefined'">
          <i :class="item.icon" :style="customizeColor" class="iconfont"></i>
          <p :id="`li_text${item.text}${index}`">{{item.text}}</p>
        </router-link>
        <div v-else>
          <i :class="item.icon" class="iconfont"></i>
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
    }
  },
  data() {
    return {
      customizeColor: {
        color: this.color
      }
    }
  },
  methods: {
    hoverColor(isChange, dom) {
      if (isChange) {
        document.getElementById(dom).style.color = this.color
      } else {
        document.getElementById(dom).style.color = '#222'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-menu-simple {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50px;
  padding: 8px 0 0;
  .shn-meun-simple-nav {
    position: relative;
    z-index: 200;
    height: 42px;
    .shn-meun-simple-li {
      cursor: pointer;
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
        p {
          color: #222;
        }
      }
    }
  }
}
</style>
