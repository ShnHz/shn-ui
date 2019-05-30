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
    for (let key in param) {
      if (this.$route.query[key] != undefined) {
        if (Array.isArray(param[key])) {
          param[key] = this.$route.query[key]
            .replace('[', '')
            .replace(']', '')
            .split(',')
        } else if (typeof param[key] == 'number') {
          param[key] = Number(this.$route.query[key])
        } else {
          param[key] = this.$route.query[key]
        }
      }
    }
    this.$emit('input', param)
  },
  methods: {
    updateUrl() {
      let param = JSON.parse(JSON.stringify(this.value))
      for (let key in param) {
        if (Array.isArray(param[key])) {
          param[key] = JSON.stringify(param[key])
        }
      }

      this.$router.push({
        path: this.$router.history.current.path,
        query: param
      })

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
