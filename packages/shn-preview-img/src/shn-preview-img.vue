<template>
  <transition name="shn-fade">
    <div class="shn-preview-img" v-if="show">
      <div class="shn-preview-img-topbar">
        <i @click="$emit('update:visible', false)" class="shni shn-close"></i>
      </div>
      <div :style="imgBoxStyle" class="img-box">
        <img
          :class="{'img-width100':imgBoxStyleType === 1 && zoomType,'zoom-in':!zoomType,'zoom-out':zoomType}"
          :src="value"
          @click="!zoomType ? zoomIn():zoomOut()"
          alt
          ref="img"
        />
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'shn-preview-img',
  props: {
    value: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.visible,
      list: this.value,
      imgBoxStyle: '',
      imgBoxStyleType: 0,
      zoomType: false
    }
  },
  watch: {
    visible: function(val) {
      if (val) {
        document.addEventListener('keyup', this.keyCodeEsc)
      } else {
        document.removeEventListener('keyup', this.keyCodeEsc)
      }

      let img = new Image()
      img.src = this.value

      if (img.width === img.height) {
        this.imgBoxStyleType = 0
      } else if (img.width < img.height) {
        this.imgBoxStyleType = 1
      } else {
        this.imgBoxStyleType = 2
      }

      this.zoomOut()
      this.show = val
    }
  },
  methods: {
    zoomIn() {
      this.zoomType = true
      switch (this.imgBoxStyleType) {
        case 0:
          this.imgBoxStyle = {
            width: 'auto',
            height: '100%',
            overflow: 'hidden'
          }
          break
        case 1:
          this.imgBoxStyle = {
            width: '768px',
            height: '100%',
            overflow: 'auto'
          }
          break
        case 2:
          this.imgBoxStyle = {
            width: 'auto',
            height: '100%',
            overflow: 'hidden'
          }
          break
      }
    },
    zoomOut() {
      this.zoomType = false
      switch (this.imgBoxStyleType) {
        case 0:
          this.imgBoxStyle = {
            width: '768px',
            height: '768px',
            overflow: 'hidden'
          }
          break
        case 1:
          this.imgBoxStyle = {
            width: '80%',
            height: '768px',
            overflow: 'hidden'
          }
          break
        case 2:
          this.imgBoxStyle = {
            width: 'auto',
            height: '768px',
            overflow: 'hidden'
          }
          break
      }
    },
    keyCodeEsc(e) {
      if (e.keyCode == 27) {
        this.$emit('update:visible', false)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-preview-img {
  z-index: 9990;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .shn-preview-img-topbar {
    position: absolute;
    top: 0px;
    width: 100%;
    color: #fff;
    padding: 10px;
    i {
      cursor: pointer;
      float: right;
      color: rgba(255, 255, 255, 0.6);
      font-size: 24px;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
  .img-box {
    width: 768px;
    height: 768px;
    overflow: hidden;
    text-align: center;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px !important;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 5px !important;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条里面小方块 */
      background: rgb(194, 194, 194) !important;
    }

    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      background: rgba(255, 255, 255, 0.082) !important;
    }
    img {
      width: auto;
      height: 100%;
    }
    .img-width100 {
      width: 100%;
      height: auto;
    }
    .zoom-in {
      cursor: zoom-in;
    }
    .zoom-out {
      cursor: zoom-out;
    }
  }
}
</style>
