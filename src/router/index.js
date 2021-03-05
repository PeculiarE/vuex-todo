import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue'),
  },
  {
    path: '/recycle-bin',
    name: 'Delete',
    component: () => import(/* webpackChunkName: "delete" */ '../views/Delete.vue'),
  },
  {
    path: '/view-page/:id',
    name: 'ViewPage',
    component: () => import(/* webpackChunkName: "view-page" */ '../views/ViewPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
