<template>
  <div id="side-bar" :class="{ showSideBar: showSideBar }">
    <div id="container">
      <img id="menu-logo" src="../../assets/logo.png" @click="$router.push('/')"/>
      <div id="div-line"/>
      <div id="margin"/>
      <div id="menu-board" class="menu-item" @click="menuClickNotCreated()">
        <img class="menu-item-logo" src="../../assets/menu_board.svg"/>
        <div class="menu-item-text">게시판</div> 
      </div>
      <div id="menu-wiki" class="menu-item" @click="menuClickNotCreated()">
        <img class="menu-item-logo" src="../../assets/menu_wiki.svg"/>
        <div class="menu-item-text">위키</div> 
      </div>
      <div id="menu-abyss" class="menu-item" @click="menuClickNotCreated()">
        <img class="menu-item-logo" src="../../assets/menu_abyss.svg"/>
        <div class="menu-item-text">칼바람 나락</div> 
      </div>
      <div id="menu-album" class="menu-item" @click="menuClickNotCreated()">
        <img class="menu-item-logo" src="../../assets/menu_album.svg"/>
        <div class="menu-item-text">앨범</div> 
      </div>
      <div id="margin"/>
      <div id="div-line"/>
      <div id="margin"/>
      <div id="menu-army" class="menu-item" @click="$router.push('/army/'); menuClickEmit();">
        <img class="menu-item-logo" src="../../assets/menu_army.svg"/>
        <div class="menu-item-text">복무 기간</div> 
      </div><div id="menu-chat" class="menu-item" @click="menuClickNotCreated()">
        <img class="menu-item-logo" src="../../assets/menu_chat.svg"/>
        <div class="menu-item-text">채팅</div> 
      </div>
      <div id="margin"/>
      <div id="div-line"/>
      <div id="bottom-margin"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    showSideBar: Boolean,
  },
  methods: {
    menuClickEmit() {
      this.$emit('menuClick');
    },
    menuClickNotCreated() {
      this.$toast.error('Not Yet Implemented!');
      this.menuClickEmit();
    }
  }
}
</script>

<style scoped>
#side-bar {
  position: fixed;
  top: 120px;
  width: 280px;
  height: 480px;
  left: -280px;
  z-index: 1;
  transition: all ease 300ms;
}
#side-bar.showSideBar {
  position: fixed;
  top: 120px;
  width: 280px;
  height: 480px;
  left: 0px;
  transition: all ease 300ms;
}
#container {
  width: 216px;
  border-radius: 0px 8px 8px 0px;
  height: 430px;
  top: 25px;
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
#menu-logo {
  height: 52px;
  left: 50%;
  margin-top: 9px;
  margin-bottom: 9px;
  cursor: pointer;
}
#div-line {
  width: 100%;
  height: 1px;
  background: var(--ingyeo-dark-green-40);
}
#margin {
  width: 100%;
  height: 10px;
}
.menu-item {
  position: relative;
  width: 100%;
  height: 45px;
  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.menu-item-logo {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  left: 30px;
}
.menu-item-text {
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  left: 68px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
#bottom-margin {
  width: 100%;
  height: 50px;
  background: var(--ingyeo-dark-green-40);
  border-radius: 0px 0px 8px 0px;
}
</style>
