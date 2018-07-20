// initial state
const state = {
  useremail:""
}

// getters
const getters = {}

const actions = {}

const mutations = {
  changeUseremail(state, value) {
    state.useremail = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
