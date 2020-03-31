<template>
  <div id="app">
    <router-view />
    <shn-loading-page :loading="true" />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
