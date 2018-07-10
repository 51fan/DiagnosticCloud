import Vue from 'vue'
import Vuex from 'vuex'
import evlaluating from './modules/evlaluating'
import home from './modules/home'
import loginPage from './modules/loginPage'
import registerPage from './modules/registerPage'
import UserCenter from './modules/UserCenter'

//import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    evlaluating,
    home,
    loginPage,
    registerPage,
    UserCenter
  },
  //actions: {actions}
})
export default store;
