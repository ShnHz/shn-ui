<template>
  <div class="shn-url-param"></div>
</template>
<script>
export default {
  name: 'shn-url-param',
  props: {
    value: {
      type: Object,
      default: function() {
        return {}
      }
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {}
  },
  mounted() {
    let param = JSON.parse(JSON.stringify(this.value))
    for (let key in this.value) {
      if (this.$route.query[key] != undefined) {
        param[key] = JSON.parse(this.$route.query[key])
      }
    }

    this.$emit('input', param)
  },
  methods: {
    updateUrl() {
      let query_str = ''
      for (let key in this.value) {
        query_str += key + '=' + JSON.stringify(this.value[key]) + '&'
      }

      this.$router.push(this.$router.history.current.fullPath + '?' + query_str)

      this.callback()
    }
  }
}
</script>
<style lang="scss" scoped>
.shn-url-param {
  display: none;
}
</style>
