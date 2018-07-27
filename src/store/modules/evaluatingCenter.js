// initial state
const state = {
  activeName: "first",
  showCompletedReport: false
}

// getters
const getters = {

}

const actions = {}

const mutations = {
  getActiveName(state, value) {
    state.activeName = value
  },
  changeShowCompletedReport(state, value) {
    state.showCompletedReport = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
