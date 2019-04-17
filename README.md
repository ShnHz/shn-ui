# shn-vue-ui
### Please
```
import 'shn-vue-ui/public/css/shn-vue-ui-base.css'
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run lib
```


***
# 组件
```
Input 输入框
```

参数 | 说明 |类型
---- | --- | ---
type                | 输入框类型	        |text/number/...
pattern             | 输入框样式	        |frame/line
value / v-model	    | 绑定值	            |string
placeholder  	    | 输入框占位文本	     |string
height              | 输入框高度             |number
disabled            | 禁用                   |boolean
animation           | 动画                   |boolean
mode                | 布局方式               |string(horizontal/vertical)
margin              | 边距                   |number

***
```
Statistic 统计数值
```

参数 | 说明 |类型
---- | --- | ---
value / v-model	    | 绑定值	             |number
intFontSize  	    | 整数位字体大小	      |number
decimalFontSize     | 小数位字体大小          |number
unitFontSize        | 单位字体大小           | number
unit                | 单位标识符             |string
groupSeparator      | 是否开启千分位          |boolean
decimalNum          | 保留几位小数            |number
intFontClass  	    | 整数位自定义类名	      |string
decimalFontClass    | 小数位自定义类名        |string
unitFontClass       | 单位自定义类名          |string
percent             | 百分比                 |boolean