import { createApp } from 'vue'
import './assets/css/modern-style.css'

// 直接导入英语翻译
import enTranslations from './locales/en.json'

const UCYXApp = {
  template: `
    <div id="app">
      <!-- Modern Navigation -->
      <header class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">UCYX</a>
          
          <nav class="main-nav">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = true" @mouseleave="clearMegaMenu">{{ t.nav.services }}</a>
            </div>
            <a href="#who-we-serve" class="nav-link">{{ t.nav.whoWeServe }}</a>
            <a href="#success-stories" class="nav-link">{{ t.nav.successStories }}</a>
            <a href="#methodology" class="nav-link">{{ t.nav.methodology }}</a>
            <a href="/novochoice" class="nav-link">{{ t.megaMenu.novochoice }}</a>
          </nav>
          
          <div class="nav-actions">
            <a href="#login" class="login-link">{{ t.nav.login }}</a>
            <a href="#contact" class="cta-button">{{ t.hero.cta }}</a>
          </div>
        </div>
      </header>

      <main>
        <!-- Full-screen Hero Section -->
        <section id="hero" class="hero-section-fullscreen">
          <div class="hero-overlay"></div>
          <div class="hero-content-center">
            <div class="hero-title-container">
              <div class="hero-title-line1">{{ t.hero.titleLine1 }}</div>
              <div class="hero-title-line2">{{ t.hero.titleLine2 }}</div>
            </div>
            <p class="hero-subtitle-large">{{ t.hero.subtitle }}</p>
            <div class="hero-actions-center">
              <a href="#contact" class="btn-primary-large">{{ t.hero.cta }}</a>
              <a href="#methodology" class="btn-secondary-large">{{ t.hero.learnMore }}</a>
            </div>
          </div>
        </section>

        <!-- Trust Indicators -->
        <section id="trust-indicators" class="trust-section">
          <div class="trust-container">
            <div class="trust-stats">
              <div class="stat-item">
                <div class="stat-number">{{ t.dataPower.stat1.number }}{{ t.dataPower.stat1.suffix }}</div>
                <div class="stat-label">{{ t.dataPower.stat1.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ t.dataPower.stat2.number }}{{ t.dataPower.stat2.suffix }}</div>
                <div class="stat-label">{{ t.dataPower.stat2.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ t.dataPower.stat3.number }}{{ t.dataPower.stat3.suffix }}</div>
                <div class="stat-label">{{ t.dataPower.stat3.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ t.dataPower.stat4.number }}{{ t.dataPower.stat4.suffix }}</div>
                <div class="stat-label">{{ t.dataPower.stat4.label }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section id="contact" class="contact-section">
          <div class="section-container">
            <div class="contact-header">
              <h2>{{ t.contact.readyTitle }}</h2>
              <p class="section-subtitle">{{ t.contact.readySubtitle }}</p>
            </div>
            <div class="contact-form-container-wide">
              <form class="contact-form-wide" @submit.prevent="handleFormSubmit">
                <div class="form-row-wide">
                  <div class="form-group">
                    <label>{{ t.form.name }}</label>
                    <input type="text" v-model="form.name" :placeholder="t.form.namePlaceholder" required>
                  </div>
                  <div class="form-group">
                    <label>{{ t.form.email }}</label>
                    <input type="email" v-model="form.email" :placeholder="t.form.emailPlaceholder" required>
                  </div>
                </div>
                <div class="form-group">
                  <label>{{ t.form.message }}</label>
                  <textarea v-model="form.message" :placeholder="t.form.messagePlaceholder" required></textarea>
                </div>
                <button type="submit" class="btn-primary-wide" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Submitting...' : t.form.submit }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <!-- Simple Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-bottom">
            <div class="footer-legal">
              <p>© 2024 UCYX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  
  data() {
    return {
      // 直接使用英语翻译
      t: enTranslations,
      showMegaMenu: false,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    clearMegaMenu() {
      setTimeout(() => {
        this.showMegaMenu = false
      }, 100)
    },

    async handleFormSubmit() {
      this.isSubmitting = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.form = { name: '', email: '', message: '' }
        alert('Message sent successfully!')
      } catch (error) {
        alert('Error sending message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  },

  mounted() {
    console.log('UCYX Simple App mounted successfully!')
    
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
  console.log('Creating simple Vue app...')
  const app = createApp(UCYXApp)
  console.log('Simple app created, mounting...')
  app.mount('#app')
  console.log('UCYX Simple App mounted successfully!')
} catch (error) {
  console.error('Failed to mount simple app:', error)
  console.error('Error stack:', error.stack)
}
