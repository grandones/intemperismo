import { createRouter, createWebHistory } from 'vue-router';
import Intemperhome from '../views/Intemperhome.vue';

const routes = [

  {
    path: '/intemperhome',
    name: 'Intemperhome',
    alias: ['/'],
    component: Intemperhome,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/multimidia',
    name: 'Multimidia',
    component: () => import(/* webpackChunkName: "multimidia" */ '../views/Multimidia.vue'),
  },
  {
    path: '/sensual',
    name: 'Sensual',
    component: () => import(/* webpackChunkName: "sensual" */ '../views/Sensual.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
