<template>
  <div class="shn-date-range-picker" v-clickoutside="handleClose">
    <shn-button @click="show = !show" style="margin-bottom:0">
      <div class="shn-date-range-picker-editor">
        <i class="shni shn-calendar"></i>
        <span class="shn-date-picker-editor-body">
          <span class="shn-date-picker-editor-span">{{value[0]}}</span>
          <span class="shn-date-picker-editor-range-separator">{{rangeSeparator}}</span>
          <span class="shn-date-picker-editor-span">{{value[1]}}</span>
        </span>
      </div>
    </shn-button>

    <transition name="drop-down">
      <div class="shn-date-picker-panel" v-show="show">
        <div class="popper__arrow" style="left:30px"></div>
        <shortcutsPanel @cancel="handleClose" @confirm="confirm" v-model="data" />
      </div>
    </transition>
  </div>
</template>
<script>
import clickoutside from '../../../public/js/clickoutside'
import shortcutsPanel from './compontent/shortcutsPanel'

export default {
  name: 'shn-date-range-picker',
  directives: { clickoutside },
  components: {
    shortcutsPanel
  },
  props: {
    value: {
      type: [Array, String],
      default: ''
    },
    rangeSeparator: {
      type: String,
      default: '-'
    }
  },
  created() {
    this.init()
  },
  watch: {
    value: function(val) {
      this.data = val
    }
  },
  data() {
    return {
      show: false,
      data: this.value
    }
  },
  methods: {
    init() {
      if (this.data == '') {
        this.$emit('input', this.getlastday(30))
      }
    },
    handleClose() {
      this.show = false
    },
    confirm() {
      this.$emit('change', this.data)
      this.$emit('input', this.data)
      this.handleClose()
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-date-range-picker {
  display: inline-block;
  position: relative;
  .shn-date-range-picker-editor {
    .shn-date-picker-editor-body {
      position: relative;
      top: -1px;
    }
    .shn-date-picker-editor-span {
      display: inline-block;
      width: 120px;
      text-align: center;
    }
  }

  .shn-date-picker-panel {
    z-index: 150;
    position: absolute;
    margin: 5px 0;
    margin-top: 12px;
    padding: 10px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    line-height: 30px;
  }
}
</style>
