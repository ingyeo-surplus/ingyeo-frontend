<template>
  <div id="nav-bar" :class="{ deactivated : hideNavBar }">
    <img id="menu-sidebar" src="../../assets/menu-burger.svg"/>
    <img id="menu-logo" src="../../assets/logo.png" :class="{ deactivated : hideNavBar }"/>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      hideNavBar: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollListener);
  },
  methods: {
    onScrollListener() {
      if( window.scrollY < 60 ) this.hideNavBar = false;
      else this.hideNavBar = true;
    },
  },
}
</script>

<style scoped>
#nav-bar {
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  background: white;
  height: 60px;
  width: 100%;
  position: fixed;
  transition: all ease 200ms;
}
#nav-bar.deactivated {
  background: transparent;
  box-shadow: none;
  transition: all ease 200ms;
}
#menu-sidebar {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 20px;
  top:50%;
  transform: translateY(-50%);
}
#menu-logo {
  position: absolute;
  width: 50px;
  height: 50px;
  opacity: 1;
  object-fit: cover;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all ease 200ms;
}
#menu-logo.deactivated {
  opacity: 0;
  transition: all ease 200ms;
}
</style>