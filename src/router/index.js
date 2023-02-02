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
  {
    path: '/illustration/:imgId',
    name: 'illustration',
    component: () => import('@/pages/Illustration'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
