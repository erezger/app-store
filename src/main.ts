import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './lang/lang';
import '@/globals/filters';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import '@/assets/scss/index.scss';
import Notifications from 'vue-notification';
import AppCardComponent from '@/components/app-card.component.vue';

Vue.component('app-card', AppCardComponent);
Vue.component('carousel', VueSlickCarousel);

Vue.use(Notifications);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
