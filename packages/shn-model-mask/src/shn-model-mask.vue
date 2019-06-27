<template>
  <div class="shn-model-mask">
    <div class="shn-model-mask-height">
      <slot/>
      <div class="mask" title="查看详情">
        <div class="del" title="删除" @click="del">
          <i class="shni shn-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shn-model-mask',
  props: {
    delbtn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    del() {
      this.$emit('del')
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-model-mask {
  cursor: pointer;
  position: relative;
  display: inline-block;
  .shn-model-mask-height {
    display: flex;
    align-items: center;
    justify-content: center;
    .mask {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.274);
      transition: all 0.3s;
      opacity: 0;
      .del {
        position: absolute;
        right: -50px;
        top: -50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        // background: rgba(255, 255, 255, 0.5);
        i {
          position: relative;
          top: 58px;
          left: 23px;
          color: #f56c6c;
        }
      }
    }
  }
  &:hover {
    .mask {
      opacity: 1;
    }
  }
}
</style>
