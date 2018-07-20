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

const store = new Vuex.Store({
  modules: {
    evlaluating,
    home,
    loginPage,
    registerPage,
    UserCenter,
    evaluatingCenter
  },
  actions: {
  }
})
export default store;
