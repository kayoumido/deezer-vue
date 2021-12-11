<template>
  <main class="playlist" v-if="!loading">
    <section id="playlist-info" class="playlist-header">
      <img class="playlist-cover" :src="playlist.picture_big" alt="Playlist cover image"/>
      <div class="playlist-text">
        <p class="playlist-type">{{ type }}</p>
        <p class="playlist-name title">{{ playlist.title }}</p>
        <p class="playlist-author">By {{ playlist.creator.name }}</p>
        <p class="playlist-info">{{ creationYear }} · {{ songCount }} songs · {{ duration }} minutes</p>
      </div>
    </section>

    <section class="playlist-songs">
      <Track v-for="track in playlist.tracks.data" :key="track.id" :track="track" :display-controls="true" />
    </section>
  </main>
</template>

<script>
import Track from "@/components/Track";

export default {
  name: "PlaylistPage",
  components: {Track},
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
      }
      this.loading = false;
    },
  },
  computed: {
    duration() {
      const seconds = this.playlist.tracks.data.reduce((acc, track) => acc + track.duration, 0);
      return Math.round(seconds / 60);
    },
    songCount() {
      return this.playlist.tracks.data.length;
    },
    creationYear() {
      return (new Date(this.playlist.creation_date)).getFullYear();
    },
    type() {
      return this.playlist.type.charAt(0).toUpperCase() + this.playlist.type.slice(1);
    },
  },
}
</script>

<style scoped>
.playlist {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: calc(100vh - 80px);
  height: 100%;
  padding: 86px;
}

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