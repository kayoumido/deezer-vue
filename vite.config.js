import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue' // vue3 plugin thingy
import { createVuePlugin as vue } from "vite-plugin-vue2"; // vue2 thingy

// https://vitejs.dev/config/
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'vue': '@vue/compact'
    },
  },
  server: {
    proxy: {
      // string shorthand
      '/playlists': 'http://localhost:3000',
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2
        }
      }
    }
  })],
});

// // vite.config.js
// export default {
//   resolve: {
//     alias: {
//       vue: '@vue/compat'
//     }
//   },
//   plugins: [
//     vue({
//       template: {
//         compilerOptions: {
//           compatConfig: {
//             MODE: 2
//           }
//         }
//       }
//     })
//   ]
// }
