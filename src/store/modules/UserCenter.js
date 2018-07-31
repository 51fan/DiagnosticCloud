
// initial state
const state = {
  modifyPassword: {
    // time: 0,
    // mobile: "",
    // email: "",
    checkWay: "email",
    VerificationCode: "",
  },
  enterpriseInfo: {
    showCityPicker: false,
    selectProvince: "",
    selectCity: "",
    selectCounty: ""
  },
  personalInfo: {}
}

// getters
const getters = {}

const actions = {
}

const mutations = {
  changePasswordcheckWay(state, value) {
    state.modifyPassword.checkWay = value;
  },
  changePasswordVerificationCode(state, value) {
    state.modifyPassword.VerificationCode = value;
  },
  changeShowCityPicker(state, value) {
    state.enterpriseInfo.showCityPicker = value;
  },
  changeSelectProvince(state, value) {
    state.enterpriseInfo.selectProvince = value;
  },
  changeSelectCity(state, value) {
    state.enterpriseInfo.selectCity = value;
  },
  changeSelectCounty(state, value) {
    state.enterpriseInfo.selectCounty = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
