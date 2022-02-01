<template>
  <NavBar/>
  <div id="app-margin"/>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/global/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
}
#app-margin {
  height: 60px;
}
</style>
