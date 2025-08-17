import { createApp } from 'vue'
import './assets/css/modern-style.css'

// 直接导入翻译JSON文件
import translations from './locales/en.json'

const UCYXApp = {
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

      <!-- Modern Navigation -->
      <header class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">UCYX</a>
          
          <nav class="main-nav">
            <a href="#services" class="nav-link">${translations.nav.services}</a>
            <a href="#who-we-serve" class="nav-link">${translations.nav.whoWeServe}</a>
            <a href="#success-stories" class="nav-link">${translations.nav.successStories}</a>
            <a href="#methodology" class="nav-link">${translations.nav.methodology}</a>
            <a href="/novochoice" class="nav-link">Novochoice</a>
          </nav>
          
          <div class="nav-actions">
            <a href="#login" class="login-link">${translations.nav.login}</a>
            <a href="#contact" class="cta-button">${translations.hero.cta}</a>
          </div>
        </div>
      </header>

      <main>
        <!-- Hero Section -->
        <section id="hero" class="hero-section-fullscreen">
          <div class="hero-overlay"></div>
          <div class="hero-content-center">
            <h1 class="hero-title-large">${translations.hero.title}</h1>
            <p class="hero-subtitle-large">${translations.hero.subtitle}</p>
            <div class="hero-actions-center">
              <a href="#contact" class="btn-primary-large">${translations.hero.cta}</a>
              <a href="#methodology" class="btn-secondary-large">${translations.hero.learnMore}</a>
            </div>
          </div>
        </section>

        <!-- Trust Indicators -->
        <section id="trust-indicators" class="trust-section">
          <div class="trust-container">
            <div class="trust-stats">
              <div class="stat-item">
                <div class="stat-number">${translations.dataPower.stat1.number}${translations.dataPower.stat1.suffix}</div>
                <div class="stat-label">${translations.dataPower.stat1.label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${translations.dataPower.stat2.number}${translations.dataPower.stat2.suffix}</div>
                <div class="stat-label">${translations.dataPower.stat2.label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${translations.dataPower.stat3.number}${translations.dataPower.stat3.suffix}</div>
                <div class="stat-label">${translations.dataPower.stat3.label}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">${translations.dataPower.stat4.number}${translations.dataPower.stat4.suffix}</div>
                <div class="stat-label">${translations.dataPower.stat4.label}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section -->
        <section id="solutions" class="solutions-section-spaced">
          <div class="section-container">
            <div class="section-header">
              <h2>${translations.solutions.title}</h2>
              <p class="section-subtitle">${translations.solutions.subtitle}</p>
            </div>
            <div class="solutions-grid-large">
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="21 21l-4.35-4.35"/>
                    <circle cx="11" cy="11" r="3"/>
                  </svg>
                </div>
                <h3>${translations.solutions.feature1.title}</h3>
                <p>${translations.solutions.feature1.description}</p>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>${translations.solutions.feature2.title}</h3>
                <p>${translations.solutions.feature2.description}</p>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                    <path d="M13 13l6 6"/>
                  </svg>
                </div>
                <h3>${translations.solutions.feature3.title}</h3>
                <p>${translations.solutions.feature3.description}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve" class="serve-section">
          <div class="section-container">
            <div class="section-header">
              <h2>${translations.whoWeServe.title}</h2>
              <p class="section-subtitle">${translations.whoWeServe.subtitle}</p>
            </div>
            <div class="serve-grid">
              <div class="serve-card">
                <h3>${translations.whoWeServe.card1.title}</h3>
                <p>${translations.whoWeServe.card1.description}</p>
              </div>
              <div class="serve-card">
                <h3>${translations.whoWeServe.card2.title}</h3>
                <p>${translations.whoWeServe.card2.description}</p>
              </div>
              <div class="serve-card">
                <h3>${translations.whoWeServe.card3.title}</h3>
                <p>${translations.whoWeServe.card3.description}</p>
              </div>
            </div>
            <div class="serve-cta">
              <p>${translations.whoWeServe.seeCasesLink}</p>
            </div>
          </div>
        </section>

        <!-- Success Stories Section -->
        <section id="success-stories" class="success-stories-section">
          <div class="section-container">
            <div class="section-header">
              <h2>${translations.successStories.title}</h2>
              <p class="section-subtitle">${translations.successStories.subtitle}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  
  mounted() {
    console.log('UCYX JSON App initialized!')
    
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
  }
}

const app = createApp(UCYXApp)
app.mount('#app')
