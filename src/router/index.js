import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import PlaylistPage from '@/views/PlaylistPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistPage',
    component: PlaylistPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router
