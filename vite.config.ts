import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite 自动按需引入 AntDesign
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      // 自定义组件所在位置
      // https://www.cnblogs.com/hushuguang/p/15919964.html
      // @see https://www.iszy.cc/posts/unplugin-vue-components-first-experience/
      dirs: ['src/components'],
      resolvers: [AntDesignVueResolver()],
    })
  ],
  // 如果你使用了 less, 则需要引用使用 less 的库要配置一下
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
