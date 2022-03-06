<template>
  <grid-container>
    <ArmyTimeLeft id="army-graph"/>
  </grid-container>
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

<style>
#army-graph {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
