import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    queue: [],
    currentTrack: null,
    playing: false,
  },
  mutations: {
    addTrackToQueue(state, track) {
      state.queue.push(track);
    },
    setCurrentTrack(state, track) {
      state.currentTrack = track;
    },
    setPlaying(state, playing) {
      state.playing = playing;
    }
  },
  actions: {
    addTrackToQueue({ commit }, track) {
      commit('addTrackToQueue', track);
    },
    playTrack({ commit }, track) {
      commit('setCurrentTrack', track);
      commit('setPlaying', true);
    },
    pauseTrack({ commit }) {
      commit('setPlaying', false);
    }
  },
  getters: {
    isQueueEmpty(state) {
      return state.queue.length === 0;
    },
    queueSize(state) {
      return state.queue.length;
    },
  },
});