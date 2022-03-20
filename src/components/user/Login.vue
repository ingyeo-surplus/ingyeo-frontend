<template>
  <div id="login-container">
    <div>
      <div id="id-label" class="label">아이디</div>
      <input id="id-input" class="input-box" v-model="userId" placeholder="아이디를 입력하세요."/>
    </div>
    <div>
      <div id="password-label" class="label">비밀번호</div>
      <input id="password-input" class="input-box" type="password" v-model="password" placeholder="비밀번호를 입력하세요."/>
    </div>
    <button id="login-button" @click="onClickLogin">로그인하기</button>
    <div id="etc-container">
      <a id="find-account">아이디/비밀번호 찾기</a>
      <a id="register" @click="$router.push('/register/')">가입하기</a>
    </div>
  </div>
  

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  methods: {
    onClickLogin() {
      const userData = {
        user_id: this.userId,
        password: this.password,
      }
      this.$store.dispatch('user/login', userData)
    }
  }
}
</script>

<style scoped>
#login-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 140px;
  width: 528px;
  height: 341px;
  background: var(--ingyeo-light-green-20);
  border-style: solid;
  border-width: 2px;
  border-color: var(--ingyeo-dark-green-100);
}

.label {
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  left: 93px;
}
#id-label {
  top: 33px;
}
#password-label {
  top: 122px;
}

.input-box {
  position: absolute;
  width: 343px;
  height: 36px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: var(--ingyeo-dark-green-100);
  padding-left: 10px;
  padding-right: 10px;
  background: var(--ingyeo-dark-green-20);
  border-style: solid;
  border-width: 1px;
  border-color: var(--ingyeo-dark-green-40);
}

input::placeholder {
  color: var(--ingyeo-dark-green-60);
}

#id-input {
  top: 62px;
}

#password-input {
  top: 151px;
}

#login-button {
  position: absolute;
  width: 160px;
  height: 45px;
  left: 50%;
  transform: translateX(-50%);
  top: 218px;
  font-size: 14px;
  color: var(--ingyeo-dark-green-100);
  padding-left: 10px;
  padding-right: 10px;
  background: var(--ingyeo-medium-green-20);
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: var(--ingyeo-dark-green-60);

  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

#etc-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 282px;
  font-size: 12px;
  color: var(--ingyeo-dark-green-100);
}

#register {
  margin-left: 8px;

  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

#find-account {

  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
</style>
