<template>
  <div id="app">
    <router-view/>
    <Player/>
  </div>
</template>

<script>
import Player from "./components/Player.vue";

export default {
  name: 'App',
  components: { Player }
  }
</script>

<style>
html,
body {
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

:root {
  --grey-400: #9CA3AF;
  --grey-200: #E5E7EB;
  --grey-100: #F3F4F6;
  --accent: #ef5466;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.body--small {
  font-size: 0.875rem;
  line-height: 1.5;
}

.title {
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.25;
}

.subtitle {
  font-weight: bold;
}

.subtitle--small {
  font-weight: bold;
  font-size: 0.875rem;
}

.overline {
  color: var(--grey-400);
  font-size: 0.75rem;
}
</style>
