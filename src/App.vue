<template>
  <div id="app">
    <h1>Stay tuned!</h1>
    <DeezerCredits />
  </div>
</template>

<script>
import DeezerCredits from "./components/DeezerCredits.vue";

export default {
  name: "App",
  components: {
    DeezerCredits,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
