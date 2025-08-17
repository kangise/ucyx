import { createApp } from 'vue'
import './assets/css/main.css'

// 翻译数据
import enTranslations from './locales/en.json'
import zhCNTranslations from './locales/zh-CN.json'
import zhTWTranslations from './locales/zh-TW.json'
import jaTranslations from './locales/ja.json'

const translations = {
  'en': enTranslations,
  'zh-CN': zhCNTranslations,
  'zh-TW': zhTWTranslations,
  'ja': jaTranslations
}

const CompleteApp = {
  template: `
    <div id="app">
      <!-- Navigation Bar -->
      <header class="navbar">
        <div class="container">
          <a href="#home" class="logo" @click.prevent="scrollToSection('home')">
            <span class="logo-text">UCYX</span>
          </a>
          <nav class="nav-right-cluster">
            <ul class="nav-menu">
              <!-- Services Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#our-services" class="nav-link" @click.prevent="scrollToSection('our-services')">
                  {{ $t('nav.services') }}
                </a>
                <div class="mega-menu">
                  <div class="mega-menu-grid">
                    <div class="mega-menu-column">
                      <h4>Market Entry</h4>
                      <a href="#" @click.prevent>{{ $t('nav.chinaMarket') }}</a>
                      <a href="#" @click.prevent>{{ $t('nav.globalMarket') }}</a>
                    </div>
                    <div class="mega-menu-divider"></div>
                    <div class="mega-menu-column">
                      <h4>Value Growth Methodology</h4>
                      <a href="#methodology" @click.prevent="scrollToSection('methodology')">{{ $t('nav.marketScanning') }}</a>
                      <a href="#methodology" @click.prevent="scrollToSection('methodology')">{{ $t('nav.deepInsight') }}</a>
                      <a href="#methodology" @click.prevent="scrollToSection('methodology')">{{ $t('nav.viability') }}</a>
                      <a href="#methodology" @click.prevent="scrollToSection('methodology')">{{ $t('nav.optimization') }}</a>
                      <a href="#success-stories" @click.prevent="scrollToSection('success-stories')" class="case-link">{{ $t('nav.caseStudies') }}</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a href="#who-we-serve" class="nav-link" @click.prevent="scrollToSection('who-we-serve')">
                  {{ $t('nav.whoWeServe') }}
                </a>
              </li>
              <li class="nav-item">
                <a href="#success-stories" class="nav-link" @click.prevent="scrollToSection('success-stories')">
                  {{ $t('nav.successStories') }}
                </a>
              </li>
              <li class="nav-item">
                <a href="#methodology" class="nav-link" @click.prevent="scrollToSection('methodology')">
                  {{ $t('nav.methodology') }}
                </a>
              </li>
              <!-- Channels Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link" @click.prevent>{{ $t('nav.channels') }}</a>
                <div class="mega-menu">
                  <div class="mega-menu-grid">
                    <a href="https://yeahtrend.com" target="_blank" class="channel-item-link">
                      <div class="channel-item">
                        <h5>{{ $t('channels.yeahTrend.title') }}</h5>
                        <p>{{ $t('channels.yeahTrend.description') }}</p>
                      </div>
                    </a>
                    <div class="mega-menu-divider"></div>
                    <a href="#" @click.prevent class="channel-item-link">
                      <div class="channel-item">
                        <h5>{{ $t('channels.knowledgeBase.title') }}</h5>
                        <p>{{ $t('channels.knowledgeBase.description') }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            
            <!-- Language Switcher -->
            <div class="lang-switcher">
              <div class="current-lang" :aria-label="$t('aria.openMenu')">
                <span>{{ currentLanguageName }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <ul class="lang-dropdown">
                <li v-for="lang in languages" :key="lang.code">
                  <a href="#" class="lang-option" 
                     :class="{ active: lang.code === currentLanguage }"
                     @click.prevent="setLanguage(lang.code)">
                    <span class="lang-icon" v-html="lang.icon"></span>
                    {{ lang.name }}
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" @click="toggleMobileMenu" :aria-label="$t('aria.openMenu')">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </nav>
        </div>
      </header>

      <!-- Mobile Navigation Panel -->
      <div class="mobile-nav-panel" :class="{ open: isMobileMenuOpen }">
        <ul class="nav-menu">
          <li><a href="#our-services" class="nav-link" @click="closeMobileMenu">{{ $t('nav.services') }}</a></li>
          <li><a href="#who-we-serve" class="nav-link" @click="closeMobileMenu">{{ $t('nav.whoWeServe') }}</a></li>
          <li><a href="#success-stories" class="nav-link" @click="closeMobileMenu">{{ $t('nav.successStories') }}</a></li>
          <li><a href="#methodology" class="nav-link" @click="closeMobileMenu">{{ $t('nav.methodology') }}</a></li>
          <li><a href="https://yeahtrend.com" target="_blank" class="nav-link" @click="closeMobileMenu">{{ $t('nav.channels') }}</a></li>
        </ul>
      </div>

      <main>
        <!-- Hero Section -->
        <section id="home">
          <div class="container">
            <div class="hero-content reveal">
              <h1 class="gradient-title">{{ $t('hero.title') }}</h1>
              <p class="lead">{{ $t('hero.subtitle') }}</p>
              <div class="hero-buttons">
                <a href="#leads-form" class="btn btn-primary" @click.prevent="scrollToSection('leads-form')">
                  {{ $t('hero.cta') }}
                </a>
                <a href="#methodology" class="btn btn-secondary" @click.prevent="scrollToSection('methodology')">
                  {{ $t('hero.learnMore') }}
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Data Power Section -->
        <section id="data-power">
          <div class="container">
            <h2 class="reveal">{{ $t('dataPower.title') }}</h2>
            <p class="section-subtitle reveal">{{ $t('dataPower.subtitle') }}</p>
            <div class="stats-grid">
              <div class="stat-item reveal" v-for="(stat, index) in stats" :key="index">
                <div class="stat-number" :data-target="stat.number" :data-suffix="stat.suffix">
                  {{ animatedNumbers[index] || '0' }}{{ stat.suffix }}
                </div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Services Section -->
        <section id="our-services">
          <div class="container">
            <h2 class="reveal">{{ $t('services.title') }}</h2>
            <p class="section-subtitle reveal">{{ $t('services.subtitle') }}</p>
            <div class="service-phase-grid">
              <div class="service-phase-card reveal" v-for="(phase, index) in servicePhases" :key="index">
                <h3 class="gradient-title">{{ phase.title }}</h3>
                <ul>
                  <li v-for="item in phase.list" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
            <div class="services-cta reveal">
              <p>
                <a href="#leads-form" class="btn btn-primary" @click.prevent="scrollToSection('leads-form')">
                  {{ $t('services.cta') }}
                </a>
              </p>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve">
          <div class="container">
            <h2 class="reveal">{{ $t('whoWeServe.title') }}</h2>
            <p class="section-subtitle reveal">{{ $t('whoWeServe.subtitle') }}</p>
            <div class="serve-grid">
              <div class="serve-card reveal" v-for="(card, index) in whoWeServeCards" :key="index">
                <h3 class="gradient-title">{{ card.title }}</h3>
                <p>{{ card.description }}</p>
              </div>
            </div>
            <div class="see-cases-link reveal">
              <p>
                <a href="#success-stories" @click.prevent="scrollToSection('success-stories')">
                  {{ $t('whoWeServe.seeCasesLink') }}
                </a>
              </p>
            </div>
          </div>
        </section>

        <!-- Success Stories Slider -->
        <section id="success-stories">
          <div class="container">
            <h2 class="reveal">{{ $t('successStories.title') }}</h2>
            <p class="section-subtitle reveal">{{ $t('successStories.subtitle') }}</p>
            <div class="case-slider-container reveal">
              <div class="case-slider-wrapper" :style="{ transform: 'translateX(' + (-currentCaseIndex * 50) + '%)' }">
                <div class="case-card" v-for="(story, index) in successCases" :key="index">
                  <div class="case-content">
                    <h3>{{ story.title }}</h3>
                    <p class="case-brand">{{ story.brand }}</p>
                    <p>{{ story.description }}</p>
                    <div class="case-metrics">
                      <div class="case-metric">
                        <div class="metric-value">{{ story.metric }}</div>
                        <div class="metric-label">{{ story.metricLabel }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="slider-nav prev" @click="prevCase" :aria-label="'Previous case study'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="slider-nav next" @click="nextCase" :aria-label="'Next case study'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="slider-dots">
                <div v-for="n in Math.ceil(successCases.length / 2)" :key="n"
                     class="slider-dot" 
                     :class="{ active: Math.floor(currentCaseIndex / 2) === (n-1) }"
                     @click="goToCase((n-1) * 2)">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Methodology Section -->
        <section id="methodology">
          <div class="container">
            <h2 class="reveal">{{ $t('methodology.title') }}</h2>
            <p class="section-subtitle reveal">{{ $t('methodology.subtitle') }}</p>
            <div class="methodology-component">
              <div class="methodology-tabs">
                <div v-for="(step, index) in methodologySteps" :key="index"
                     class="methodology-tab-item" 
                     :class="{ active: currentMethodologyTab === index }"
                     @click="setMethodologyTab(index)">
                  <h4>{{ step.title }}</h4>
                  <p>Using our proprietary <strong>{{ step.tool }}</strong> model.</p>
                  <div class="progress-bar">
                    <div class="progress-fill" 
                         :class="{ 
                           active: currentMethodologyTab === index,
                           animating: currentMethodologyTab === index && isMethodologyAnimating
                         }"
                         :style="{ 
                           width: currentMethodologyTab === index ? methodologyProgress + '%' : '0%'
                         }">
                    </div>
                  </div>
                </div>
              </div>
              <div class="methodology-content-panels">
                <div v-for="(step, index) in methodologySteps" :key="index"
                     class="methodology-content-panel"
                     :class="{ active: currentMethodologyTab === index }">
                  <h3 class="gradient-title">{{ step.title }}</h3>
                  <p v-html="step.description"></p>
                  <div class="slider-container">
                    <div class="slider-wrapper">
                      <div class="slider-slides" :style="{ transform: 'translateX(' + (-methodologySlideIndex[index] * 100) + '%)' }">
                        <div class="slider-slide">
                          <img :src="'https://placehold.co/600x400/1f2937/3b82f6?text=' + encodeURIComponent(step.tool + ' Demo 1')" 
                               :alt="step.tool + ' Demo 1'">
                        </div>
                        <div class="slider-slide">
                          <img :src="'https://placehold.co/600x400/6b7280/ffffff?text=' + encodeURIComponent(step.tool + ' Demo 2')" 
                               :alt="step.tool + ' Demo 2'">
                        </div>
                      </div>
                    </div>
                    <div class="slider-dots">
                      <div v-for="n in 2" :key="n"
                           class="slider-dot" 
                           :class="{ active: methodologySlideIndex[index] === (n-1) }"
                           @click="setMethodologySlide(index, n-1)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Brands Section -->
        <section id="brands">
          <div class="container reveal">
            <div class="brand-showcase">
              <div class="brand-logo">
                <div class="yeah-trend-logo">Novochoice</div>
              </div>
              <div class="brand-content">
                <h3>{{ $t('brands.title') }}</h3>
                <p>{{ $t('brands.description') }}</p>
                <a href="/channels/novochoice" class="btn btn-primary" 
                   style="background-color: var(--white-color); color: var(--dark-color);">
                  {{ $t('brands.cta') }}
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Leads Form Section -->
        <section id="leads-form">
          <div class="container reveal">
            <h2>{{ $t('form.title') }}</h2>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">
              {{ $t('form.subtitle') }}
            </p>
            <div class="form-container">
              <form id="contact-form" @submit.prevent="handleFormSubmit">
                <div class="form-grid">
                  <div class="form-group">
                    <label for="name">{{ $t('form.name') }}</label>
                    <input type="text" id="name" v-model="form.name" :placeholder="$t('form.name')" required>
                  </div>
                  <div class="form-group">
                    <label for="email">{{ $t('form.email') }}</label>
                    <input type="email" id="email" v-model="form.email" :placeholder="$t('form.email')" required>
                  </div>
                </div>
                <div class="form-group full-width">
                  <label for="message">{{ $t('form.message') }}</label>
                  <textarea id="message" v-model="form.message" :placeholder="$t('form.message')" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Submitting...' : $t('form.submit') }}
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <!-- Contact Section -->
        <section id="contact">
          <div class="container reveal">
            <div class="contact-wrapper">
              <h2>{{ $t('contact.title') }}</h2>
              <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
              <p style="font-size: 1.5rem; font-weight: 700;">
                <a href="mailto:partnership@ucyx.com">{{ $t('contact.email') }}</a>
              </p>
              <p style="margin-top: 3rem; color: var(--medium-gray-color);" v-html="$t('contact.address')">
              </p>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <h4>{{ $t('footer.company') }}</h4>
              <ul>
                <li><a href="#who-we-serve" @click.prevent="scrollToSection('who-we-serve')">{{ $t('footer.about') }}</a></li>
                <li><a href="#" @click.prevent>{{ $t('footer.careers') }}</a></li>
                <li><a href="#" @click.prevent>{{ $t('footer.press') }}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>{{ $t('footer.services') }}</h4>
              <ul>
                <li><a href="#methodology" @click.prevent="scrollToSection('methodology')">{{ $t('footer.methodology') }}</a></li>
                <li><a href="#success-stories" @click.prevent="scrollToSection('success-stories')">{{ $t('footer.cases') }}</a></li>
                <li><a href="#our-services" @click.prevent="scrollToSection('our-services')">{{ $t('footer.solutions') }}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>{{ $t('footer.resources') }}</h4>
              <ul>
                <li><a href="https://yeahtrend.com" target="_blank">Yeah! Trend</a></li>
                <li><a href="#" @click.prevent>{{ $t('footer.blog') }}</a></li>
                <li><a href="#" @click.prevent>{{ $t('footer.webinars') }}</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>{{ $t('footer.legal') }}</h4>
              <ul>
                <li><a href="#" @click.prevent>{{ $t('footer.privacy') }}</a></li>
                <li><a href="#" @click.prevent>{{ $t('footer.terms') }}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; <span id="current-year">2025</span> UCYX Ltd. {{ $t('footer.rights') }}</p>
            <div class="social-media">
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  data() {
    return {
      currentLanguage: 'en',
      isMobileMenuOpen: false,
      animatedNumbers: {},
      currentCaseIndex: 0,
      currentMethodologyTab: 0,
      methodologySlideIndex: [0, 0, 0, 0],
      methodologyProgress: 0,
      isMethodologyAnimating: false,
      methodologyTimer: null,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      languages: [
        { 
          code: 'en', 
          name: 'English', 
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' 
        },
        { 
          code: 'zh-CN', 
          name: '简体中文', 
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' 
        },
        { 
          code: 'zh-TW', 
          name: '繁體中文', 
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' 
        },
        { 
          code: 'ja', 
          name: '日本語', 
          icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 0-8-3-8-9s3-9 8-9 8 3 8 9-3 9-8 9z"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/></svg>' 
        }
      ]
    }
  },
  computed: {
    currentLanguageName() {
      const lang = this.languages.find(l => l.code === this.currentLanguage)
      return lang ? lang.name : 'English'
    },
    stats() {
      return [
        {
          number: 300,
          suffix: this.$t('dataPower.stat1.suffix'),
          label: this.$t('dataPower.stat1.label')
        },
        {
          number: 5,
          suffix: this.$t('dataPower.stat2.suffix'),
          label: this.$t('dataPower.stat2.label')
        },
        {
          number: 10,
          suffix: this.$t('dataPower.stat3.suffix'),
          label: this.$t('dataPower.stat3.label')
        },
        {
          number: 50,
          suffix: this.$t('dataPower.stat4.suffix'),
          label: this.$t('dataPower.stat4.label')
        }
      ]
    },
    servicePhases() {
      return [
        {
          title: this.$t('services.phase1.title'),
          list: this.$t('services.phase1.list')
        },
        {
          title: this.$t('services.phase2.title'),
          list: this.$t('services.phase2.list')
        },
        {
          title: this.$t('services.phase3.title'),
          list: this.$t('services.phase3.list')
        },
        {
          title: this.$t('services.phase4.title'),
          list: this.$t('services.phase4.list')
        }
      ]
    },
    whoWeServeCards() {
      return [
        {
          title: this.$t('whoWeServe.card1.title'),
          description: this.$t('whoWeServe.card1.description')
        },
        {
          title: this.$t('whoWeServe.card2.title'),
          description: this.$t('whoWeServe.card2.description')
        },
        {
          title: this.$t('whoWeServe.card3.title'),
          description: this.$t('whoWeServe.card3.description')
        }
      ]
    },
    successCases() {
      return this.$t('successStories.cases') || []
    },
    visibleCases() {
      // Show current case
      return this.successCases.slice(this.currentCaseIndex, this.currentCaseIndex + 1)
    },
    methodologySteps() {
      const steps = this.$t('methodology.steps') || []
      return steps.map(step => ({
        ...step,
        tool: step.tool || 'UC Tool'
      }))
    }
  },
  methods: {
    $t(key) {
      const keys = key.split('.')
      let value = translations[this.currentLanguage]
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k]
        } else {
          // Fallback to English if not found
          value = translations['en']
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object') {
              value = value[fallbackKey]
            } else {
              return key // Return key if not found
            }
          }
          break
        }
      }
      
      return value || key
    },
    setLanguage(langCode) {
      this.currentLanguage = langCode
      localStorage.setItem('ucyx-language', langCode)
      document.documentElement.lang = langCode
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
      this.closeMobileMenu()
    },
    initScrollAnimations() {
      const revealElements = document.querySelectorAll('.reveal')
      
      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              
              // Trigger number animation for stat items
              if (entry.target.classList.contains('stat-item')) {
                this.animateStatNumbers(entry.target)
              }
              
              revealObserver.unobserve(entry.target)
            }
          })
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        })
        
        revealElements.forEach(element => {
          revealObserver.observe(element)
        })
      } else {
        revealElements.forEach(element => {
          element.classList.add('visible')
        })
      }
    },
    animateStatNumbers(statElement) {
      const numberElement = statElement.querySelector('.stat-number')
      if (!numberElement) return
      
      const target = parseInt(numberElement.getAttribute('data-target'))
      const suffix = numberElement.getAttribute('data-suffix') || ''
      const index = Array.from(document.querySelectorAll('.stat-item')).indexOf(statElement)
      
      let current = 0
      const increment = target / 60 // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        // 使用Vue 3的响应式方式
        this.animatedNumbers[index] = Math.floor(current)
      }, 33) // ~30fps
    },
    nextCase() {
      const maxIndex = this.successCases.length - 2 // 因为一次显示两个
      this.currentCaseIndex = this.currentCaseIndex >= maxIndex ? 0 : this.currentCaseIndex + 2
    },
    prevCase() {
      const maxIndex = this.successCases.length - 2
      this.currentCaseIndex = this.currentCaseIndex <= 0 ? maxIndex : this.currentCaseIndex - 2
    },
    goToCase(index) {
      this.currentCaseIndex = index
    },
    setMethodologyTab(index) {
      this.currentMethodologyTab = index
      this.resetMethodologyProgress()
      this.startMethodologyProgress()
    },
    setMethodologySlide(tabIndex, slideIndex) {
      // 使用Vue 3的响应式方式
      this.methodologySlideIndex[tabIndex] = slideIndex
    },
    startMethodologyProgress() {
      this.clearMethodologyTimer()
      this.methodologyProgress = 0
      this.isMethodologyAnimating = true
      
      const duration = 5000 // 5秒完成进度条
      const interval = 50 // 每50ms更新一次
      const increment = (100 / duration) * interval
      
      this.methodologyTimer = setInterval(() => {
        this.methodologyProgress += increment
        
        if (this.methodologyProgress >= 100) {
          this.methodologyProgress = 100
          this.isMethodologyAnimating = false
          this.clearMethodologyTimer()
          
          // 自动切换到下一个标签页
          setTimeout(() => {
            const nextTab = (this.currentMethodologyTab + 1) % this.methodologySteps.length
            this.setMethodologyTab(nextTab)
          }, 500)
        }
      }, interval)
    },
    resetMethodologyProgress() {
      this.methodologyProgress = 0
      this.isMethodologyAnimating = false
    },
    clearMethodologyTimer() {
      if (this.methodologyTimer) {
        clearInterval(this.methodologyTimer)
        this.methodologyTimer = null
      }
    },
    async handleFormSubmit() {
      this.isSubmitting = true
      
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          message: ''
        }
        
        alert('Thank you! We will contact you within 24 hours.')
        
      } catch (error) {
        alert('Sorry, there was an error. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },
    startMethodologySlideRotation() {
      // Auto-rotate slides for methodology section
      setInterval(() => {
        this.methodologySlideIndex = this.methodologySlideIndex.map((current, index) => {
          return (current + 1) % 2 // Toggle between 0 and 1
        })
      }, 3000) // Change every 3 seconds
    }
  },
  mounted() {
    console.log('Complete UCYX app mounted!')
    
    // Load saved language
    const savedLang = localStorage.getItem('ucyx-language')
    if (savedLang && this.languages.find(l => l.code === savedLang)) {
      this.currentLanguage = savedLang
    }
    
    // Hide loading animation
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
    
    // Initialize scroll animations
    this.initScrollAnimations()
    
    // Start methodology slide auto-rotation
    this.startMethodologySlideRotation()
    
    // Start methodology progress animation
    setTimeout(() => {
      this.startMethodologyProgress()
    }, 1000)
  },
  beforeDestroy() {
    this.clearMethodologyTimer()
  }
  mounted() {
    console.log('Complete UCYX app mounted!')
    
    // Load saved language
    const savedLang = localStorage.getItem('ucyx-language')
    if (savedLang && this.languages.find(l => l.code === savedLang)) {
      this.currentLanguage = savedLang
    }
    
    // Hide loading animation
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
    
    // Initialize scroll animations
    this.initScrollAnimations()
    
    // Start methodology slide auto-rotation
    this.startMethodologySlideRotation()
  }
}

// Create and mount app
try {
  const app = createApp(CompleteApp)
  app.mount('#app')
  console.log('Complete UCYX App initialized!')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
}
