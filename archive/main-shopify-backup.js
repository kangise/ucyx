import { createApp } from 'vue'
import './assets/css/shopify-style.css'

const UCYXApp = {
  template: `
    <div id="app">
      <!-- Shopify-style Navigation -->
      <header class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">UCYX</a>
          
          <nav class="main-nav">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = 'start'" @mouseleave="clearMegaMenu">Start</a>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = 'choice'" @mouseleave="clearMegaMenu">Choice</a>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = 'sell'" @mouseleave="clearMegaMenu">Sell</a>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = 'manage'" @mouseleave="clearMegaMenu">Manage</a>
            </div>
          </nav>
          
          <div class="nav-actions">
            <a href="#login" class="login-link">Log in</a>
            <a href="#contact" class="cta-button">Start Your Growth Journey</a>
          </div>
        </div>
      </header>

      <!-- Shopify-style Solutions Mega Menu -->
      <div class="mega-menu-overlay" 
           v-show="showMegaMenu" 
           @mouseenter="keepMegaMenu = true"
           @mouseleave="hideMegaMenu">
        <div class="mega-menu-container">
          <div class="mega-menu-content">
            <div class="shopify-mega-grid">
              
              <!-- Start Module -->
              <div class="shopify-mega-card">
                <div class="mega-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>Start</h4>
                <div class="mega-divider"></div>
                <div class="mega-links">
                  <a href="#sell-china" class="mega-link-button">Sell to China</a>
                  <a href="#sell-world" class="mega-link-button">Sell to The World</a>
                </div>
              </div>

              <!-- Choice Module -->
              <div class="shopify-mega-card">
                <div class="mega-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="21 21l-4.35-4.35"/>
                    <circle cx="11" cy="11" r="3"/>
                  </svg>
                </div>
                <h4>Choice</h4>
                <div class="mega-divider"></div>
                <div class="mega-links">
                  <a href="/novochoice" class="mega-link-button">Novochoice</a>
                  <a href="#customized" class="mega-link-button">Customized Selection Service</a>
                </div>
              </div>

              <!-- Sell Module -->
              <div class="shopify-mega-card">
                <div class="mega-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h4>Sell</h4>
                <div class="mega-divider"></div>
                <div class="mega-links">
                  <a href="#copilot" class="mega-link-button">Seller Copilot Services</a>
                  <a href="#marketing" class="mega-link-button">Marketing Mix Optimization</a>
                </div>
              </div>

              <!-- Manage Module -->
              <div class="shopify-mega-card">
                <div class="mega-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h4>Manage</h4>
                <div class="mega-divider"></div>
                <div class="mega-links">
                  <a href="#customer-management" class="mega-link-button">Manage your Customer</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <main>
        <!-- Shopify-style Hero Section -->
        <section id="hero" class="hero-section">
          <div class="hero-container">
            <div class="hero-content">
              <h1 class="hero-title">See and Achieve the Extraordinary.</h1>
              <p class="hero-subtitle">UCYX is a future-focused, AI-driven consultancy dedicated to helping global brands uncover their unique "X-factor" and achieve sustainable, exponential growth in the complex cross-border e-commerce market.</p>
              <div class="hero-actions">
                <a href="#contact" class="btn-primary">Start Your Growth Journey</a>
                <a href="#methodology" class="btn-secondary">Talk to Our Experts</a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="product-showcase">
                <img src="https://placehold.co/600x400/008060/ffffff?text=UCYX+Platform+Demo" alt="UCYX Platform" />
              </div>
            </div>
          </div>
        </section>

        <!-- Trust Indicators -->
        <section id="trust-indicators" class="trust-section">
          <div class="trust-container">
            <div class="trust-stats">
              <div class="stat-item">
                <div class="stat-number">300+</div>
                <div class="stat-label">Core E-commerce Categories Monitored</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5M+</div>
                <div class="stat-label">Active Products Tracked</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">10M+</div>
                <div class="stat-label">Industry Keywords Analyzed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50M+</div>
                <div class="stat-label">Consumer Reviews Processed</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section -->
        <section id="solutions" class="solutions-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Everything you need to achieve extraordinary growth</h2>
              <p class="section-subtitle">Our comprehensive AI-driven methodology covers every aspect of your e-commerce journey.</p>
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
                <h3>Market Opportunity Assessment</h3>
                <p>Identify high-potential niche markets and competitive advantages using our proprietary UCniche™ model.</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">UCniche™</span>
                  <span class="highlight-tag">AI Analysis</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Product & Brand Strategy</h3>
                <p>Define compelling value propositions and brand narratives with our UCopps™ framework.</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">UCopps™</span>
                  <span class="highlight-tag">Brand Strategy</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h3>Go-to-Market & Launch</h3>
                <p>Execute successful launches across global platforms with integrated marketing solutions.</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">UCforecast™</span>
                  <span class="highlight-tag">Growth Path</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h3>Continuous Growth & Optimization</h3>
                <p>Achieve sustained growth with our UCcopilot™ AI-driven optimization system.</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">UCcopilot™</span>
                  <span class="highlight-tag">AI Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve" class="serve-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Who We Serve</h2>
              <p class="section-subtitle">We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.</p>
            </div>
            <div class="serve-grid">
              <div class="serve-card">
                <h3>Established Brands Seeking Expansion</h3>
                <p>You have successful products and a stable business but are eager to enter new countries or channels like Tmall Global to find your next growth curve. We help you mitigate risks and achieve efficient global expansion.</p>
              </div>
              <div class="serve-card">
                <h3>Startups with Great Products</h3>
                <p>You have created an outstanding product but lack the go-to-market strategy and brand marketing experience for platforms like Amazon or Shopify. We help you go from 0 to 1, transforming a great product into a successful global brand.</p>
              </div>
              <div class="serve-card">
                <h3>Pioneering Brands Exploring Web3</h3>
                <p>You recognize that Web3 and blockchain will reshape customer relationships and want to be a pioneer in the industry. We help you design and implement innovative NFT loyalty programs and business models.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Stories -->
        <section id="success-stories" class="stories-section">
          <div class="section-container">
            <div class="section-header">
              <h2>Our Success Stories</h2>
              <p class="section-subtitle">We don't just deliver strategies, we deliver measurable results.</p>
            </div>
            <div class="stories-slider-dual">
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
              <button class="slider-btn prev" @click="prevStory">‹</button>
              <button class="slider-btn next" @click="nextStory">›</button>
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
              <h2>The UCYX Value Growth Methodology™</h2>
              <p class="section-subtitle">We don't offer scattered advice. We deliver a systematic, verifiable blueprint for success.</p>
            </div>
            <div class="methodology-content">
              <div class="methodology-tabs">
                <div class="tab-item" 
                     v-for="(step, index) in methodologySteps" 
                     :key="index"
                     :class="{ active: currentMethodologyTab === index }"
                     @click="setMethodologyTab(index)">
                  <h4>{{ step.title }}</h4>
                  <p>Using our proprietary <strong>{{ step.tool }}</strong> model</p>
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
                <h2>Advanced Market Intelligence Platform</h2>
                <p>Novochoice is UCYX's advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce markets worldwide.</p>
                <a href="/novochoice" class="btn-primary">Learn More About Novochoice</a>
              </div>
              <div class="platform-visual">
                <div class="platform-logo">Novochoice</div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" class="contact-section">
          <div class="section-container">
            <div class="contact-header">
              <h2>Ready to achieve extraordinary growth?</h2>
              <p class="section-subtitle">Join hundreds of brands that have transformed their business with our methodology.</p>
            </div>
            <div class="contact-form-container">
              <form class="contact-form" @submit.prevent="handleFormSubmit">
                <div class="form-row">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.name" placeholder="Your Name" required>
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" placeholder="your@email.com" required>
                  </div>
                </div>
                <div class="form-group">
                  <label>Your Needs</label>
                  <textarea v-model="form.message" placeholder="Tell us about your business goals..." required></textarea>
                </div>
                <button type="submit" class="btn-primary" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Submitting...' : 'Start Free Consultation' }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <!-- Shopify-style Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#assessment">Market Assessment</a></li>
                <li><a href="#strategy">Brand Strategy</a></li>
                <li><a href="#launch">Go-to-Market</a></li>
                <li><a href="#optimization">Growth Optimization</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About UCYX</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#partners">Partners</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/novochoice">Novochoice Platform</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#webinars">Webinars</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#api">Developer API</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-legal">
              <p>&copy; 2025 UCYX Ltd. All rights reserved.</p>
              <div class="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
            
            <!-- Language Switcher in Footer -->
            <div class="language-switcher">
              <div class="current-language" @click="toggleLanguageMenu">
                <span>English</span>
                <svg class="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="language-menu" v-show="showLanguageMenu">
                <a href="#" class="active">English</a>
                <a href="#">简体中文</a>
                <a href="#">繁體中文</a>
                <a href="#">日本語</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  
  data() {
    return {
      showMegaMenu: false,
      keepMegaMenu: false,
      showLanguageMenu: false,
      currentStoryIndex: 0,
      currentMethodologyTab: 0,
      methodologyProgress: 0,
      methodologyTimer: null,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      successCases: [
        {
          brand: "North American Skincare Brand",
          title: "Entering the Asian Market from Scratch",
          description: "Using the UCniche™ model, we identified a high-potential niche market on Tmall Global. With UCopps™, we defined a product value proposition tailored to Asian consumer preferences, exceeding sales forecasts by 300% in the first month.",
          metric: "+300%",
          metricLabel: "First-Month Sales Target"
        },
        {
          brand: "European Smart Home Brand",
          title: "Reshaping User Loyalty with Web3",
          description: "We designed and implemented an NFT-based membership pass program, transforming core users into brand co-builders and increasing the repeat purchase rate by 50% within six months.",
          metric: "+50%",
          metricLabel: "Repeat Purchase Rate"
        },
        {
          brand: "Australian Health Food Brand",
          title: "Amazon New Product Launch Optimization",
          description: "Leveraging UCcopilot™ for intelligent ad campaign optimization, we increased the click-through conversion rate for their new product on Amazon US by 75% and reduced ACoS by 40%, without increasing the ad budget.",
          metric: "-40%",
          metricLabel: "Advertising Cost of Sales (ACoS)"
        },
        {
          brand: "Japanese Designer Stationery Brand",
          title: "Shopify DTC Sales Forecasting",
          description: "With the UCforecast™ model, we provided an accurate sales forecast for their new product line targeting the North American market. This helped optimize their inventory strategy, achieving a 95% sell-through rate for the initial stock.",
          metric: "95%",
          metricLabel: "Initial Stock Sell-Through Rate"
        }
      ],
      methodologySteps: [
        {
          title: "Market Scanning & Opportunity Locking",
          description: "Using our proprietary <strong>UCniche™</strong> Opportunity Quadrant Model, combined with AI data analysis, we quickly identify high-potential \"value basins\" from hundreds of niche markets for you.",
          tool: "UCniche™"
        },
        {
          title: "Deep Insight & Product Definition",
          description: "Through the <strong>UCopps™</strong> Value Proposition Canvas, we reverse-engineer competitor reviews and user pain points to co-create a product prototype with a compelling \"X-factor\".",
          tool: "UCopps™"
        },
        {
          title: "Viability & Growth Path",
          description: "Leveraging the <strong>UCforecast™</strong> sales prediction model for P&L scenario planning, we use the \"Brand Growth Path Matrix\" to map out a clear 1-to-N journey for your business.",
          tool: "UCforecast™"
        },
        {
          title: "Platform Success & Continuous Optimization",
          description: "With the <strong>UCcopilot™</strong> AI assistant, we continuously optimize your platform operations, advertising, and customer experience to ensure your brand not only launches successfully but thrives.",
          tool: "UCcopilot™"
        }
      ]
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

    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu
    },

    nextStory() {
      this.currentStoryIndex = (this.currentStoryIndex + 1) % this.storySlides.length
    },

    prevStory() {
      this.currentStoryIndex = this.currentStoryIndex === 0 ? this.storySlides.length - 1 : this.currentStoryIndex - 1
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
      const duration = 5000
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
    console.log('UCYX Shopify-style App initialized!')
    
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
  },

  beforeDestroy() {
    if (this.methodologyTimer) {
      clearInterval(this.methodologyTimer)
    }
  }
}

// Create and mount app
try {
  const app = createApp(UCYXApp)
  app.mount('#app')
  console.log('UCYX Shopify-style App mounted!')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
}
