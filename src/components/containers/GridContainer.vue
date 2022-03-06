<template>
  <div class="grid-container">
    <div></div>
    <slot></slot>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'GridContainer',
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1080px 1fr;
}
@media (max-width: 1080px) {
  .grid-container {
    display: grid;
    grid-template-columns: 0px 1fr 0px;
  }
}
</style>
