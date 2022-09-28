import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'gallery' } },
  {
    path: '/galerie',
    name: 'gallery',
    component: () => import('@/pages/Gallery'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
