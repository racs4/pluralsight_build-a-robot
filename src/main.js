import Vue from 'vue';
import pinDirective from '@/shared/pin-directive';
import currencyFilter from '@/shared/currency-filter';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
