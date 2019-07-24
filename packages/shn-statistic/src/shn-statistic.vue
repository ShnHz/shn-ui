<template>
  <!-- 
    Input Attributes

      value / v-model	    | 绑定值	                       number/string
      prefixFontSize      | 前缀字体大小                    number
      intFontSize  	      | 整数位字体大小	                number
      decimalFontSize     | 小数位字体大小                  number
      unitFontSize        | 单位字体大小                    number
      unit                | 单位标识符                      string
      prefix              | 前缀标识符                      string
      groupSeparator      | 是否开启千分位                  boolean
      decimalNum          | 保留几位小数                    number
      prefixFontClass     | 前缀标识符自定义类名             string
      intFontClass  	    | 整数位自定义类名	              string
      decimalFontClass    | 小数位自定义类名                string
      unitFontClass       | 单位自定义类名                  string
      percent             | 百分比                         boolean

  -->
  <span class="shn-statistic">
    <span
      :class="prefixFontClass"
      :style="{FontSize:prefixFontSize + 'px'}"
      class="prefix"
      v-html="prefix"
    ></span>
    <span :class="intFontClass" :style="{fontSize:intFontSize + 'px'}" class="integer">{{integer}}</span>
    <span
      :class="decimalFontClass"
      :style="{fontSize:decimalFontSize + 'px'}"
      class="decimal"
    >{{decimal}}</span>
    <span :class="unitFontClass" :style="{fontSize:unitFontSize + 'px'}" class="unit" v-html="unit"></span>
  </span>
</template>
<script>
export default {
  name: 'shn-statistic',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    intFontSize: {
      type: Number,
      default: 24
    },
    decimalFontSize: {
      type: Number,
      default: 16
    },
    prefixFontSize: {
      type: Number,
      default: 18
    },
    unitFontSize: {
      type: Number,
      default: 16
    },
    unit: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    groupSeparator: {
      type: Boolean,
      default: true
    },
    decimalNum: {
      type: Number,
      default: 2
    },
    intFontClass: {
      type: String,
      default: ''
    },
    prefixFontClass: {
      type: String,
      default: ''
    },
    decimalFontClass: {
      type: String,
      default: ''
    },
    unitFontClass: {
      type: String,
      default: ''
    },
    percent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    integer() {
      let num
      let value = this.value
      if (typeof value === 'string') {
        value = parseFloat(value)
      }

      if (this.percent) {
        num = parseInt(value * 100).toString()
      } else {
        num = parseInt(value).toString()
      }
      if (this.groupSeparator) {
        let reg = /(?=(\B\d{3})+$)/g
        num = num.replace(reg, ',')
      }

      return num
    },
    decimal() {
      let num
      let value = this.value
      if (typeof value === 'string') {
        value = parseFloat(value)
      }
      if (this.percent) {
        num = (value * 100).toFixed(this.decimalNum).toString()
      } else {
        num = value.toFixed(this.decimalNum).toString()
      }
      if (num.indexOf('.') > -1) {
        let data = num.split('.')
        return '.' + data[1]
      }

      return null
    }
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-statistic {
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  list-style: none;
  font-variant: tabular-nums;
}
</style>
