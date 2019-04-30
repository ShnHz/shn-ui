<template>
  <transition name="shn-fade">
    <div class="shn-loading" v-show="show">
      <div class="shn-loading-mask"></div>
      <div class="shn-loading-main">
        <span></span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'shn-loading',
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
  watch: {
    loading: function(val) {
      this.show = val
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-loading {
  .shn-loading-mask {
    position: absolute;
    z-index: 1000;
    background: rgb(245, 245, 245);
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
    span {
      position: relative;
      display: block;
      width: 32px;
      height: 32px;

      border-radius: 50%;
      background-color: #2d8cf0;
      width: 20px;
      height: 20px;
      -webkit-animation: ani-spin-bounce 1s 0s ease-in-out infinite;
      animation: ani-spin-bounce 1s 0s ease-in-out infinite;
    }
    @keyframes ani-spin-bounce {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
      }
    }
  }
}
</style>
