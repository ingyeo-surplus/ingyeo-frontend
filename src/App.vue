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
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
* { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }
:root {
  --ingyeo-dark-green-100: #265902;
  --ingyeo-dark-green-80: #517A35;
  --ingyeo-dark-green-60: #7D9B67;
  --ingyeo-dark-green-40: #A8BD9A;
  --ingyeo-dark-green-20: #D4DECC;


  --ingyeo-medium-green-100: #558C03;
  --ingyeo-medium-green-80: #77A335;
  --ingyeo-medium-green-60: #99BA68;
  --ingyeo-medium-green-40: #BBD19A;
  --ingyeo-medium-green-20: #DDE8CD;


  --ingyeo-light-green-20: #E6F2CD;
}
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
a:hover{ text-decoration:underline; color: var(--ingyeo-dark-green-100) }
</style>
