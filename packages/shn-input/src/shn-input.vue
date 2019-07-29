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
      margin              | 边距                           number
      size                | 尺寸                           large/medium/small/mini

  -->
  <div
    :class="{'shn-input_frame':pattern === 'frame',
    'shn-input_line':pattern === 'line',
    'inline-block':mode === 'horizontal',
    'padding-top25':pattern === 'line' && animation
    }"
    :style="{margin:margin+'px'}"
    class="shn-input"
  >
    <input
      :disabled="disabled"
      :placeholder="placeholder_c"
      :style="{height:height+'px',lineHeight:height + 'px'}"
      :type="type"
      :value="value"
      @input="handleInput"
      class="shn-input__inner"
      ref="input"
    />
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
    margin: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'mini'
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
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      outline: none;
      border-color: #409eff;
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