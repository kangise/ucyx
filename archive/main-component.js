import { createApp } from 'vue'
import './assets/css/modern-style.css' // 保留你的CSS修改
import { createI18nInstance } from './config/i18n.config.js' // 保留你的翻译配置

// 导入组件
import Navigation from './components/Navigation.vue'
import HomePage from './pages/HomePage.vue'
import Footer from './components/Footer.vue'

// 创建i18n实例
const i18n = createI18nInstance()

const app = createApp({
  components: {
    Navigation,
    HomePage,
    Footer
  },
  template: `
    <div id="app">
      <!-- Loading Screen -->
      <div id="loading" class="loading-screen">
        <div class="loading-content">
          <div class="loading-logo">UCYX</div>
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading Excellence...</div>
        </div>
      </div>

      <!-- 使用组件化架构 -->
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  `,
  
  mounted() {
    console.log('UCYX Component-based App initialized!')
    
    // 保留加载动画逻辑
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
  }
})

app.use(i18n)
app.mount('#app')
