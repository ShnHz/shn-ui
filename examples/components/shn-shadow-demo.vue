<template>
  <div class="content-box">
    <h2 class="demo-title">Shadow 投影</h2>
    <p class="demo-introduction">我们提供了以下几种投影样式，以供选择。</p>

    <!-- 基础用法DEMO -->
    <div class="simple-box">
      <h3 class="demo-table-title">基础用法</h3>
      <div class="box box-1"></div>
      <p
        class="demo-introduction"
      >基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</p>
      <div class="box box-2"></div>
      <p class="demo-introduction">浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)</p>
      <div class="box box-3"></div>
      <p class="demo-introduction">深色投影 box-shadow: 0 2px 8px rgba(0,0,0,0.2)</p>
    </div>

    <!-- 曲线投影DEMO -->
    <shn-el-demo-block :height="543" :title="'曲线投影'" id="shadow-curve">
      <template v-slot:demo>
        <div class="box box-curve"></div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(curve.code.html)}}</code>
        <code class="css">{{fCode(curve.code.css)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 翘边投影DEMO -->
    <shn-el-demo-block :height="816" :title="'翘边投影'" id="sharp-edge-curve">
      <template v-slot:demo>
        <div class="box box-sharp-edge"></div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(sharpEdge.code.html)}}</code>
        <code class="css">{{fCode(sharpEdge.code.css)}}</code>
      </template>
    </shn-el-demo-block>
  </div>
</template>

<script>
export default {
  name: 'shn-shadow-demo',
  data() {
    return {
      curve: {
        code: {
          html: `
          <div class="box box-curve"></div>
          `,
          css: `
          .box{
            width: 400px;
            height: 150px;
          }

          .box-curve{
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            background: #fff;
            &::after, &::before{
              z-index: -1;
              content: '';
              position: absolute;
              top: 50%;
              bottom: 0px;
              left: 20px;
              right: 20px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
              border-radius: 100px/10px;
            }
          }
          `
        }
      },
      sharpEdge: {
        code: {
          html: `
          <div class="box box-sharp-edge"></div>
          `,
          css: `
          .box{
            width: 400px;
            height: 150px;
          }

          .box-sharp-edge {
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            background: #fff;
            &::after{
              z-index: -1;
              content: '';
              position: absolute;
              background: transparent;
              top: 50%;
              bottom: 12px;
              left: 10px;
              right: 10px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
              transform: skew(12deg) rotate(4deg)
            }
            &::before{
              z-index: -1;
              content: '';
              position: absolute;
              background: transparent;
              top: 50%;
              bottom: 12px;
              left: 10px;
              right: 10px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
              transform: skew(-12deg) rotate(-4deg)
            }
          }
          `
        }
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.box {
  width: 400px;
  height: 150px;
}
.simple-box {
  .box-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .box-2 {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .box-3 {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
}

.box-curve {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  &::after,
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0px;
    left: 20px;
    right: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 100px/10px;
  }
}

.box-sharp-edge {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    background: transparent;
    top: 50%;
    bottom: 12px;
    left: 10px;
    right: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: skew(12deg) rotate(4deg);
  }
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    background: transparent;
    top: 50%;
    bottom: 12px;
    left: 10px;
    right: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: skew(-12deg) rotate(-4deg);
  }
}
</style>

