<template>
  <div class="shn-el-demo-block">
    <h3 v-if="title != ''">{{title}}</h3>
    <div class="demo-block">
      <div class="source">
        <slot name="demo" />
      </div>
      <div class="demo-block-control"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shn-el-demo-block',
  props: {
    title: {
      type: String,
      default: ''
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
.shn-el-demo-block {
  h3 {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .demo-block {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .source {
      padding: 24px;
    }
    .demo-block-control {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
    }
  }
}
</style>
