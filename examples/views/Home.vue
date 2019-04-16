<template>
  <div class="home">
    <shnInput :height="30" :margin="10" v-model="a" />
    <!-- <Statistic  :value="a"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Input from '@/components/shn-input.vue'
// import Statistic from '@/components/shn-statistic.vue'

export default {
  name: 'home',
  data() {
    return {
      a: 'asd'
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  position: relative;
  top: 200px;
  width: 600px;
  height: 300px;
  margin: 0 auto;
}
</style>

