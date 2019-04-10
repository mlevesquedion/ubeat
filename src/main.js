// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Toasted from 'vue-toasted';
import Fragment from 'vue-fragment';
import App from './App';
import router from './router';
import userStore from './userStore';

Vue.config.productionTip = false;

Vue.use(Fragment.Plugin);

Vue.use(Toasted, {
  position: 'bottom-left',
  duration: 2000
});

Vue.toasted.register('ubeat-success', message => message);
Vue.toasted.register('ubeat-error', message => message);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: userStore,
  router,
  template: '<App/>',
  components: { App }
});
