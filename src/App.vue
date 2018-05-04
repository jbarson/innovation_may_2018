<template>
  <!-- <div id="app">
    <Sliders />
  </div> -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sliders from './components/Sliders.vue'
import router from './router'

export default {
  name: 'app',
  router: router,
}
</script>

<style>

</style>
