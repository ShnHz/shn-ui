<template>
  <div class="shn-input">
    <input :placeholder="placeholder" type="text">
  </div>
</template>
<script>
export default {
  name: 'shnInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
