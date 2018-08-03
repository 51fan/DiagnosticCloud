// initial state
const state = {
  menuVisible: false,
  loginPage: false,
  showLogin:false,
  showTabs: false,
  // showUserCenter:false,
  // showUserCenterButton:false,
  tabsActiveIndex:"1",
  showHomeBgImge:true
}

// getters
const getters = {
  loginPage: state => {
    return state.loginPage
  },
  menuVisible: state => {
    return state.menuVisible
  }
}

const actions = {}

const mutations = {
    showLogin(state, value) {
        state.showLogin = value;
    },
    showTabsFun(state, value){
        state.showTabs = value;
    },
    // showUserCenter(state, value) {
    //     state.showUserCenter = value;
    // },
    // showUserCenterButton(state, value) {
    //     state.showUserCenterButton = value;
    // },
    getTabsactiveIndex(state, value) {
      state.tabsActiveIndex = value;
    },
    changeShowHomeBgImge(state, value) {
      state.showHomeBgImge = value;
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
