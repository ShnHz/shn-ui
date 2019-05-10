<template>
  <div class="shn-modal">
    <transition name="shn-fade">
      <div
        @click="maskClosable && $emit('update:visible', false);close()"
        class="shn-modal-mask"
        v-if="show && mask"
      ></div>
    </transition>

    <transition name="shn-modal-fade">
      <div class="shn-modal-content" v-if="show">
        <div class="shn-modal-content-box">
          <div @click="$emit('update:visible', false)" class="shn-modal-content-close">
            <span class="shn-modal-close-x">
              <i class="iconfont icon-close"></i>
            </span>
          </div>
          <div class="shn-modal-content-header">
            <div>{{title}}</div>
          </div>
          <div class="shn-modal-content-body">
            <slot name="body"/>
          </div>
          <div class="shn-modal-content-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import COMMONS from '../../commons/commons'

export default {
  name: 'shn-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      id: 0,
      show: this.visible
    }
  },
  mounted() {},
  watch: {
    visible: function(val) {
      this.show = val
      if (this.show) {
        COMMONS.afterOpen()
      } else {
        COMMONS.beforeClose()
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
.shn-modal {
  .shn-modal-mask {
    z-index: 199;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000557;
  }
  .shn-modal-content {
    z-index: 200;
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .shn-modal-content-box {
      position: absolute;
      height: auto;
      transition: all 0.3s;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
      .shn-modal-content-close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        padding: 0;
        color: rgba(0, 0, 0, 0.45);
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        &:hover {
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        }
        .shn-modal-close-x {
          display: block;
          width: 56px;
          height: 56px;
          font-size: 16px;
          font-style: normal;
          line-height: 56px;
          text-align: center;
          text-transform: none;
          text-rendering: auto;
          i {
            display: inline-block;
            color: inherit;
            font-style: normal;
            line-height: 0;
            text-align: center;
            text-transform: none;
            vertical-align: -0.125em;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
        }
      }
      .shn-modal-content-header {
        padding: 16px 24px;
        border-bottom: 1px solid #e8e8e8;
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        word-wrap: break-word;
      }
      .shn-modal-content-body {
        padding: 24px 32px;
      }
      .shn-modal-content-footer {
        padding: 10px 16px 2px;
        text-align: right;
        border-top: 1px solid #e8e8e8;
        border-radius: 0 0 4px 4px;
      }
    }
  }
}
</style>

