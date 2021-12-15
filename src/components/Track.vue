<template>
  <div :class="['track', {'track--playing': track === $store.state.currentTrack && (pos == -1 || pos == 0)}]">
    <div class="track-cover track-cover--small">
      <img :src="track.album.cover_small" :alt="track.title" />
      <div v-if="playable" class="track-controls">
        <button v-if="$store.state.playing && track === $store.state.currentTrack" class="control control--equalizer">
          <span class="equalizer"></span>
        </button>
        <button v-else @click="$store.dispatch('playTrack', track)" class="control play">
          <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="track-info">
      <p class="track-title subtitle--small">{{ track.title }}</p>
      <p class="body--small">{{ track.artist.name }}</p>
    </div>

    <div v-if="displayControls" @click="$store.dispatch('addTrackToQueue', track)" class="track-add_queue">
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
    playable: {
      type: Boolean,
      default: true,
    },
    pos: {
      type: Number,
      default: -1
    }
  },
}
</script>

<style scoped>
.track {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}

.track--playing .track-title {
  color: var(--accent);
}

.track:hover {
  background-color: var(--grey-100);
}

.track:hover .control {
  opacity: 1;
}

.track:hover .control svg {
  display: inline;
  cursor: pointer;
}

.track-cover {
  margin-right: 16px;
  position: relative;
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

.track-add_queue {
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px;
  border-radius: 2px;
}

.track-add_queue:hover {
  background-color: var(--grey-200);
  cursor: pointer;
}

.track-controls {
  top: 0;
  left: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
}

.control {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  opacity: 0;

  border-color: transparent;
  border-radius: 50%;

  height: 32px;
  width: 32px;
  background-color: rgb(255, 255, 255);
}

.control--equalizer {
  opacity: 1;
}

.equalizer {
  background-image: url("../assets/images/equalizer.gif");
  width: 12px;
  height: 12px;
}

</style>