import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    queue: [],
    currentTrack: null,
  },
  mutations: {
    addTrackToQueue(state, track) {
      state.queue.push(track);
    },
    setCurrentTrack(state, track) {
      state.currentTrack = track;
    },
  },
  actions: {
    addTrackToQueue({ commit }, track) {
      commit('addTrackToQueue', track);
    },
    playTrack({ commit }, track) {
      commit('setCurrentTrack', track);
    },
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