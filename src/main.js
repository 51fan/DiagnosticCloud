// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index'
import VueMaterial from 'vue-material';
import Axios from "axios";
import VCharts from 'v-charts';
import Echarts from 'echarts';
// import Vuex from 'vuex';
import AmazeVue from 'amaze-vue';



import 'vue-material/dist/vue-material.css';
import "vue-material/dist/theme/default.css";
import 'vue-material/dist/theme/default-dark.css';
import 'vue-material/dist/theme/black-green-dark.css';
import 'vue-material/dist/theme/black-green-light.css';
import 'amaze-vue/dist/amaze-vue.css';


import './assets/libs/icon.css';
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$echarts = Echarts;
Vue.use(VueMaterial);
Vue.use(AmazeVue);
Vue.use(VCharts);
// Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
