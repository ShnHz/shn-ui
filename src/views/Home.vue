<template>
  <div class="home">
    <!-- <Input :height="30" :margin="10" v-model="a" :type="'number'" /> -->
    <Statistic  :value="a"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Input from '@/components/shn-input.vue'
import Statistic from '@/components/shn-statistic.vue'

export default {
  name: 'home',
  components: {
    // Input,
    Statistic
  },
  data() {
    return {
      a: 1231235.11231212312
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
  margin: 0 auto;
}
</style>

