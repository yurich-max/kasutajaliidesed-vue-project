<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {Header}
  ,
  validations: {
    // my validations definition
  },
  methods: {

  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  min-height: 100vh;
  overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6 {
  color: white;
}
li {
  list-style: none;
}

.success {
  color: #087f4c;
}
.error {
  color: red;
}

.btn-block {
  background-image: linear-gradient(0deg, #35000e, #e50000, #e50000, #e50000);
  background-color: #e50000;
  text-shadow: 0 2px rgba(255, 111, 245, 0.85);
  color: white;
  padding: 12px 1px;
  font-size: 18px;
  border-radius: 10px;
  border: none #0b0b0b;
}
</style>
