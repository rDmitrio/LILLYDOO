import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'LILLYDOO Testpaket'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router;
