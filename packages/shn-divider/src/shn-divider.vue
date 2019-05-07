<template>
  <div
    :class="{'shn-divider-horizontal':direction == 'horizontal','shn-divider-vertical':direction == 'vertical','ant-divider-with-text':$slots.default,'ant-divider-with-text-left':contentPosition == 'left','ant-divider-with-text-right':contentPosition == 'right'}"
    class="shn-divider"
  >
    <span class="shn-divider-inner-text" v-if="direction == 'horizontal' && $slots.default">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'shn-divider',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    contentPosition: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.shn-divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  background: #e8e8e8;
}
.shn-divider-horizontal {
  display: block;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: 1px;
  margin: 24px 0;
  &.ant-divider-with-text {
    margin: 16px 0;
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;
    font-weight: 500;
    font-size: 14px;
    color: #777;
    &.ant-divider-with-text-left {
      &::before {
        top: 50%;
        width: 5%;
      }
      &::after {
        top: 50%;
        width: 95%;
      }
    }
    &.ant-divider-with-text-right {
      &::before {
        top: 50%;
        width: 95%;
      }
      &::after {
        top: 50%;
        width: 5%;
      }
    }
  }
  &.ant-divider-with-text::after,
  &.ant-divider-with-text::before {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8e8e8;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }
}
.shn-divider-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  width: 1px;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
}
.shn-divider-inner-text {
  display: inline-block;
  padding: 0 24px;
}
</style>
