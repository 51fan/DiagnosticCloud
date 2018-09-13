// initial state
const state = {
  evlaluating: {
    showevaluatingPage: false,
    currentEvaluationName: "",
    currentEvaluationId: "",
    currentEvaluationIdx: ""
  },
  answerPage: {
    chooseObj: "",
    expertObj: "",
  },
  evaluatingPage: {
    evaluationStart: true,
    evaluationfinished: false,
    currentIndex: 1,
    questionIndex: 1,
    isShowReport: false,
    seeReport: false,
    reportParm: {
      name: "",
      evaluationId: "",
      enterpriseId: "",
      idx: "",
      datas: Object
    }
  },
  evaluationCard: {
    showErrAlert: false,
    questionsData: Object
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
  currentEvaluationIdx: state => {
    return state.evlaluating.currentEvaluationIdx
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
  getCurrentEvaluationIdx(state, value) {
    state.evlaluating.currentEvaluationIdx = value
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
  changeEvaluationStart(state, value) {
    state.evaluatingPage.evaluationStart = value
  },
  getCurrentIndex(state, value) {
    state.evaluatingPage.currentIndex = value
  },
  getQuestionIndex(state, value) {
    state.evaluatingPage.questionIndex = value
  },
  changeIsShowReport(state, value) {
    state.evaluatingPage.isShowReport = value
  },
  changeEvaluationfinished(state, value) {
    state.evaluatingPage.evaluationfinished = value
  },
  changeSeeReport(state, value) {
    state.evaluatingPage.seeReport = value
  },
  changeShowErrAlert(state, value) {
    state.evaluationCard.showErrAlert = value
  },
  changeQuestions(state, value) {
    state.evaluationCard.questionsData = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
