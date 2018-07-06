// initial state
const state = {
  loginSuccess: false,
  showLoginPage:true
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
