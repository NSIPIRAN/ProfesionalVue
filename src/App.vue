<template>
  <div id="app">
    <MHeader></MHeader>
      <router-view to="Home"></router-view>
    <MFooter ></MFooter>
  </div>
</template>

<script>

import MFooter from './components/layout/footer.vue'
import MHeader from './components/layout/header.vue'



export default {
  name: 'app',
  components: { MFooter, MHeader},
  }
</script>
<style lang="scss">
  @import "./scss/main.scss";


</style>
