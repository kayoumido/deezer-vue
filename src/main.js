import { createApp, h, configureCompat } from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/style/normalize.css';

const app = createApp({
  render: () => h(App)
});
app.config.globalProperties.$axios = axios;
app.use(router);
app.use(store);

configureCompat({
  // default everything to Vue 2 behavior
  MODE: 2,
  WATCH_ARRAY: false
});

app.mount('#app');
