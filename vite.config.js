import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { createVuePlugin as vue } from "vite-plugin-vue2"; // vue2 thingy

// https://vitejs.dev/config/
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/playlists': 'http://localhost:3000',
    },
  },

  plugins: [vue()],
});
