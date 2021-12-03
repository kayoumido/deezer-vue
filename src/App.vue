<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/playlist/1">About</router-link>
      <!-- <div class="ad" @click="$router.push('/playlist/' + playlist.id)" > -->
    </div>
    <router-view/>
  </div>
</template>

<script>
/*
 *  HomePage.vue (route 0) - Teo
 *      Playlist.vue (list)
 *  PlaylistPage.vue (route 1) - Doran
 *      TrackButton.vue
 *          Track.vue
 *      Queue.vue (indépendant de la playlist)
 *          Track.vue
 *  Player.vue (always on bottom) - Teo
 *      Track.vue (Big track)
 *      DeezerCredits.vue
 */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
