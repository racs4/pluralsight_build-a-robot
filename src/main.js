import Vue from 'vue';
import pinDirective from '@/shared/pin-directive';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
