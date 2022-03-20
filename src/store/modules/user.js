import axios from "axios";

const state = () => ({
  userData: {},
  accessToken: '',
})

const getters = {
  username(state) {
    return state.userData.username;
  },
}

const mutations = {
  updateUserData(state, userData) {
    console.log('updating user data' + userData.username);
    state.userData = userData;
  },
  updateAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  }
}

const actions = {
  async login({ commit }, loginData) {
    axios.post('user/login/', loginData)
      .then((res) => {
        const userData = {
          user_id: res.data.user_id,
          username: res.data.username,
          introduction: res.data.introduction,
        }
        commit('updateUserData', userData);
        commit('updateAccessToken', res.data.token);
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
