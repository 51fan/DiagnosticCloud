// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store/index';
import VueMaterial from 'vue-material';
import Axios from "axios";
import VCharts from 'v-charts';
import Echarts from 'echarts';
// import Vuex from 'vuex';
// import 'babel-polyfill'
import ElementUI from 'element-ui';



import 'vue-material/dist/vue-material.css';
import "vue-material/dist/theme/default.css";
import 'vue-material/dist/theme/default-dark.css';
import 'vue-material/dist/theme/black-green-dark.css';
import 'vue-material/dist/theme/black-green-light.css';
import 'vuetify/dist/vuetify.min.css'
// import '~vuetify/src/stylus/main';
import 'element-ui/lib/theme-chalk/index.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import './assets/libs/icon.css';

const eventBus = new Vue();

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$echarts = Echarts;
Vue.use(VueMaterial);
Vue.use(Vuetify,{
  theme:{
    primary: "#009199"
  }
})
Vue.use(ElementUI);
Vue.use(VCharts);
// Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  data:{
    eventBus
  },
  components: { App },
  template: '<App/>'
})
