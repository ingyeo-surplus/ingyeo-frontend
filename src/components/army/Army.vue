<template>
  <div>
    <grid-container>
      <div id="title">복무 기간</div>
      <div id="div-line"/>
      <ArmyTimeLeft id="army-graph"/>
    </grid-container>
  </div>
</template>

<script>
import GridContainer from '../containers/GridContainer.vue';
import ArmyTimeLeft from './ArmyTimeLeft.vue';

export default {
  name: 'Army',
  components: {
    ArmyTimeLeft,
    GridContainer,
  }
}
</script>

<style scoped>
#title {
  margin-top: 55px;
  margin-left: 92px;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
  color: var(--ingyeo-dark-green-100);
}
#div-line {
  width: 100%;
  height: 1px;
  margin-top: 45px;
  margin-bottom: 20px;
  background: var(--ingyeo-dark-green-60);
}
#army-graph {
  width: 100%;
}
</style>
