<template>
  <section class="playlist">
    <section id="playlist-info" class="playlist-header">
      <img class="playlist-cover" :src="playlist.picture_big" />
      <div class="playlist-text">
        <p class="playlist-type">Playlist</p>
        <p class="playlist-name title">Hits of the moment</p>
        <p class="playlist-author">By Fábio - Deezer Pop Editor</p>
        <p class="playlist-info">2016 · 60 songs · 162 minutes</p>
      </div>
    </section>

    <!--
    <section class="playlist-songs">
      <div class="song">
        <p class="song-name subtitle">Stay</p>
        <p class="song-artist">The Kid Laroi</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">INDUSTRY BABY</p>
        <p class="song-artist">Lil Nas X</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Woman</p>
        <p class="song-artist">Doja Cat</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Bad Habits</p>
        <p class="song-artist">Ed Sheeran</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Way 2 Sexy</p>
        <p class="song-artist">Drake</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Pepas</p>
        <p class="song-artist">Farruko</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Take My Breath</p>
        <p class="song-artist">The Weeknd</p>
      </div>
      <div class="song">
        <p class="song-name subtitle">Happier Than Ever</p>
        <p class="song-artist">Billie Eilish</p>
      </div>
    </section>
    -->
  </section>
</template>

<script>
export default {
  name: "PlaylistPage",
  data() {
    return {
      loading: true,
      error: false,
      playlist: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.loading = true;
      try {
        const {data: playlist} = await this.$axios.get(`/playlists/${this.$route.params.id}`);
        this.playlist = playlist;
      } catch (error) {
        this.error = true;
        console.error(error);
      }
      this.loading = false;
      console.log(this.playlist);
    },
  },
}
</script>

<style scoped>
.playlist-header {
  display: flex;
  margin-bottom: 48px;
}

.playlist-cover {
  width: 250px;
  margin-right: 32px;
}

.playlist-text {
  align-self: flex-end;
}

.playlist-name {
  margin: 8px 0;
}
</style>