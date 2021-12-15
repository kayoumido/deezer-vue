<template>
<div id="player" class="player_root">
    <div class="track">
     <div class="no-music" v-if="!Object.keys($store.state.currentTrack).length">
          <h3>No music selected</h3>
      </div>
      <div v-else>
        <Track :track="$store.state.currentTrack" :playable="false" />
      </div>
    </div>
    <div class="player">
     <img src="../assets/images/prev.svg" alt="Skip Previous" class="play_icon" @click="$store.dispatch('previousTrack')">

      <audio controls autoplay @ended="$store.dispatch('nextTrack')" :src="$store.state.currentTrack.preview">
        Your browser does not support the audio element.
      </audio>

      <img src="../assets/images/next.svg" alt="Skip Next" class="play_icon" @click="$store.dispatch('nextTrack')" >
    </div>
    <div class="credits">
      <Deezer/>
    </div>
</div>
</template>

<script>
import Deezer from "./DeezerCredits.vue"
import Track from "./Track.vue"
export default{
    name: "Player",
    components: {
       Deezer,
       Track
    }
}
</script>

<style scoped>

.player_root {
    background: white;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    bottom: 0px;
    height: 80px;
    width: 100%;
    border-top: 1px solid lightgrey;
}

.track {
  height: 80px;
  flex: 1;
}

.no-music{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  height: 80px;
  align-content: center;
}

audio{
  background: white;
  visibility: visible;
  display: inline-block
}

img:hover {
  cursor: pointer;
}

.player {
  display: flex;
  justify-content: center;
  align-content: center;
  visibility: visible;
  flex: 2;
}

.credits{
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

</style>