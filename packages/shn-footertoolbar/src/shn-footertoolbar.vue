<template>
  <transition name="shn-fade">
    <div class="shn-footertoolbar" v-show="show">
      <div class="shn-footertoolbar-left">{{content}}</div>
      <div class="shn-footertoolbar-right">
        <shn-button @click="cancel" v-if="cancelButtonShow">{{cancelButtonText}}</shn-button>
        <shn-button @click="confirm" type="primary" v-if="confirmButtonShow">{{confirmButtonText}}</shn-button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'shn-footertoolbar',
  props: {
    target: {
      type: String,
      default: 'window'
    },
    visibilityHeight: {
      type: Number,
      default: 0
    },
    content:{
      type:String,
      default:'extra information'
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel'
    },
    confirmButtonText: {
      type: String,
      default: 'Confirm'
    },
    cancelButtonShow: {
      type: Boolean,
      default: true
    },
    confirmButtonShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
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
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      this.$emit('confirm')
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-footertoolbar {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  font-size: 14px;
  .shn-footertoolbar-right {
    float: right;
  }
  .shn-footertoolbar-left {
    float: left;
  }
}
</style>

