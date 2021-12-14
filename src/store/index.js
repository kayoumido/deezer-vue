import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    queue: [],
    listenedStack : [],
    currentTrack: {},
  },
  mutations: {
    addTrackToQueue(state, track) {
      if (track != null) {
        if (state.queue.length === 0 && !state.playing) {
          state.currentTrack = track
        }
        state.queue.push(track);
      }
    },
    addTrackToStartOfQueue(state, track) {
      if(track != null)
        state.queue.unshift(track)
    },
    addTrackToListenedStack(state, track) {
      if(track != null)
        state.listenedStack.unshift(track);
    },
    popTrackFromListenedStack(state) {
      if(state.listenedStack.length > 0)
        state.listenedStack = state.listenedStack.slice(1,state.listenedStack.length)
    },
    setCurrentTrack(state, track) {
      state.currentTrack = track;
    },
    popTrackFromQueue(state) {
      if(state.queue.length > 0)
      state.queue = state.queue.slice(1,state.queueSize)  
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
    },
    nextTrack({ commit }) {
      if(this.state.currentTrack === this.state.queue[0]) {
        commit('setCurrentTrack', this.state.queue[1]);
        commit('addTrackToListenedStack', this.state.queue[0]);
        commit('popTrackFromQueue');
      } else {
        commit('setCurrentTrack', this.state.queue[0]);
      }
      if(this.state.queue.length === 0) {
        commit('setPlaying', false)
      }
    },
    previousTrack({ commit }) {
      commit('addTrackToStartOfQueue', this.state.listenedStack[0])
      commit('setCurrentTrack', this.state.queue[0]);
      commit('popTrackFromListenedStack')
    }
  },
  getters: {
    isQueueEmpty(state) {
      return state.queue.length === 0;
    },
    queueSize(state) {
      return state.queue.length;
    },
    currentTrack(state) {
      return state.currentTrack;
    },
  },
});