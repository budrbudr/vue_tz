<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
import Header from "@/components/global/Header";

export default {
  components: {Header},
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
