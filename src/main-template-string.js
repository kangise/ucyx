import { createApp } from 'vue'
import './assets/css/modern-style.css'

// 直接导入英语翻译文件
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

      <!-- Modern Solutions Mega Menu -->
      <div class="mega-menu-fullwidth" 
           v-show="showMegaMenu" 
           @mouseenter="keepMegaMenu = true"
           @mouseleave="hideMegaMenu">
        <div class="mega-menu-container">
          <!-- SVG渐变定义 -->
          <svg width="0" height="0" style="position: absolute;">
            <defs>
              <linearGradient id="greenBlackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#00A651;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#2C3E50;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          
          <div class="mega-menu-content">
            <div class="modern-mega-grid">
              
              <!-- Start Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>{{ t.megaMenu.start }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#sell-china" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.sellToChina }}</div>
                    <div class="service-value">{{ t.megaMenu.reachConsumers }}</div>
                  </a>
                  <a href="#sell-world" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.sellToWorld }}</div>
                    <div class="service-value">{{ t.megaMenu.globalExpansion }}</div>
                  </a>
                </div>
              </div>

              <!-- Choice Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="21 21l-4.35-4.35"/>
                    <circle cx="11" cy="11" r="3"/>
                  </svg>
                </div>
                <h4>{{ t.megaMenu.choice }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="/novochoice" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.novochoice }}</div>
                    <div class="service-value">{{ t.megaMenu.aiPoweredIntelligence }}</div>
                  </a>
                  <a href="#customized" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.customizedSelection }}</div>
                    <div class="service-value">{{ t.megaMenu.tailoredRecommendations }}</div>
                  </a>
                </div>
              </div>

              <!-- Sell Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" stroke-width="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h4>{{ t.megaMenu.sell }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#copilot" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.sellerCopilot }}</div>
                    <div class="service-value">{{ t.megaMenu.aiDrivenOptimization }}</div>
                  </a>
                  <a href="#marketing" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.marketingMix }}</div>
                    <div class="service-value">{{ t.megaMenu.maximizeROI }}</div>
                  </a>
                </div>
              </div>

              <!-- Manage Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" stroke-width="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h4>{{ t.megaMenu.manage }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#customer-management" class="mega-service-link">
                    <div class="service-name">{{ t.megaMenu.manageCustomer }}</div>
                    <div class="service-value">{{ t.megaMenu.buildRelationships }}</div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <!-- 下半部分：灰色底的3个横向链接 -->
        <div class="mega-menu-footer">
          <div class="mega-footer-content">
            <a href="#contact" class="mega-footer-item">
              <span>{{ t.megaMenu.startConsultation }}</span>
            </a>
            <div class="mega-footer-divider"></div>
            <a href="#blog" class="mega-footer-item">
              <span>{{ t.megaMenu.visitBlog }}</span>
            </a>
            <div class="mega-footer-divider"></div>
            <a href="#methodology" class="mega-footer-item">
              <span>{{ t.megaMenu.learnMethodology }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Mega Menu底部延伸区块 - 独立容器 -->
      <div class="mega-menu-extension" 
           v-show="showMegaMenu" 
           @mouseenter="keepMegaMenu = true"
           @mouseleave="hideMegaMenu">
        <div class="mega-extension-content">
          <a href="#contact" class="mega-footer-item">
            <span>{{ t.megaMenu.startConsultation }}</span>
          </a>
          <div class="mega-footer-divider"></div>
          <a href="#blog" class="mega-footer-item">
            <span>{{ t.megaMenu.visitBlog }}</span>
          </a>
          <div class="mega-footer-divider"></div>
          <a href="#methodology" class="mega-footer-item">
            <span>{{ t.megaMenu.learnMethodology }}</span>
          </a>
        </div>
      </div>

      <main>
        <!-- Full-screen Hero Section with Background -->
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

        <!-- Solutions Section with more bottom spacing -->
        <section id="solutions" class="solutions-section-spaced">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ t.services.title }}</h2>
              <p class="section-subtitle">{{ t.services.subtitle }}</p>
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
                <h3>{{ t.services.feature1.title }}</h3>
                <p>{{ t.services.feature1.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ t.services.feature1.tag1 }}</span>
                  <span class="highlight-tag">{{ t.services.feature1.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>{{ t.services.feature2.title }}</h3>
                <p>{{ t.services.feature2.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ t.services.feature2.tag1 }}</span>
                  <span class="highlight-tag">{{ t.services.feature2.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h3>{{ t.services.feature3.title }}</h3>
                <p>{{ t.services.feature3.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ t.services.feature3.tag1 }}</span>
                  <span class="highlight-tag">{{ t.services.feature3.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h3>{{ t.services.feature4.title }}</h3>
                <p>{{ t.services.feature4.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ t.services.feature4.tag1 }}</span>
                  <span class="highlight-tag">{{ t.services.feature4.tag2 }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve" class="serve-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ t.whoWeServe.title }}</h2>
              <p class="section-subtitle">{{ t.whoWeServe.subtitle }}</p>
            </div>
            <div class="serve-grid">
              <div class="serve-card">
                <h3>{{ t.whoWeServe.card1.title }}</h3>
                <p>{{ t.whoWeServe.card1.description }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ t.whoWeServe.card2.title }}</h3>
                <p>{{ t.whoWeServe.card2.description }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ t.whoWeServe.card3.title }}</h3>
                <p>{{ t.whoWeServe.card3.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Stories -->
        <section id="success-stories" class="stories-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ t.successStories.title }}</h2>
              <p class="section-subtitle">{{ t.successStories.subtitle }}</p>
            </div>
            <!-- 第一层：外层定位容器 -->
            <div class="stories-slider-dual-wide">
              <!-- 第二层：内容显示容器 -->
              <div class="story-content-container">
                <!-- 第三层：内容轨道 -->
                <div class="story-track-dual" :style="{ transform: 'translateX(' + (-currentStoryIndex * 100) + '%)' }">
                  <div class="story-slide-dual" v-for="(slide, slideIndex) in storySlides" :key="slideIndex">
                    <div class="story-card-dual" v-for="story in slide" :key="story.brand">
                      <div class="story-content-dual">
                        <h3>{{ story.title }}</h3>
                        <p class="story-brand">{{ story.brand }}</p>
                        <p class="story-description">{{ story.description }}</p>
                        <div class="story-metric">
                          <div class="metric-value">{{ story.metric }}</div>
                          <div class="metric-label">{{ story.metricLabel }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第四层：独立的控制按钮层 -->
              <div class="slider-controls-wide">
                <button class="slider-btn-wide prev" @click="prevStory">‹</button>
                <button class="slider-btn-wide next" @click="nextStory">›</button>
              </div>
            </div>
              <div class="slider-dots">
                <div v-for="(slide, index) in storySlides" :key="index"
                     class="slider-dot" 
                     :class="{ active: index === currentStoryIndex }"
                     @click="currentStoryIndex = index">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Methodology Section -->
        <section id="methodology" class="methodology-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ t.methodology.title }}</h2>
              <p class="section-subtitle">{{ t.methodology.subtitle }}</p>
            </div>
            <div class="methodology-content">
              <div class="methodology-tabs">
                <div class="tab-item" 
                     v-for="(step, index) in methodologySteps" 
                     :key="index"
                     :class="{ active: currentMethodologyTab === index }"
                     @click="setMethodologyTab(index)">
                  <h4>{{ step.title }}</h4>
                  <p>{{ t.methodology.usingProprietaryModel }} <strong>{{ step.tool }}</strong> {{ t.methodology.model }}</p>
                  <div class="progress-bar">
                    <div class="progress-fill" 
                         :style="{ width: currentMethodologyTab === index ? methodologyProgress + '%' : '0%' }">
                    </div>
                  </div>
                </div>
              </div>
              <div class="methodology-panel">
                <div class="panel-content" v-for="(step, index) in methodologySteps" 
                     :key="index" 
                     v-show="currentMethodologyTab === index">
                  <h3>{{ step.title }}</h3>
                  <p v-html="step.description"></p>
                  <div class="tool-demo">
                    <img :src="'https://placehold.co/600x400/008060/ffffff?text=' + step.tool + '+Demo'" 
                         :alt="step.tool + ' Demo'">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Novochoice Platform -->
        <section id="novochoice" class="platform-section">
          <div class="section-container">
            <div class="platform-showcase">
              <div class="platform-content">
                <h2>{{ t.brands.title }}</h2>
                <p>{{ t.brands.description }}</p>
                <a href="/novochoice" class="btn-primary">{{ t.brands.cta }}</a>
              </div>
              <div class="platform-visual">
                <div class="platform-logo">{{ t.brands.novochoiceTitle }}</div>
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
                  {{ isSubmitting ? t.contact.submitting : t.form.submit }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <!-- Modern Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-column">
              <h4>{{ t.megaMenu.start }}</h4>
              <ul>
                <li><a href="#sell-china">{{ t.footerExtra.sellToChina }}</a></li>
                <li><a href="#sell-world">{{ t.footerExtra.sellToWorld }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ t.megaMenu.choice }}</h4>
              <ul>
                <li><a href="/novochoice">{{ t.megaMenu.novochoice }}</a></li>
                <li><a href="#customized">{{ t.megaMenu.customizedSelection }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ t.megaMenu.sell }}</h4>
              <ul>
                <li><a href="#copilot">{{ t.footerExtra.sellerCopilot }}</a></li>
                <li><a href="#marketing">{{ t.footerExtra.marketingMix }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ t.megaMenu.manage }}</h4>
              <ul>
                <li><a href="#customer-management">{{ t.footerExtra.manageCustomer }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ t.footer.company }}</h4>
              <ul>
                <li><a href="#about">{{ t.footerExtra.aboutUCYX }}</a></li>
                <li><a href="#careers">{{ t.footer.careers }}</a></li>
                <li><a href="#partners">{{ t.footerExtra.partners }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ t.footer.resources }}</h4>
              <ul>
                <li><a href="/novochoice">{{ t.footerExtra.novochoicePlatform }}</a></li>
                <li><a href="#blog">{{ t.footer.blog }}</a></li>
                <li><a href="#case-studies">{{ t.footer.cases }}</a></li>
                <li><a href="#webinars">{{ t.footer.webinars }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ t.footerExtra.support }}</h4>
              <ul>
                <li><a href="#help">{{ t.footerExtra.helpCenter }}</a></li>
                <li><a href="#contact">{{ t.footerExtra.contactUs }}</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-legal">
              <p>{{ t.footerExtra.copyright }}</p>
              <div class="legal-links">
                <a href="#privacy">{{ t.footer.privacy }}</a>
                <a href="#terms">{{ t.footer.terms }}</a>
              </div>
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
      // 现有数据保持不变
      showMegaMenu: false,
      keepMegaMenu: false,
      currentStoryIndex: 0,
      storyTimer: null,
      currentMethodologyTab: 0,
      methodologyProgress: 0,
      methodologyTimer: null,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      // 使用翻译数据
      successCases: enTranslations.successStories.cases,
      methodologySteps: enTranslations.methodology.steps
    }
  },

  computed: {
    storySlides() {
      // Group success cases into slides of 2
      const slides = []
      for (let i = 0; i < this.successCases.length; i += 2) {
        slides.push(this.successCases.slice(i, i + 2))
      }
      return slides
    }
  },

  methods: {
    // 现有方法
    clearMegaMenu() {
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

    startStoryAutoplay() {
      this.storyTimer = setInterval(() => {
        this.nextStory()
      }, 15000) // 从5秒增加到15秒（增加2倍）
    },

    stopStoryAutoplay() {
      if (this.storyTimer) {
        clearInterval(this.storyTimer)
        this.storyTimer = null
      }
    },

    setMethodologyTab(index) {
      this.currentMethodologyTab = index
      this.startMethodologyProgress()
    },

    startMethodologyProgress() {
      if (this.methodologyTimer) {
        clearInterval(this.methodologyTimer)
      }
      
      this.methodologyProgress = 0
      const duration = 10000 // 增加一倍：从5000ms到10000ms
      const interval = 50
      const increment = (100 / duration) * interval
      
      this.methodologyTimer = setInterval(() => {
        this.methodologyProgress += increment
        if (this.methodologyProgress >= 100) {
          this.methodologyProgress = 100
          clearInterval(this.methodologyTimer)
          setTimeout(() => {
            const nextTab = (this.currentMethodologyTab + 1) % this.methodologySteps.length
            this.setMethodologyTab(nextTab)
          }, 500)
        }
      }, interval)
    },

    async handleFormSubmit() {
      this.isSubmitting = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.form = { name: '', email: '', message: '' }
        alert(this.t.contact.successMessage)
      } catch (error) {
        alert(this.t.contact.errorMessage)
      } finally {
        this.isSubmitting = false
      }
    }
  },

  mounted() {
    console.log('UCYX App initialized!')
    
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)

    // Start methodology progress animation
    setTimeout(() => {
      this.startMethodologyProgress()
    }, 1000)
    
    // Start story autoplay
    setTimeout(() => {
      this.startStoryAutoplay()
    }, 1500)
  },

  beforeDestroy() {
    if (this.methodologyTimer) {
      clearInterval(this.methodologyTimer)
    }
    if (this.storyTimer) {
      clearInterval(this.storyTimer)
    }
  }
}

// Create and mount app
try {
  console.log('Creating Vue app...')
  const app = createApp(UCYXApp)
  console.log('Vue app created, mounting...')
  app.mount('#app')
  console.log('UCYX App mounted successfully!')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
  console.error('Error stack:', error.stack)
}
