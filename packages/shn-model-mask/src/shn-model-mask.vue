<template>
  <div @click="click" class="shn-model-mask">
    <div class="shn-model-mask-height">
      <slot />
      <div class="mask" title="查看详情">
        <div class="btn-box">
          <div @click.stop="preview" class="del" title="预览" v-if="previewbtn">
            <i class="shni shn-search"></i>
          </div>
          <div @click.stop="edit" class="edit" title="编辑" v-if="editbtn">
            <i class="shni shn-edit"></i>
          </div>
          <div @click.stop="del" class="del" title="删除" v-if="delbtn">
            <i class="shni shn-delete"></i>
          </div>
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
    editbtn: {
      type: Boolean,
      default: true
    },
    previewbtn: {
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
    preview() {
      this.$emit('preview')
    },
    del() {
      this.$emit('del')
    },
    edit() {
      this.$emit('edit')
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
    width: 100%;
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
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-box {
        display: flex;
        > div {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
          margin: 0 5px;
          i {
            color: #909399;
            font-size: 20px;
          }
          &:hover {
            box-shadow: #000 0 5px 10px 0;
            transform: translateY(-5px);
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
