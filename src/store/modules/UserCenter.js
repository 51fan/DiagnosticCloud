// initial state
const state = {
  modifyPassword: {
    // time: 0,
    mobile: "",
    email: "",
    checkWay: "email",
    VerificationCode: "",
    showVCEmpty: false,
    showVCError: false,
    VCHasMessages: false,
    passwordFHasMessages: false,
    passwordSHasMessages: false,
    currentStep1: true,
    currentStep2: false,
    currentStep3: false,
    passwordFirst: "",
    passwordSecond: "",
    showPasswordfEmpty: false,
    showPasswordfError: false,
    showPasswordsEmpty: false,
    showPasswordsError: false
  },
  enterpriseInfo: {},
  personalInfo: {}
}

// getters
const getters = {}

const actions = {}

const mutations = {
//   changePasswordTime(state, value) {
//     state.modifyPassword.time = value;
//   },
  changePasswordmobile(state, value) {
    state.modifyPassword.mobile = value;
  },
  changePasswordemail(state, value) {
    state.modifyPassword.email = value;
  },
  changePasswordcheckWay(state, value) {
    state.modifyPassword.checkWay = value;
  },
  changePasswordVerificationCode(state, value) {
    state.modifyPassword.VerificationCode = value;
  },
  changePasswordshowVCEmpty(state, value) {
    state.modifyPassword.showVCEmpty = value;
  },
  changePasswordshowVCError(state, value) {
    state.modifyPassword.showVCError = value;
  },
  changePasswordVCHasMessages(state, value) {
    state.modifyPassword.VCHasMessages = value;
  },
  changePasswordpasswordFHasMessages(state, value) {
    state.modifyPassword.passwordFHasMessages = value;
  },
  changePasswordpasswordSHasMessages(state, value) {
    state.modifyPassword.passwordSHasMessages = value;
  },
  changePasswordcurrentStep1(state, value) {
    state.modifyPassword.currentStep1 = value;
  },
  changePasswordcurrentStep2(state, value) {
    state.modifyPassword.currentStep2 = value;
  },
  changePasswordcurrentStep3(state, value) {
    state.modifyPassword.currentStep3 = value;
  },
  changePasswordpasswordFirst(state, value) {
    state.modifyPassword.passwordFirst = value;
  },
  changePasswordpasswordSecond(state, value) {
    state.modifyPassword.passwordSecond = value;
  },
  changePasswordshowPasswordfEmpty(state, value) {
    state.modifyPassword.showPasswordfEmpty = value;
  },
  changePasswordshowPasswordfError(state, value) {
    state.modifyPassword.showPasswordfError = value;
  },
  changePasswordshowPasswordsEmpty(state, value) {
    state.modifyPassword.showPasswordsEmpty = value;
  },
  changePasswordshowPasswordsError(state, value) {
    state.modifyPassword.showPasswordsError = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
