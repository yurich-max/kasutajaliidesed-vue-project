<template>

  <div class="home">
    <Carousel></Carousel>
    <Menu></Menu>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
import Menu from '../components/Menu.vue'

// Import the EventBus.
import { EventBus } from '../event-bus.js';

// Listen for the i-got-clicked event and its payload.
EventBus.$on('i-got-clicked', menuName => {
  console.log(`Oh, that's nice. It's gotten ${menuName} clicks! :)`)
});
export default {
  name: 'Home',
  components: {
    Carousel,
    Menu
  },


}
</script>

<style scoped>
  home {
    min-height: 1100px;
  }
</style>
