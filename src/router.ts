import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/home/home.component.vue';
import AppItemComponent from '@/views/app-item/app-item.component';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/app-item/:packageName',
      name: 'app-item',
      component: AppItemComponent,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
