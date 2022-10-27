<template>
  <div class="root">
    <h1>Home two three four</h1>
    <div class="playlists">
        <ul>
          <li v-for="playlist in this.playlists" :key="playlist.id" style="list-style-type:none">
            <Playlist :id="playlist.id" :pictureUrl="playlist.picture" :name="playlist.title" :description="playlist.user.name"/>
          </li>
        </ul>
    </div>
  </div>
</template>


<script>
import Playlist from '../components/Playlist.vue';

export default {
  name: "HomePage",
  components: {
    Playlist
  },
  mounted(){
    this.fetch()
  },
   data: function () {
    return {
      loading: true,
      error: false,
      playlists: []
    }
  },
  methods: {
    async fetch() {
        this.loading = true;
      try {
        const { data: playlists } = await this.$axios.get('/playlists');
        this.playlists = playlists;
      } catch (error) {
        this.error = true;
        console.error(error);
      }
      this.loading = false;
    }
  }
}
</script>

<style scoped>

.root{
 padding-bottom: 80px;
}

ul{
  columns: 2;
}
</style>