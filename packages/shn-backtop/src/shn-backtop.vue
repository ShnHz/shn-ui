<template>
  <transition name="fade">
    <div @click="backTop" class="shn-backtop" v-show="show">
      <div class="shn-backtop-customize-content">
        <slot></slot>
      </div>
      <div class="shn-backtop-content" v-if="!slotShow">
        <div>
          <i class="iconfont icon-vertical-align-top"></i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'shn-backtop',
  props: {
    target: {
      type: String,
      default: 'window'
    },
    visibilityHeight: {
      type: Number,
      default: 500
    }
  },
  computed: {
    slotShow() {
      return this.$slots.default
    }
  },
  data() {
    return {
      show: false,
      scrollTop: 0
    }
  },
  mounted() {
    if (this.visibilityHeight === 0) {
      this.show = true
    }
    if (this.target === 'window') {
      window.addEventListener('scroll', this.scrollToTop)
    } else {
      document
        .getElementById(this.target)
        .addEventListener('scroll', this.scrollToTop)
    }
  },
  destroyed() {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.scrollToTop)
    } else {
      document
        .getElementById(this.target)
        .removeEventListener('scroll', this.scrollToTop)
    }
  },
  methods: {
    scrollToTop() {
      if (this.target === 'window') {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
      } else {
        this.scrollTop = document.getElementById(this.target).scrollTop
      }

      if (this.visibilityHeight != 0) {
        if (this.scrollTop > this.visibilityHeight) {
          this.show = true
        } else {
          this.show = false
        }
      }
    },
    backTop() {
      let _this = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-_this.scrollTop / 5)
        if (this.target === 'window') {
          document.documentElement.scrollTop = document.body.scrollTop =
            _this.scrollTop + ispeed
        } else {
          document.getElementById(
            this.target
          ).scrollTop = document.body.scrollTop = _this.scrollTop + ispeed
        }
        if (_this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-backtop {
  .shn-backtop-content {
    cursor: pointer;
    z-index: 101;
    position: fixed;
    margin: 0;
    padding: 0;
    right: 100px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    div {
      width: 40px;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      color: #fff;
      text-align: center;
      background-color: #8888;
      border-radius: 20px;
      -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        background-color: #3338;
      }
      i {
        font-size: 22px;
      }
    }
  }
}
</style>
