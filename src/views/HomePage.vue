<template>
  <div class="root">
    <h1>Home</h1>
    <Playlist id=3 pictureUrl="https://picsum.photos/250" name="Lorem" description="Ipsum blabla" />
  </div>
</template>


<script>
import Playlist from '../components/Playlist.vue'

export default {
  name: "HomePage",
  components: {
    Playlist
  }
}
</script>

<style scoped>

</style>