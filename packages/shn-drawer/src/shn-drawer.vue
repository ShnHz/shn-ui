<template>
  <div class="shn-drawer">
    <transition name="shn-fade">
      <div
        @click="maskClosable && $emit('update:visible', false);close()"
        class="shn-drawer-mask"
        v-if="show && mask"
      ></div>
    </transition>
    <div
      :class="{'left':placement === 'left','right':placement === 'right'}"
      :style="{ width: width + 'px' }"
      class="shn-drawer-content"
    >
      <shn-loading :loading="loading"/>
      <div :id="'shn-drawer-content'+id" class="shn-drawer-content-block">
        <div class="shn-drawer-header" v-if="title != ''">{{title}}</div>
        <div class="shn-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shn-drawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'right'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: 0,
      show: this.visible,
      width: 0,

      shn_drawer_block_dom: [], //多级抽屉dom
      shn_drawer_content: [], //多级抽屉dom
      observer: null
    }
  },
  created() {
    this.id = Math.floor(Math.random() * 100000)
  },
  mounted() {
    let _this = this
    let element = document
      .getElementById('shn-drawer-content' + this.id)
      .getElementsByClassName('shn-drawer-content')[0]

    if (typeof element != 'undefined') {
      let MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      this.observer = new MutationObserver(mutationList => {
        setTimeout(() => {
          if (mutationList[0].target.offsetWidth != 0) {
            _this.width += mutationList[0].target.offsetWidth
          } else {
            _this.width = document.getElementById(
              'shn-drawer-content' + this.id
            ).offsetWidth
          }
        }, 350)
      })
      this.observer.observe(element, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: false
      })
    }
  },
  watch: {
    visible: function(val) {
      this.show = val
      if (this.show) {
        this.width = document.getElementById(
          'shn-drawer-content' + this.id
        ).offsetWidth
      } else {
        this.width = 0
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-drawer {
  .shn-drawer-mask {
    z-index: 199;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000557;
  }
  .right {
    right: 0;
    .shn-drawer-content-block {
      left: 0;
    }
  }
  .left {
    left: 0;
    .shn-drawer-content-block {
      right: 0;
    }
  }
  .shn-drawer-content {
    z-index: 200;
    position: fixed;
    top: 0;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    transition: width 0.3s;
    overflow: hidden;
    .shn-drawer-content-block {
      position: absolute;
      top: 0;
      width: auto;
      min-width: 200px;
    }
    .shn-drawer-header {
      position: relative;
      padding: 16px 24px;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 4px 4px 0 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
    .shn-drawer-body {
      padding: 24px;
    }
  }
}
</style>

