<template>
  <div @click="click" class="shn-model-mask">
    <div class="shn-model-mask-height">
      <slot />
      <div class="mask" title="查看详情">
        <div @click.stop="del" class="del" title="删除" v-if="delbtn">
          <i class="shni shn-close_1"></i>
        </div>
      </div>
      <div class="ofenDisplay" v-if="ofenDisplay">
        <i class="shni shn-search"></i>
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
    },
    ofenDisplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    del() {
      this.$emit('del')
    },
    click() {
      this.$emit('click')
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
      z-index: 1;
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
          color: #909399;
          transition: color 0.3s ease;
        }
        &:hover {
          i {
            color: #f56c6c;
          }
        }
      }
    }
    .ofenDisplay {
      z-index: 0;
      opacity: 0.5;
      background: rgba(255, 255, 255, 0.7);
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: all 0.3s;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 80px;
        color: #808080;
      }
    }
  }
  &:hover {
    .mask {
      opacity: 1;
      background: rgba(0, 0, 0, 0.274);
    }
    .ofenDisplay {
      opacity: 0;
    }
  }
}
</style>
