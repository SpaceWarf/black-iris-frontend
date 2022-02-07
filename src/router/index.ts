import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - The Burrow',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of the website',
        },
        {
          property: 'og:description',
          content: 'The home page of the website',
        },
      ],
    },
  },
  {
    path: '/weapons',
    name: 'Weapons Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/WeaponsStore.vue'),
    meta: {
      title: 'Weapons Store - The Burrow',
      metaTags: [
        {
          name: 'description',
          content: 'The weapons store page of the website.',
        },
        {
          property: 'og:description',
          content: 'The weapons store page of the website.',
        },
      ],
    },
  },
  {
    path: '/drugs',
    name: 'Drugs Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/DrugsStore.vue'),
    meta: {
      title: 'Drugs Store - The Burrow',
      metaTags: [
        {
          name: 'description',
          content: 'The drugs store page of the website.',
        },
        {
          property: 'og:description',
          content: 'The drugs store page of the website.',
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'The Burrow';
  next();
});

export default router;
