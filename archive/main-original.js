import { createApp } from 'vue'

// 导入样式
import './assets/css/main.css'

// 创建单页面应用组件
const OriginalApp = {
  template: `
    <div id="app">
      <!-- Navigation Bar -->
      <header class="navbar">
        <div class="container">
          <a href="#home" class="logo">
            <span class="logo-text">UCYX</span>
          </a>
          <nav class="nav-right-cluster">
            <ul class="nav-menu">
              <!-- Services Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#our-services" class="nav-link">Services</a>
                <div class="mega-menu">
                  <div class="mega-menu-grid">
                    <div class="mega-menu-column">
                      <h4>Market Entry</h4>
                      <a href="#">Enter China Market</a>
                      <a href="#">Enter Global Market</a>
                    </div>
                    <div class="mega-menu-divider"></div>
                    <div class="mega-menu-column">
                      <h4>Value Growth Methodology</h4>
                      <a href="#methodology">Market Scanning & Opportunity Locking</a>
                      <a href="#methodology">Deep Insight & Product Definition</a>
                      <a href="#methodology">Viability & Growth Path</a>
                      <a href="#methodology">Platform Success & Continuous Optimization</a>
                      <a href="#success-stories" class="case-link">Customer Case Studies</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a href="#who-we-serve" class="nav-link">Who We Serve</a></li>
              <li class="nav-item"><a href="#success-stories" class="nav-link">Success Stories</a></li>
              <li class="nav-item"><a href="#methodology" class="nav-link">Methodology</a></li>
              <!-- Channels Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">Channels</a>
                <div class="mega-menu">
                  <div class="mega-menu-grid">
                    <a href="/channels/novochoice" class="channel-item-link">
                      <div class="channel-item">
                        <h5>Novochoice</h5>
                        <p>Advanced market intelligence platform.</p>
                      </div>
                    </a>
                    <div class="mega-menu-divider"></div>
                    <a href="#" class="channel-item-link">
                      <div class="channel-item">
                        <h5>E-commerce Knowledge Base</h5>
                        <p>In-depth industry analysis and strategic guides.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="lang-switcher">
              <div class="current-lang">
                <span>{{ currentLanguage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <ul class="lang-dropdown">
                <li><a href="#" class="lang-option" @click.prevent="setLanguage('en')">English</a></li>
                <li><a href="#" class="lang-option" @click.prevent="setLanguage('ja')">日本語</a></li>
                <li><a href="#" class="lang-option" @click.prevent="setLanguage('zh-Hant')">繁體中文</a></li>
                <li><a href="#" class="lang-option" @click.prevent="setLanguage('zh-Hans')">简体中文</a></li>
              </ul>
            </div>
            <!-- Mobile Menu Toggle Button -->
            <button class="mobile-menu-toggle" @click="toggleMobileMenu">
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
          <li><a href="#our-services" class="nav-link" @click="closeMobileMenu">Services</a></li>
          <li><a href="#who-we-serve" class="nav-link" @click="closeMobileMenu">Who We Serve</a></li>
          <li><a href="#success-stories" class="nav-link" @click="closeMobileMenu">Success Stories</a></li>
          <li><a href="#methodology" class="nav-link" @click="closeMobileMenu">Methodology</a></li>
          <li><a href="#" class="nav-link" @click="closeMobileMenu">Channels</a></li>
        </ul>
      </div>

      <main>
        <!-- Hero Section -->
        <section id="home">
          <div class="container">
            <div class="hero-content reveal">
              <h1 class="gradient-title">AI-Driven Global E-commerce Consultancy</h1>
              <p>We help global brands achieve exponential growth in cross-border e-commerce through data-driven insights and proven methodologies.</p>
              <div class="hero-buttons">
                <a href="#leads-form" class="btn btn-primary">Start Your Growth Journey</a>
                <a href="#data-power" class="btn btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Data Power Section -->
        <section id="data-power">
          <div class="container">
            <h2 class="reveal">Data-Driven Insight</h2>
            <p class="section-subtitle reveal">Every strategic recommendation we make is rooted in deep learning and analysis of massive datasets.</p>
            <div class="stats-grid">
              <div class="stat-item reveal">
                <div class="stat-number" data-number="500">500M+</div>
                <div class="stat-label">Data Points Analyzed</div>
              </div>
              <div class="stat-item reveal">
                <div class="stat-number" data-number="98">98%</div>
                <div class="stat-label">Success Rate</div>
              </div>
              <div class="stat-item reveal">
                <div class="stat-number" data-number="50">50+</div>
                <div class="stat-label">Markets Covered</div>
              </div>
              <div class="stat-item reveal">
                <div class="stat-number" data-number="24">24/7</div>
                <div class="stat-label">Market Monitoring</div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Services Section -->
        <section id="our-services">
          <div class="container">
            <h2 class="reveal">Our Services: From Insight to Growth</h2>
            <p class="section-subtitle reveal">We provide end-to-end solutions, guiding your brand through every step from opportunity discovery to market success.</p>
            <div class="service-phase-grid">
              <div class="service-phase-card reveal">
                <div class="phase-number">01</div>
                <h3>Market Scanning & Opportunity Locking</h3>
                <p>We analyze massive datasets to identify the most promising market opportunities for your brand.</p>
              </div>
              <div class="service-phase-card reveal">
                <div class="phase-number">02</div>
                <h3>Deep Insight & Product Definition</h3>
                <p>Through comprehensive market research, we help you define products that resonate with your target audience.</p>
              </div>
              <div class="service-phase-card reveal">
                <div class="phase-number">03</div>
                <h3>Viability & Growth Path</h3>
                <p>We create detailed roadmaps that ensure sustainable growth and market penetration.</p>
              </div>
              <div class="service-phase-card reveal">
                <div class="phase-number">04</div>
                <h3>Platform Success & Continuous Optimization</h3>
                <p>Our ongoing optimization ensures your brand maintains competitive advantage and continues to grow.</p>
              </div>
            </div>
            <div class="services-cta">
              <a href="#leads-form" class="btn btn-primary">Explore Our Services</a>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve">
          <div class="container">
            <h2 class="reveal">Who We Serve</h2>
            <p class="section-subtitle reveal">We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.</p>
            <div class="serve-grid">
              <div class="serve-card reveal">
                <h3>Established Brands</h3>
                <p>Global companies looking to expand into new markets with data-driven strategies.</p>
              </div>
              <div class="serve-card reveal">
                <h3>Innovative Startups</h3>
                <p>Emerging brands with great products seeking rapid market entry and growth.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Stories Slider -->
        <section id="success-stories">
          <div class="container">
            <h2 class="reveal">Our Success Stories</h2>
            <p class="section-subtitle reveal">We don't just deliver strategies, we deliver measurable results.</p>
            <div class="case-slider-container reveal">
              <div class="case-slider-wrapper" :style="{ transform: 'translateX(' + (-currentSlide * 100) + '%)' }">
                <div class="case-card" v-for="(story, index) in successStories" :key="index">
                  <h3>{{ story.title }}</h3>
                  <p>{{ story.description }}</p>
                  <div class="case-metrics">
                    <div class="case-metric" v-for="metric in story.metrics" :key="metric.label">
                      <div class="metric-value">{{ metric.value }}</div>
                      <div class="metric-label">{{ metric.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="slider-nav prev" @click="prevSlide">
                <div class="slider-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </div>
              </button>
              <button class="slider-nav next" @click="nextSlide">
                <div class="slider-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>
              </button>
              <div class="slider-dots">
                <div 
                  v-for="(story, index) in successStories" 
                  :key="index"
                  class="slider-dot" 
                  :class="{ active: index === currentSlide }"
                  @click="goToSlide(index)"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  data() {
    return {
      currentLanguage: 'English',
      isMobileMenuOpen: false,
      currentSlide: 0,
      successStories: [
        {
          title: 'Portable Espresso Maker Launch',
          description: 'How we helped a lifestyle brand achieve 300% growth in their first year on Amazon.',
          metrics: [
            { value: '300%', label: 'Revenue Growth' },
            { value: '150%', label: 'Market Share' },
            { value: '4.8★', label: 'Customer Rating' }
          ]
        },
        {
          title: 'Fashion Brand China Entry',
          description: 'Successfully launched a European fashion brand in the Chinese market through Tmall.',
          metrics: [
            { value: '500%', label: 'Sales Increase' },
            { value: '50K+', label: 'New Customers' },
            { value: '6 months', label: 'ROI Timeline' }
          ]
        }
      ]
    }
  },
  methods: {
    setLanguage(lang) {
      const langMap = {
        'en': 'English',
        'ja': '日本語',
        'zh-Hant': '繁體中文',
        'zh-Hans': '简体中文'
      }
      this.currentLanguage = langMap[lang] || 'English'
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.successStories.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.successStories.length - 1 : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
    },
    initScrollAnimations() {
      const revealElements = document.querySelectorAll('.reveal')
      
      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
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
        // Fallback for older browsers
        revealElements.forEach(element => {
          element.classList.add('visible')
        })
      }
    }
  },
  mounted() {
    console.log('Original UCYX app mounted successfully!')
    
    // 隐藏加载动画
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
    
    // 初始化滚动动画
    this.initScrollAnimations()
  }
}

// 创建并挂载应用
try {
  const app = createApp(OriginalApp)
  app.mount('#app')
  console.log('UCYX Original App initialized!')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
  
  // 显示错误信息
  const appElement = document.getElementById('app')
  if (appElement) {
    appElement.innerHTML = `
      <div style="padding: 2rem; color: red; font-family: Arial, sans-serif;">
        <h1>Vue.js Error</h1>
        <p><strong>Error:</strong> ${error.message}</p>
        <p><strong>Stack:</strong></p>
        <pre style="background: #f5f5f5; padding: 1rem; overflow: auto;">${error.stack}</pre>
      </div>
    `
  }
}
