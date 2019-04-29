<template>
  <button
    :class="{'shn-button-primary':type === 'primary' || type === 'customize','shn-button-success':type === 'success','shn-button-dashed':type === 'dashed','shn-button-dotted':type === 'dotted','shn-button-danger':type === 'danger','shn-button-warning':type === 'warning','ripple':animation,'disabled':disabled,'circle':circle,'block':block,'width-100':block}"
    :disabled="disabled"
    :style="customizeColor"
    @click="click"
    class="shn-button"
  >
    <i :class="[icon === '' ? 'icon-question':icon ]" class="iconfont" v-if="icon != '' || circle"></i>
    <span class="shn-button-span" v-if="!circle">
      <slot/>
    </span>
  </button>
</template>
<script>
export default {
  name: 'shn-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    animation: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      scrollTop: 0,
      customizeColor: {
        backgroundColor: this.color,
        borderColor: this.color
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-button {
  position: relative;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 12px;
  padding: 0 15px;

  height: 32px;
  line-height: 1.499;

  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: none;

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }
  i + .shn-button-span {
    margin-left: 5px;
  }
}
.ripple {
  overflow: hidden;
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    //设置初始状态
    transition: 0s;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    //设置径向渐变
    background-image: radial-gradient(circle, #aaa 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
}
.shn-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-color: #85ce61;
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
}
.shn-button-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
}
.shn-button-dashed {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
}
.shn-button-dotted {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dotted;
  border-width: 2px;
}
.shn-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #f78989;
    border-color: #f78989;
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
}
.shn-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #ebb563;
    border-color: #ebb563;
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
}
.circle {
  padding: 0;
  width: 32px;
  border-radius: 50%;
}
.disabled {
  cursor: not-allowed;
  color: #c0c4cc;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
  &:hover,
  &:focus {
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>
