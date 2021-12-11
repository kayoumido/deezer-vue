import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import router from '@/router';
import store from '@/store';

import './assets/style/normalize.css';

Vue.prototype.$axios = axios;
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
