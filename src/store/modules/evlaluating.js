// initial state
const state = {
  evlaluating: {
    showevaluatingPage: false,
    currentEvaluationName: "",
    currentEvaluationId: "",
  },
  answerPage: {
    chooseObj: "",
    expertObj: "",
  },
  evaluatingPage:{
    reportParm: {
      name: "",
      evaluationId: "",
      idx: "",
      datas: Object
    }
  }
}

// getters
const getters = {
  showevaluatingPage: state => {
    return state.evlaluating.showevaluatingPage
  },
  currentEvaluationName: state => {
    return state.evlaluating.currentEvaluationName
  },
  currentEvaluationId: state => {
    return state.evlaluating.currentEvaluationId
  },
  chooseObj: state => {
    return state.answerPage.chooseObj
  },
  expertObj: state => {
    return state.answerPage.expertObj
  },
  reportParm: state => {
    return state.evaluatingPage.reportParm
  },
}

const actions = {}

const mutations = {
  changeShowevaluatingPage(state, value) {
    state.evlaluating.showevaluatingPage = value
  },
  getCurrentEvaluationName(state, value) {
    state.evlaluating.currentEvaluationName = value
  },
  getCurrentEvaluationId(state, value) {
    state.evlaluating.currentEvaluationId = value
  },
  getCurrentChooseObj(state, value) {
    state.answerPage.chooseObj = value
  },
  getCurrentexpertObj(state, value) {
    state.answerPage.expertObj = value
  },
  getReportParm(state, value) {
    state.evaluatingPage.reportParm[value.key] = value.value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
