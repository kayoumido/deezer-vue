import HomePage from '../views/HomePage.vue';
import PlaylistPage from '../views/PlaylistPage.vue';

import { createRouter, createWebHistory } from 'vue-router'

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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;