<template>
  <div id="nav-bar" :class="{ deactivated: hideNavBar }">
    <img id="menu-sidebar" src="../../assets/menu-burger.svg" @click="onMenuClick"/>
    <img id="menu-logo" src="../../assets/logo.png" @click="$router.push('/')"/>
    <span id="menu-user-data" :class="{ deactivated: hideNavBar }" @click="onUserClick">{{ userDataString }}</span>
  </div>
  <div id="side-bar">
    <SideBar :showSideBar="showSideBar"/>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';

export default {
  name: 'Header',
  data() {
    return {
      hideNavBar: false, // nav-bar 숨길지 여부
      isLoggedIn: false, // 로그인 여부
      userDataString: '', // 유저 데이터 위치에 보여줄 내용
      showSideBar: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollListener); // 스크롤 감지 listener 추가
    if (!this.isLoggedIn) {
      this.userDataString = '로그인';
    } else {
      // TODO : user data 있을 시 username display
    }
  },
  methods: {
    onScrollListener() { // nav-bar 사이즈만큼 스크롤 되면 nav-bar 숨김
      if( window.scrollY < 60 ) this.hideNavBar = false; // 60px이 상단 바 사이즈
      else this.hideNavBar = true;
    },
    onUserClick() {
      if ( !this.isLoggedIn ) {
        this.$router.push('/login');
      } else {
        // TODO : user data 있을 시 mypage 혹은 추가 창 띄우기
      }
    },
    onMenuClick() {
      this.showSideBar = !this.showSideBar;
    }
  },
  components: {
    SideBar,
  }
}
</script>

<style scoped>
#nav-bar {
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  background: white;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 3;
  transition: all ease 200ms;
}
#nav-bar.deactivated {
  opacity: 0;
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
  cursor: pointer;
}
#menu-user-data {
  position: absolute;
  width: 70px;
  font-size: 16px;
  font-weight: bold;
  right: 30px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  cursor: pointer;
  color: var(--ingyeo-dark-green-80);
}
</style>
