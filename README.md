# shn-vue-ui

### DEMO

```
[https://shnhz.github.io/shn-ui/](https://shnhz.github.io/shn-ui/)
```

### GitHub
```
[https://github.com/ShnHz/shn-ui](https://github.com/ShnHz/shn-ui)
```

### Install
```
npm i shn-vue-ui
```

### Compiles and hot-reloads for development
```
npm run serve
```


***
# 组件
```
Input

<shn-input /> 输入框
```
参数 | 说明 |类型|默认值
---- | --- | --- | ---
type                | 输入框类型	        |text/number/... |text
pattern             | 输入框样式	        |frame/line |line
value / v-model	    | 绑定值	            |string |----
placeholder  	    | 输入框占位文本	     |string |请输入内容
height              | 输入框高度             |number  |40
disabled            | 禁用                   |boolean|false
animation           | 动画                   |boolean|true
mode                | 布局方式               |horizontal/vertical |horizontal
margin              | 边距                   |number|0

***
```
Statistic 

<Statistic /> 统计数值
```

参数 | 说明 |类型 | 默认值
---- | --- | --- | ---
value / v-model	    | 绑定值	             |number|0
intFontSize  	    | 整数位字体大小	      |number|24
decimalFontSize     | 小数位字体大小          |number|16
unitFontSize        | 单位字体大小           | number|16
unit                | 单位标识符             |string|----
groupSeparator      | 是否开启千分位          |boolean|true
decimalNum          | 保留几位小数            |number|2
intFontClass  	    | 整数位自定义类名	      |string|----
decimalFontClass    | 小数位自定义类名        |string|----
unitFontClass       | 单位自定义类名          |string|----
percent             | 百分比                 |boolean|false

***
```
ImgCard 

<shn-img-card /> 图片卡片
```

参数 | 说明 |类型 | 默认值
---- | --- | --- | ---
margin	            | 间距	                 | string|0
imgBoxHeight	    | 图片盒子高度	          | number|200
title               | 标题                    |string|----
slot#img            | 图片slot                | ----|----
slot#one            | one slot                | ----|----
slot#two            | two slot                | ----|----

***
```
Collapse 

<shn-collapse /> 折叠动画盒子
```