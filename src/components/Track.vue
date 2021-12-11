<template>
  <div class="track">
    <div class="track-cover track-cover--small">
      <img :src="track.album.cover_small" :alt="track.title" />
    </div>
    <div class="track-info">
      <p class="subtitle--small">{{ track.title }}</p>
      <p class="body--small">{{ track.artist.name }}</p>
    </div>
    <div v-if="displayControls" class="track-controls">
      <svg viewBox="0 0 24 24" width="24" height="24" focusable="false" role="img" aria-hidden="true">
        <g>
          <path d="M8.5 14a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 4.4h1v3.649l2.333 2.078-.666.746L8 8.497V4.4zM17 3h5v1h-5V3zm0 9h5v1h-5v-1zM2 21v1h20v-1H2z"></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: {
    track: {
      type: Object,
      required: true,
    },
    displayControls: {
      type: Boolean,
      default: false,
    },
    bigTrack: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.track {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}

.track:hover {
  background-color: var(--grey-100);
  cursor: pointer;
}

.track-cover {
  margin-right: 16px;
  overflow: hidden;
}

.track-cover--small {
  height: 56px;
  width: 56px;
}

.track-cover img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.track-info {
  flex-grow: 1;
}

.track-controls {
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px;
  border-radius: 2px;
}
.track-controls:hover {
  background-color: var(--grey-200);
}
</style>