import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { fetchUserDetails, getUser } from '@/utils/firebase';
import { getRoleAuthorityLevel, Role } from '@/models/enums/Roles';
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
      authLevel: Role.User
    },
  },
  {
    path: '/drugs',
    name: 'Drugs Store',
    component: () => import(/* webpackChunkName: "drugStore" */ '../views/DrugsStoreView.vue'),
    meta: {
      title: 'Drugs Store',
      authRequired: true,
      authLevel: Role.User
    },
  },
  {
    path: '/userManagement',
    name: 'User Management',
    component: () => import(/* webpackChunkName: "userManagement" */ '../views/UserManagementView.vue'),
    meta: {
      title: 'User Management',
      authRequired: true,
      authLevel: Role.SuperAdmin
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
    if (user && user.email) {
      await fetchUserDetails(user.email);

      if (getRoleAuthorityLevel(store.getters.getRole) <= getRoleAuthorityLevel(to.meta.authLevel as Role)) {
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
