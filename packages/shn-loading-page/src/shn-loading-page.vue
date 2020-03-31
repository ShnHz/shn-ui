<template>
  <transition name="shn-fade">
    <div class="shn-loading-page" v-show="show">
      <div class="shn-loading-mask"></div>
      <div class="shn-loading-main">
        <img alt src="https://www.gacgame.com/static/img/time.gif">
      </div>
    </div>
  </transition>
</template>
<script>
import COMMONS from '../../commons/commons'

export default {
  name: 'shn-loading-page',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.loading
    }
  },
  mounted() {
    COMMONS.afterOpen()
  },
  watch: {
    loading: function(val) {
      this.show = val
      if (this.show) {
        COMMONS.afterOpen()
      } else {
        COMMONS.beforeClose()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-loading-page {
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  .shn-loading-mask {
    position: absolute;
    z-index: 1000;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .shn-loading-main {
    z-index: 1001;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: #777;
    p{
      margin-top: 20px;
    }
  }
}
</style>
