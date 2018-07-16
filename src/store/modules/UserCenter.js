
// initial state
const state = {
  modifyPassword: {
    // time: 0,
    // mobile: "",
    // email: "",
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
  getEnterpriseInfo(store,dispatch) {
    let $this = this,
      apikey = "",
      request = {
        email: store.rootState.loginPage.useremail,
        session_id: store.rootState.loginPage.session_id
      };
    Axios.$http
      .post("/IBUS/DAIG_SYS/getEnterpriseInfo", {
        apikey,
        request
      })
      .then(res => {
        console.log(res.data.return);
        // let model = res.data.return;
        // $this.enterpriseName = res.data.return.enterpriseName;
        // $this.enterpriseSName = res.data.return.shortName;
        // $this.imageSrc = res.data.return.logo;
        // $this.province = res.data.return.province;
        // $this.city = res.data.return.city;
        // $this.area = res.data.return.area;
        // $this.Industry1 = res.data.return.industryL1;
        // $this.companySize = res.data.return.scale;
        // $this.companyInput = res.data.return.income;
        // $this.OrganizationCode = res.data.return.enterpriseCode;
        // $this.$store.commit(
        //   "UserCenter/changeSelectProvince",
        //   res.data.return.province
        // );
        // $this.$store.commit(
        //   "UserCenter/changeSelectCity",
        //   res.data.return.city
        // );
        // $this.$store.commit(
        //   "UserCenter/changeSelectCounty",
        //   res.data.return.area
        // );
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const mutations = {
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
