// initial state
const state = {
  menuVisible: false,
  loginPage: false,
  showLogin:true,
  showTabs: true,
  showUserCenter:false,
  showUserCenterButton:false
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
    showLogin(state) {
        state.showLogin = !state.showLogin;
    },
    showTabsFun(state){
        state.showTabs = !state.showTabs;
    },
    showUserCenter(state){
        state.showUserCenter = !state.showUserCenter;
    },
    showUserCenterButton(state) {
        state.showUserCenterButton = !state.showUserCenterButton;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
