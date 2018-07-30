import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
import evlaluating from './modules/evlaluating'
import home from './modules/home'
import loginPage from './modules/loginPage'
import registerPage from './modules/registerPage'
import UserCenter from './modules/UserCenter'
import evaluatingCenter from './modules/evaluatingCenter'

//import actions from './actions'

Vue.use(Vuex);
Vue.use(Axios);
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
  activeTab: window.sessionStorage.getItem('activeTab'),
  autoLogin30days: false
}

const mutations = {
  //将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  //获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  },
  //激活的菜单
  ACTIVE: (state, value) => {
    state.activeTab = value
    window.sessionStorage.setItem('activeTab', value)
  },
  AUTOLOGIN: (state, value) => {
    state.autoLogin30days = value;
    if (state.autoLogin30days) {
      window.localStorage.setItem('token', state.token);
      window.localStorage.setItem('user', state.user);
    }else{
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
    }
  },
}
const actions = {}

const store = new Vuex.Store({
  modules: {
    evlaluating,
    home,
    loginPage,
    registerPage,
    UserCenter,
    evaluatingCenter
  },
  actions,
  state,
  mutations,
})
export default store;
