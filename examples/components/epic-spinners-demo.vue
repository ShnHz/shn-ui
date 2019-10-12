<template>
  <div class="content-box">
    <shn-backtop :visibilityHeight="300" />

    <h2 class="demo-title">epic-spinners Loading素材</h2>
    <p class="demo-introduction">纯加载展示svg素材若干,封装为组件易与引入与使用,可方便调节尺寸,颜色,速度等参数每个样式单独导入项目以减少打包尺寸。</p>

    <div class="demo-tip">
      <p>该插件的作者是epicmaxco，附上github地址</p>
      <p>
        <a
          href="https://github.com/epicmaxco/epic-spinners"
          target="_blank"
        >https://github.com/epicmaxco/epic-spinners</a>
        <img
          alt
          class="github-img"
          href="https://github.com/epicmaxco/epic-spinners"
          src="https://img.shields.io/github/stars/epicmaxco/epic-spinners.svg?style=social&label=Star&maxAge=2592000"
        />
      </p>
    </div>

    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm install --save epic-spinners</p>
      <shn-divider />
      <p>组件内使用</p>
      <p>import {AtomSpinner,...} from 'epic-spinners'</p>
      <p>components: {</p>
      <p style="padding-left:10px">AtomSpinner</p>
      <p>}</p>
    </div>

    <!-- 基础用法DEMO -->
    <shn-el-demo-block :height="483" :title="'基础用法'" id="epic-spinners-simple">
      <template v-slot:demo>
        <div class="epic-spinners-simple-demo clearfloat">
          <atom-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <flower-spinner :animation-duration="2500" :size="100" color="#409EFF" />
          <pixel-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <hollow-dots-spinner
            :animation-duration="1000"
            :dot-size="15"
            :dots-num="3"
            color="#409EFF"
          />
          <intersecting-circles-spinner :animation-duration="1200" :size="100" color="#409EFF" />
          <orbit-spinner :animation-duration="1200" :size="100" color="#409EFF" />
          <radar-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <scaling-squares-spinner :animation-duration="1250" :size="100" color="#409EFF" />
          <half-circle-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <trinity-rings-spinner :animation-duration="1500" :size="100" color="#409EFF" />
          <fulfilling-square-spinner :animation-duration="4000" :size="100" color="#409EFF" />
          <circles-to-rhombuses-spinner
            :animation-duration="1200"
            :circle-size="16"
            :circles-num="3"
            color="#409EFF"
            style="width:100px"
          />
          <semipolar-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <self-building-square-spinner :animation-duration="6000" :size="100" color="#409EFF" />
          <swapping-squares-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <fulfilling-bouncing-circle-spinner
            :animation-duration="4000"
            :size="100"
            color="#409EFF"
          />
          <fingerprint-spinner :animation-duration="1500" :size="100" color="#409EFF" />
          <spring-spinner :animation-duration="3000" :size="100" color="#409EFF" />
          <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="25" color="#409EFF" />
          <breeding-rhombus-spinner :animation-duration="2000" :size="100" color="#409EFF" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </shn-el-demo-block>
  </div>
</template>

<script>
import {
  FlowerSpinner,
  AtomSpinner,
  PixelSpinner,
  HollowDotsSpinner,
  IntersectingCirclesSpinner,
  OrbitSpinner,
  RadarSpinner,
  ScalingSquaresSpinner,
  HalfCircleSpinner,
  TrinityRingsSpinner,
  FulfillingSquareSpinner,
  CirclesToRhombusesSpinner,
  SemipolarSpinner,
  SelfBuildingSquareSpinner,
  SwappingSquaresSpinner,
  FulfillingBouncingCircleSpinner,
  FingerprintSpinner,
  SpringSpinner,
  LoopingRhombusesSpinner,
  BreedingRhombusSpinner
} from 'epic-spinners'

export default {
  name: 'epic-spinners-demo',
  components: {
    FlowerSpinner,
    AtomSpinner,
    PixelSpinner,
    HollowDotsSpinner,
    IntersectingCirclesSpinner,
    OrbitSpinner,
    RadarSpinner,
    ScalingSquaresSpinner,
    HalfCircleSpinner,
    TrinityRingsSpinner,
    FulfillingSquareSpinner,
    CirclesToRhombusesSpinner,
    SemipolarSpinner,
    SelfBuildingSquareSpinner,
    SwappingSquaresSpinner,
    FulfillingBouncingCircleSpinner,
    FingerprintSpinner,
    SpringSpinner,
    LoopingRhombusesSpinner,
    BreedingRhombusSpinner
  },
  data() {
    return {
      simple: {
        code: {
          html: `
          <atom-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <flower-spinner :animation-duration="2500" :size="100" color="#409EFF" />
          <pixel-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <hollow-dots-spinner :animation-duration="1000" :dot-size="15" :dots-num="3" color="#409EFF" />
          <intersecting-circles-spinner :animation-duration="1200" :size="100" color="#409EFF" />
          <orbit-spinner :animation-duration="1200" :size="100" color="#409EFF" />
          <radar-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <scaling-squares-spinner :animation-duration="1250" :size="100" color="#409EFF" />
          <half-circle-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <trinity-rings-spinner :animation-duration="1500" :size="100" color="#409EFF" />
          <fulfilling-square-spinner :animation-duration="4000" :size="100" color="#409EFF" />
          <circles-to-rhombuses-spinner :animation-duration="1200" :circle-size="16" :circles-num="3" color="#409EFF" style="width:100px" />
          <semipolar-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          <self-building-square-spinner :animation-duration="6000" :size="100" color="#409EFF" />
          <swapping-squares-spinner :animation-duration="1000" :size="100" color="#409EFF" />
          <fulfilling-bouncing-circle-spinner :animation-duration="4000" :size="100" color="#409EFF" />
          <fingerprint-spinner :animation-duration="1500" :size="100" color="#409EFF" />
          <spring-spinner :animation-duration="3000" :size="100" color="#409EFF" />
          <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="25" color="#409EFF" />
          <breeding-rhombus-spinner :animation-duration="2000" :size="100" color="#409EFF" />
          `
        }
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.epic-spinners-simple-demo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > div {
    float: left;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

