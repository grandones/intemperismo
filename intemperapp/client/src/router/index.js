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
    component: () => import('../views/About.vue'),
  },
  {
    path: '/multimidia',
    name: 'Multimidia',
    component: () => import('../views/Multimidia.vue'),
  },
  {
    path: '/sensual',
    name: 'Sensual',
    component: () => import('../views/Sensual.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
