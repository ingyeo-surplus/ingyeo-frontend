<template>
  <div class="main">
    <div id="wallpaper-container">
      <div id="wallpaper">
        <img src="../assets/wallpaper.jpg"/>
        <div id="main-title">Ingyeo</div>
      </div>
    </div>
    <grid-container>
      <div>
        <span style="background: black"/>
      </div>
    </grid-container>
  </div> 
</template>

<script>
import GridContainer from './containers/GridContainer.vue'
export default {
  name: 'Main',
  components: {
    GridContainer,
  },
}
</script>

<style scoped>
#wallpaper-container {
  width: 100%;
  background: black;
}
#wallpaper {
  position: relative;
  padding-top: 28.64%;  /* 1:1 ratio */
  overflow: hidden;
}
#wallpaper img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50); 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  margin: auto;
}
#main-title {
  position: absolute;
  font-size: 60px;
  bottom: 10%;
  left: 21%;
  color: white;
  text-shadow: 2px 4px 8px black;
}

@media (max-width: 768px) {
  #wallpaper {
    padding-top: 40%;
  }
  #main-title {
    font-size: 40px;
  }
}
</style>
