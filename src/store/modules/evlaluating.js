// initial state
const state = {
  showevaluatingPage: false
}

// getters
const getters = {
  showevaluatingPage: state => {
    return state.showevaluatingPage
  },
}

const actions = {}

const mutations = {
  changeShowevaluatingPage(state, value) {
    state.showevaluatingPage = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
