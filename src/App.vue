<template>
  <div id="app">
    <b-container fluid="" class="bv-example-row">
      <b-row>
        <b-col class="ex p-0 pb-1" >
          <router-link to="/">
          <img alt="Vue logo" src="./assets/logo.png">
          </router-link>
        </b-col>
      </b-row>
    </b-container>

    <router-view></router-view>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bv-example-row {
 background-color: #101010;
  height: 40px;
}

.ex {
  color: white;
}
</style>
