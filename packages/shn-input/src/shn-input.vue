<template>
  <!-- 
    Input Attributes

      type                | 输入框类型	                   text/number/...
      pattern             | 输入框样式	                   frame/line
      value / v-model	    | 绑定值	                       string
      placeholder  	      | 输入框占位文本	                string
      height              | 输入框高度                      number
      disabled            | 禁用                           boolean
      animation           | 动画                           boolean
      mode                | 布局方式                       string(horizontal|vertical)
      suffix-icon
      prefix-icon
  -->
  <div
    :class="{'shn-input_frame':pattern === 'frame',
    'shn-input_line':pattern === 'line',
    'inline-block':mode === 'horizontal',
    'padding-top25':pattern === 'line' && animation
    }"
    class="shn-input"
  >
    <input
      :class="{'suffix-icon':suffixIcon,'prefix-icon':prefixIcon}"
      :disabled="disabled"
      :placeholder="placeholder_c"
      :style="{height:height+'px',lineHeight:height + 'px'}"
      :type="type"
      :value="value"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @input="handleInput"
      class="shn-input__inner"
      ref="input"
    />
    <i :class="suffixIcon" class="suffix-icon shni" v-if="suffixIcon != '' && pattern === 'frame'"></i>
    <i :class="prefixIcon" class="prefix-icon shni" v-if="prefixIcon != '' && pattern === 'frame'"></i>

    <label
      :class="{'shn-input__label__focus':value != ''}"
      @click="$refs.input.focus()"
      class="shn-input__label"
      v-if="pattern == 'line' && animation && !disabled"
    >{{placeholder}}</label>
  </div>
</template>
<script>
export default {
  name: 'shn-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    pattern: {
      type: String,
      default: 'line'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    mode: {
      type: String,
      default: 'horizontal'
    },
    height: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'mini'
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: ''
    }
  },
  computed: {
    placeholder_c() {
      if (this.pattern === 'line') {
        if (this.animation) {
          return ''
        } else {
          return this.placeholder
        }
      }
      return this.placeholder
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  i {
    color: #c0c4cc;
    &.prefix-icon {
      position: absolute;
      left: 5px;
    }
    &.suffix-icon {
      position: absolute;
      right: 5px;
    }
  }

  .shn-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 0 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &.suffix-icon {
      padding-right: 25px;
    }
    &.prefix-icon {
      padding-left: 25px;
    }
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      outline: none;
      border-color: $--color-primary;
    }
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #ccc;
      font-size: 13px;
    }
    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
}
.shn-input_frame {
  border-radius: 5px;
  // background: #b4bccc;
  .shn-input__inner {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
  }
}

.shn-input_line {
  position: relative;
  border-radius: 0;
  background: #fff;
  .shn-input__inner {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e8e8e8;
  }
  .shn-input__label {
    position: absolute;
    top: 33px;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 15px;
    text-align: center;
    color: #979797;
    transition: all 0.2s ease-in-out;
    cursor: text;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .shn-input__inner:focus + .shn-input__label {
    top: 5px;
    font-size: 13px;
    color: #c4c4c4;
  }
  .shn-input__label__focus {
    top: 5px;
    font-size: 13px;
    color: #c4c4c4;
  }
}
</style>