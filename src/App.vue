<template>
  <div id="app">
  <router-view></router-view>
  <div v-if="$route.meta.keepAlive">
   <Footer></Footer>
   </div>
  </div>
</template>

<script>

import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
