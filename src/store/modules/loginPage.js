// initial state
const state = {
  loginSuccess: false
}

// getters
const getters = {}

const actions = {}

const mutations = {
  changeLoginState(state, value) {
    state.loginSuccess = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
