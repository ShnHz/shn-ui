<template>
  <transition name="shn-fade">
    <vue-drag-resize
      :aspectRatio="aspectRatio"
      :h="height"
      :isDraggable="isDraggable"
      :isResizable="isResizable"
      :minh="200"
      :minw="360"
      :w="width"
      :x="x"
      :y="y"
      :z="190"
      dragHandle=".shn-widget-modal-content-header"
      ofen-active
      style="position:fixed;"
    >
      <div class="shn-widget-modal-content-box" v-if="show">
        <div @click="$emit('update:visible', false)" class="shn-widget-modal-content-close">
          <span class="shn-widget-modal-close-x">
            <i class="shni shn-close_1"></i>
          </span>
        </div>
        <div class="shn-widget-modal-content-header">{{title}}</div>
        <div class="shn-widget-modal-content-body">
          <slot />
        </div>
      </div>
    </vue-drag-resize>
  </transition>
</template>
<script>
export default {
  name: 'shn-widget-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    },
    width: {
      type: Number,
      default: 450
    },
    height: {
      type: Number,
      default: 200
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    aspectRatio: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: 0,
      show: this.visible,
      x: 0,
      y: 0
    }
  },
  mounted() {
    this.y = window.innerHeight - this.height - 10
    this.x = window.innerWidth - this.width - 10
  },
  watch: {
    visible: function(val) {
      this.show = val
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
.shn-widget-modal-content-box {
  z-index: 190;
  // position: fixed;
  // right: 0;
  // bottom: 0;
  width: 100%;
  min-width: 360px;
  min-height: 200px;
  height: 100%;
  transition: all 0.3s;
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.21) 0px 4px 16px 0px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  .shn-widget-modal-content-close {
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
      // color: rgba(0, 0, 0, 0.75);
      text-decoration: none;
    }
    .shn-widget-modal-close-x {
      display: block;
      width: 56px;
      height: 56px;
      font-size: 16px;
      font-style: normal;
      line-height: 50px;
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
  .shn-widget-modal-content-header {
    background: rgb(242, 242, 242);
    padding: 16px 24px;
    border-bottom: 1px solid #e8e8e8;
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    word-wrap: break-word;
    text-align: center;
  }
  .shn-widget-modal-content-body {
    cursor: default;
    z-index: 1;
    padding: 16px;
    height: calc(100% - 55px);
    overflow-y: auto;
  }
}
</style>

