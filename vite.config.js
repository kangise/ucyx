import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // 启用模板编译
        isCustomElement: (tag) => false
      }
    }
  })],
  base: '/', // 确保使用根路径
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@locales': resolve(__dirname, 'src/locales'),
      // 重要：添加Vue别名以支持模板编译
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    port: 3001,
    open: true,
    host: true
  },
  define: {
    // 启用Vue模板编译
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  }
})
