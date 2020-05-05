<template>
  <div class="home">
    <Carousel></Carousel>
    <img alt="Vue logo" src="../assets/vue-logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel
  }
}
</script>

<style scoped>
</style>
