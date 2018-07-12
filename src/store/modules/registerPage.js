// initial state
const state = {
  useremail:""
}

// getters
const getters = {}

const actions = {}

const mutations = {
  changeUseremail(state, value) {
    state.loginSuccess = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
