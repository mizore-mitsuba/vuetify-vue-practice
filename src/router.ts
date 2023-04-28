import { createRouter, createWebHistory } from 'vue-router';
import Page_1 from './components/Page1.vue';
import Page_2 from './components/Page2.vue';
import Login from './components/Login.vue';
import store from '@/store/index';

const routes = [
  { path: '/', name: 'home', component: Login },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/page1',
    name: 'page1',
    component: Page_1,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page_2,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.isLogin) {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
