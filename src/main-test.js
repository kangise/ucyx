import { createApp } from 'vue'
import './assets/css/modern-style.css'

// 简单的测试应用
const TestApp = {
  template: `
    <div id="app">
      <h1>UCYX Test Page</h1>
      <p>If you can see this, Vue is working correctly.</p>
    </div>
  `,
  
  mounted() {
    console.log('Test app mounted successfully!')
    // 隐藏loading
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
  }
}

// 创建并挂载应用
try {
  console.log('Creating test Vue app...')
  const app = createApp(TestApp)
  console.log('Test app created, mounting...')
  app.mount('#app')
  console.log('Test app mounted successfully!')
} catch (error) {
  console.error('Failed to mount test app:', error)
  console.error('Error stack:', error.stack)
}
