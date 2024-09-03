import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //跨域代理
  server:{
    host:'0.0.0.0',
    port:80,
    proxy:{
      '/resume':{
        target:'http://orz.turingteam.xyz:9641',
        changeOrigin:true
      },
      '/admin/queryResumes':{
        target:'http://orz.turingteam.xyz:9641',
        changeOrigin:true
      },
      '/admin/numbers':{
        target:'http://orz.turingteam.xyz:9641',
        changeOrigin:true 
      }
    }
  }
})
