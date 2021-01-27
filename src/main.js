import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Laue } from 'laue';
import VCalendar from 'v-calendar';

Vue.use(Laue);
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
