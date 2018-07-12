// initial state
const state = {
  loginSuccess: false,
  showLoginPage: true,
  firstLogin: false,
  session_id:""
}

// getters
const getters = {}

const actions = {}

const mutations = {
  changeLoginState(state, value) {
    state.loginSuccess = value;
  },
  changeLoginShowState(state, value) {
    state.showLoginPage = value;
  },
  changefirstLogin(state, value) {
    state.firstLogin = value;
  },
  getSession_id(state, value) {
    state.session_id = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
