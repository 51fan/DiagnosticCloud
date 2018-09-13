// initial state
const state = {
  useremail:"",
  usermobile: "",
}

// getters
const getters = {}

const actions = {}

const mutations = {
  changeUseremail(state, value) {
    state.useremail = value;
  },
  changeUsermobile(state, value) {
    state.usermobile = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
