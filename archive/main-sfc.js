import { createApp } from 'vue'
import './assets/css/modern-style.css'
import App from './App.vue'

// 创建并挂载应用
try {
  console.log('Creating Vue app with SFC...')
  const app = createApp(App)
  console.log('SFC app created, mounting...')
  app.mount('#app')
  console.log('UCYX SFC App mounted successfully!')
} catch (error) {
  console.error('Failed to mount SFC app:', error)
  console.error('Error stack:', error.stack)
}
