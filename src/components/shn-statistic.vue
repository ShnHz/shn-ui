<template>
  <!-- 
    Input Attributes

      value / v-model	    | 绑定值	                       number
      intFontSize  	      | 整数位字体大小	                number
      decimalFontSize     | 小数位字体大小                  number
      unitFontSize        | 单位字体大小                    number
      unit                | 单位标识符                      string
      groupSeparator      | 是否开启千分位                  boolean
      decimalNum          | 保留几位小数                    number
      intFontClass  	    | 整数位自定义类名	              string
      decimalFontClass    | 小数位自定义类名                string
      unitFontClass       | 单位自定义类名                  string
      percent             | 百分比                         boolean

  -->
  <span class="shn-statistic">
    <span :class="intFontClass" :style="{fontSize:intFontSize + 'px'}" class="integer">{{integer}}</span>
    <span
      :class="decimalFontClass"
      :style="{fontSize:decimalFontSize + 'px'}"
      class="decimal"
    >{{decimal}}</span>
    <span :class="unitFontClass" :style="{fontSize:unitFontSize + 'px'}" class="unit">{{unit}}</span>
  </span>
</template>
<script>
export default {
  name: 'shnInput',
  props: {
    value: {
      type: Number,
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
    unitFontSize: {
      type: Number,
      default: 16
    },
    unit: {
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
      if (this.percent) {
        num = parseInt(this.value * 100).toString()
      } else {
        num = parseInt(this.value).toString()
      }
      if (this.groupSeparator) {
        let reg = /(?=(\B\d{3})+$)/g
        num = num.replace(reg, ',')
      }

      return num
    },
    decimal() {
      let num
      if (this.percent) {
        num = (this.value * 100).toFixed(this.decimalNum).toString()
      } else {
        num = this.value.toFixed(this.decimalNum).toString()
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
