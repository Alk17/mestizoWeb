import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude:['**/*.m4v'],
  base: '/mestizoWeb/',
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>['swiper-container', 'swiper-slide'].includes(tag),
      }
    }
  })],
})