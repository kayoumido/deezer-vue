import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    queue: [],
  },
  mutations: {
    addTrackToQueue(state, track) {
      state.queue.push(track);
    }
  },
  actions: {
    addTrackToQueue({ commit }, track) {
      commit('addTrackToQueue', track);
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