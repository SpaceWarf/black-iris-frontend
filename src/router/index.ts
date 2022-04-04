import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { fetchUserDetails, getUser } from '@/utils/firebase';
import store from '@/store';

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
      title: 'Login',
    },
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/ForgotPasswordView.vue'),
    meta: {
      title: 'Forgot Password',
    },
  },
  {
    path: '/weapons',
    name: 'Weapons Store',
    component: () => import(/* webpackChunkName: "weaponStore" */ '../views/WeaponsStoreView.vue'),
    meta: {
      title: 'Weapons Store',
      authRequired: true,
      authLevel: 2
    },
  },
  {
    path: '/userManagement',
    name: 'User Management',
    component: () => import(/* webpackChunkName: "userManagement" */ '../views/UserManagementView.vue'),
    meta: {
      title: 'User Management',
      authRequired: true,
      authLevel: 0
    },
  },
  {
    path: "/NotAuthorized",
    component: () => import(/* webpackChunkName: "NotAuthorized" */ '../views/NotAuthorizedView.vue'),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = (to.meta.title as string) || 'Not Found';
  if (to.matched.some(record => record.meta.authRequired)) {
    const user = await getUser();
    if (user && user.uid) {
      await fetchUserDetails(user.uid);

      if (store.getters.getRole.authority <= (to.meta.authLevel as number)) {
        next();
      } else {
        next({ path: '/NotAuthorized' });
      }
    } else {
      next({ path: '/login' });
    }
  } else {
    next();
  }
});

export default router;
