import Vue from 'vue'
import Vuex from 'vuex'
import evlaluating from './modules/evlaluating'
import home from './modules/home'
import loginPage from './modules/loginPage'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    evlaluating,
    home,
    loginPage
  }
})
export default store;
