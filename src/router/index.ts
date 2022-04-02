import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { getUser } from '@/utils/firebase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/weapons'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    meta: {
      title: 'Login - The Burrow',
    },
  },
  {
    path: '/weapons',
    name: 'Weapons Store',
    component: () => import(/* webpackChunkName: "weaponStore" */ '../views/WeaponsStoreView.vue'),
    meta: {
      title: 'Weapons Store - The Burrow',
      authRequired: true,
    },
  },
  {
    path: '/drugs',
    name: 'Drugs Store',
    component: () => import(/* webpackChunkName: "drugStore" */ '../views/DrugsStoreView.vue'),
    meta: {
      title: 'Drugs Store - The Burrow',
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = (to.meta.title as string) || 'The Burrow';
  if (to.matched.some(record => record.meta.authRequired)) {
    if (await getUser()) {
      next();
    } else {
      next({ path: '/login' });
    }
  } else {
    next();
  }
});

export default router;
