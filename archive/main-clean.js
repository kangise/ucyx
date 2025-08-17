// 干净版本 - 删除所有语言切换功能
const { createApp } = Vue

// 简化的i18n配置，只保留英文
const i18n = VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        whoWeServe: 'Who We Serve',
        successStories: 'Success Stories',
        methodology: 'Methodology',
        login: 'Login'
      },
      hero: {
        title: 'AI-Driven Global E-commerce Consultancy',
        subtitle: 'Helping brands achieve explosive growth on Amazon, Shopify, and emerging platforms with data-driven strategies and cutting-edge technology.',
        cta: 'Start Free Consultation'
      },
      // ... 其他翻译内容保持不变
    }
  }
})

const app = createApp({
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

      <!-- Navigation -->
      <nav class="navbar">
        <div class="nav-container">
          <a href="#" class="logo">UCYX</a>
          
          <nav class="main-nav">
            <a href="#home" class="nav-link">{{ $t('nav.home') }}</a>
            <a href="#services" class="nav-link">{{ $t('nav.services') }}</a>
            <a href="#who-we-serve" class="nav-link">{{ $t('nav.whoWeServe') }}</a>
            <a href="#success-stories" class="nav-link">{{ $t('nav.successStories') }}</a>
            <a href="#methodology" class="nav-link">{{ $t('nav.methodology') }}</a>
            <a href="/novochoice" class="nav-link">Novochoice</a>
          </nav>
          
          <div class="nav-actions">
            <a href="#login" class="login-link">{{ $t('nav.login') }}</a>
            <a href="#contact" class="cta-button">{{ $t('hero.cta') }}</a>
          </div>
        </div>
      </nav>

      <!-- 其他内容保持不变... -->
      <div>网站其他内容</div>
    </div>
  `,
  
  data() {
    return {
      showMegaMenu: false,
      keepMegaMenu: false,
      currentStoryIndex: 0,
      currentMethodologyTab: 0,
      methodologyProgress: 0,
      methodologyTimer: null,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    hideMegaMenuDelayed() {
      setTimeout(() => {
        if (!this.keepMegaMenu) {
          this.showMegaMenu = false
        }
      }, 100)
    },

    hideMegaMenu() {
      this.keepMegaMenu = false
      this.showMegaMenu = false
    },

    nextStory() {
      this.currentStoryIndex = (this.currentStoryIndex + 1) % this.storySlides.length
    },

    prevStory() {
      this.currentStoryIndex = this.currentStoryIndex === 0 ? this.storySlides.length - 1 : this.currentStoryIndex - 1
    },

    async handleFormSubmit() {
      this.isSubmitting = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.form = { name: '', email: '', message: '' }
        alert('Thank you! We will contact you within 24 hours.')
      } catch (error) {
        alert('Sorry, there was an error. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  },

  mounted() {
    console.log('UCYX Clean App initialized!')
    
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
