import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage';
import PlaylistPage from '@/views/PlaylistPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/playlist/:id',
    name: 'PlaylistPage',
    component: PlaylistPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router
