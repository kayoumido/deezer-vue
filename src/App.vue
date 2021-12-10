<template>
  <div id="app">
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
</style>
