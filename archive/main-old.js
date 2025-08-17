import { createApp } from 'vue'
import './assets/css/shopify-style.css'

// UCYX原有内容的翻译数据
const translations = {
  'en': {
    nav: {
      solutions: 'Solutions',
      login: 'Log in',
      cta: 'Start Your Growth Journey'
    },
    hero: {
      title: 'See and Achieve the Extraordinary.',
      subtitle: 'UCYX is a future-focused, AI-driven consultancy dedicated to helping global brands uncover their unique "X-factor" and achieve sustainable, exponential growth in the complex cross-border e-commerce market.',
      primaryCta: 'Start Your Growth Journey',
      secondaryCta: 'Talk to Our Experts'
    },
    trustIndicators: {
      stat1: { number: '300', suffix: '+', label: 'Core E-commerce Categories Monitored' },
      stat2: { number: '5', suffix: 'M+', label: 'Active Products Tracked' },
      stat3: { number: '10', suffix: 'M+', label: 'Industry Keywords Analyzed' },
      stat4: { number: '50', suffix: 'M+', label: 'Consumer Reviews Processed' }
    },
    solutions: {
      title: 'Everything you need to achieve extraordinary growth',
      subtitle: 'Our comprehensive AI-driven methodology covers every aspect of your e-commerce journey.',
      assessment: {
        title: 'Market Opportunity Assessment',
        description: 'Identify high-potential niche markets and competitive advantages using our proprietary UCniche™ model.'
      },
      strategy: {
        title: 'Product & Brand Strategy',
        description: 'Define compelling value propositions and brand narratives with our UCopps™ framework.'
      },
      launch: {
        title: 'Go-to-Market & Launch',
        description: 'Execute successful launches across global platforms with integrated marketing solutions.'
      },
      optimization: {
        title: 'Continuous Growth & Optimization',
        description: 'Achieve sustained growth with our UCcopilot™ AI-driven optimization system.'
      }
    },
    whoWeServe: {
      title: 'Who We Serve',
      subtitle: 'We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.',
      established: {
        title: 'Established Brands Seeking Expansion',
        description: 'You have successful products and a stable business but are eager to enter new countries or channels like Tmall Global to find your next growth curve.'
      },
      startups: {
        title: 'Startups with Great Products', 
        description: 'You have created an outstanding product but lack the go-to-market strategy and brand marketing experience for platforms like Amazon or Shopify.'
      },
      pioneers: {
        title: 'Pioneering Brands Exploring Web3',
        description: 'You recognize that Web3 and blockchain will reshape customer relationships and want to be a pioneer in the industry.'
      }
    },
    successStories: {
      title: 'Our Success Stories',
      subtitle: "We don't just deliver strategies, we deliver measurable results."
    },
    methodology: {
      title: 'The UCYX Value Growth Methodology™',
      subtitle: "We don't offer scattered advice. We deliver a systematic, verifiable blueprint for success."
    },
    novochoice: {
      title: 'Advanced Market Intelligence Platform',
      description: 'Novochoice is UCYX\'s advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce markets worldwide.',
      cta: 'Learn More About Novochoice'
    },
    contact: {
      title: 'Ready to achieve extraordinary growth?',
      subtitle: 'Join hundreds of brands that have transformed their business with our methodology.',
      formTitle: 'Start Your Growth Journey',
      formSubtitle: 'Leave your information, and our experts will contact you within 24 hours.',
      name: 'Name',
      email: 'Email', 
      message: 'Your Needs',
      submit: 'Start Free Consultation'
    },
    footer: {
      solutions: 'Solutions',
      company: 'Company',
      resources: 'Resources',
      support: 'Support'
    }
  },
  'zh-CN': {
    nav: {
      solutions: '解决方案',
      pricing: '定价',
      resources: '资源',
      enterprise: '企业版',
      whatsNew: '最新动态',
      login: '登录',
      cta: '开启增长之旅'
    },
    hero: {
      title: '看见并成就非凡。',
      subtitle: 'UCYX 是一家由AI驱动的未来型顾问公司，致力于帮助全球品牌发掘其独一无二的「X-factor」，在复杂的跨境电商市场中，实现可持续的指数级增长。',
      primaryCta: '开启您的增长之旅',
      secondaryCta: '咨询专家'
    }
  },
  'zh-TW': {
    nav: {
      solutions: '解決方案',
      pricing: '定價',
      resources: '資源',
      enterprise: '企業版',
      whatsNew: '最新動態',
      login: '登入',
      cta: '開啟增長之旅'
    },
    hero: {
      title: '看見並成就非凡。',
      subtitle: 'UCYX 是一家由AI驅動的未來型顧問公司，致力於幫助全球品牌發掘其獨一無二的「X-factor」，在複雜的跨境電商市場中，實現可持續的指數級增長。',
      primaryCta: '開啟您的增長之旅',
      secondaryCta: '諮詢專家'
    }
  },
  'ja': {
    nav: {
      solutions: 'ソリューション',
      pricing: '料金',
      resources: 'リソース',
      enterprise: 'エンタープライズ',
      whatsNew: '最新情報',
      login: 'ログイン',
      cta: '成長の旅を始める'
    },
    hero: {
      title: '非凡を見て、達成する。',
      subtitle: 'UCYXは、グローバルブランドが独自の「X-factor」を発見し、複雑な越境ECマーケットで持続可能な指数関数的成長を達成することを支援する、未来志向のAI駆動型コンサルタンシーです。',
      primaryCta: '成長の旅を始める',
      secondaryCta: '専門家に相談'
    }
  }
}

const UCYXApp = {
  template: `
    <div id="app">
      <!-- Shopify-style Navigation -->
      <header class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">UCYX</a>
          
          <nav class="main-nav">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = true" @mouseleave="clearMegaMenu">{{ $t('nav.solutions') }}</a>
            </div>
          </nav>
          
          <!-- Full-screen Mega Menu -->
          <div class="mega-menu-overlay" 
               v-show="showMegaMenu" 
               @mouseenter="showMegaMenu = true"
               @mouseleave="showMegaMenu = false">
            <div class="mega-menu-container">
              <div class="mega-menu-content">
                <div class="mega-menu-header">
                  <h3>Our AI-Driven Solutions</h3>
                  <p>Comprehensive tools to transform your e-commerce growth</p>
                </div>
                <div class="mega-menu-grid">
                  <div class="mega-solution-card">
                    <div class="solution-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="21 21l-4.35-4.35"/>
                        <circle cx="11" cy="11" r="3"/>
                      </svg>
                    </div>
                    <h4>Market Opportunity Assessment</h4>
                    <p>Identify high-potential niche markets using our proprietary UCniche™ Opportunity Quadrant Model</p>
                    <ul>
                      <li>Niche market potential analysis</li>
                      <li>Competitive landscape evaluation</li>
                      <li>Unmet consumer needs insight</li>
                    </ul>
                    <a href="#assessment" class="mega-cta">Learn More →</a>
                  </div>
                  
                  <div class="mega-solution-card">
                    <div class="solution-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4>Product & Brand Strategy</h4>
                    <p>Define compelling value propositions with our UCopps™ Value Proposition Canvas</p>
                    <ul>
                      <li>Product value proposition definition</li>
                      <li>Brand story & content framework</li>
                      <li>Business viability assessment</li>
                    </ul>
                    <a href="#strategy" class="mega-cta">Learn More →</a>
                  </div>
                  
                  <div class="mega-solution-card">
                    <div class="solution-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M3 3v18h18"/>
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                      </svg>
                    </div>
                    <h4>Growth Forecasting</h4>
                    <p>Predict and plan your growth trajectory with UCforecast™ sales prediction model</p>
                    <ul>
                      <li>P&L scenario planning</li>
                      <li>Brand Growth Path Matrix</li>
                      <li>1-to-N journey mapping</li>
                    </ul>
                    <a href="#forecasting" class="mega-cta">Learn More →</a>
                  </div>
                  
                  <div class="mega-solution-card">
                    <div class="solution-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                      </svg>
                    </div>
                    <h4>AI-Driven Optimization</h4>
                    <p>Continuous growth optimization with our UCcopilot™ AI assistant</p>
                    <ul>
                      <li>Platform operations optimization</li>
                      <li>Advertising campaign management</li>
                      <li>Customer experience improvement</li>
                    </ul>
                    <a href="#optimization" class="mega-cta">Learn More →</a>
                  </div>
                </div>
                
                <div class="mega-menu-footer">
                  <div class="mega-footer-content">
                    <div class="mega-footer-section">
                      <h5>Ready to get started?</h5>
                      <p>Join 500+ brands achieving extraordinary growth</p>
                      <a href="#contact" class="btn-primary">Start Your Journey</a>
                    </div>
                    <div class="mega-footer-section">
                      <h5>Success Stories</h5>
                      <div class="mini-stats">
                        <div class="mini-stat">
                          <span class="stat-number">300%</span>
                          <span class="stat-label">Avg Growth</span>
                        </div>
                        <div class="mini-stat">
                          <span class="stat-number">50+</span>
                          <span class="stat-label">Markets</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="nav-actions">
            <a href="#login" class="login-link">{{ $t('nav.login') }}</a>
            <a href="#contact" class="cta-button">{{ $t('nav.cta') }}</a>
          </div>
        </div>
      </header>

      <main>
        <!-- Shopify-style Hero Section -->
        <section id="hero" class="hero-section">
          <div class="hero-container">
            <div class="hero-content">
              <h1 class="hero-title">{{ $t('hero.title') }}</h1>
              <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
              <div class="hero-actions">
                <a href="#contact" class="btn-primary">{{ $t('hero.primaryCta') }}</a>
                <a href="#methodology" class="btn-secondary">{{ $t('hero.secondaryCta') }}</a>
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
              <div class="stat-item" v-for="(stat, index) in trustStats" :key="index">
                <div class="stat-number">{{ animatedNumbers[index] || 0 }}{{ stat.suffix }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section -->
        <section id="solutions" class="solutions-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ $t('solutions.title') }}</h2>
              <p class="section-subtitle">{{ $t('solutions.subtitle') }}</p>
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
                <h3>{{ $t('solutions.assessment.title') }}</h3>
                <p>{{ $t('solutions.assessment.description') }}</p>
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
                <h3>{{ $t('solutions.strategy.title') }}</h3>
                <p>{{ $t('solutions.strategy.description') }}</p>
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
                <h3>{{ $t('solutions.launch.title') }}</h3>
                <p>{{ $t('solutions.launch.description') }}</p>
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
                <h3>{{ $t('solutions.optimization.title') }}</h3>
                <p>{{ $t('solutions.optimization.description') }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">UCcopilot™</span>
                  <span class="highlight-tag">AI Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Who We Serve -->
        <section id="who-we-serve" class="serve-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ $t('whoWeServe.title') }}</h2>
              <p class="section-subtitle">{{ $t('whoWeServe.subtitle') }}</p>
            </div>
            <div class="serve-grid">
              <div class="serve-card">
                <h3>{{ $t('whoWeServe.established.title') }}</h3>
                <p>{{ $t('whoWeServe.established.description') }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ $t('whoWeServe.startups.title') }}</h3>
                <p>{{ $t('whoWeServe.startups.description') }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ $t('whoWeServe.pioneers.title') }}</h3>
                <p>{{ $t('whoWeServe.pioneers.description') }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Stories -->
        <section id="success-stories" class="stories-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ $t('successStories.title') }}</h2>
              <p class="section-subtitle">{{ $t('successStories.subtitle') }}</p>
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

        <!-- Methodology -->
        <section id="methodology" class="methodology-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ $t('methodology.title') }}</h2>
              <p class="section-subtitle">{{ $t('methodology.subtitle') }}</p>
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
                <h2>{{ $t('novochoice.title') }}</h2>
                <p>{{ $t('novochoice.description') }}</p>
                <a href="/novochoice" class="btn-primary">{{ $t('novochoice.cta') }}</a>
              </div>
              <div class="platform-visual">
                <div class="platform-logo">Novochoice</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section id="contact" class="contact-section">
          <div class="section-container">
            <div class="contact-header">
              <h2>{{ $t('contact.title') }}</h2>
              <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
            </div>
            <div class="contact-form-container">
              <form class="contact-form" @submit.prevent="handleFormSubmit">
                <div class="form-row">
                  <div class="form-group">
                    <label>{{ $t('contact.name') }}</label>
                    <input type="text" v-model="form.name" :placeholder="$t('contact.name')" required>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('contact.email') }}</label>
                    <input type="email" v-model="form.email" :placeholder="$t('contact.email')" required>
                  </div>
                </div>
                <div class="form-group">
                  <label>{{ $t('contact.message') }}</label>
                  <textarea v-model="form.message" :placeholder="$t('contact.message')" required></textarea>
                </div>
                <button type="submit" class="btn-primary" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Submitting...' : $t('contact.submit') }}
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
              <h4>{{ $t('footer.solutions') }}</h4>
              <ul>
                <li><a href="#assessment">Market Assessment</a></li>
                <li><a href="#strategy">Brand Strategy</a></li>
                <li><a href="#launch">Go-to-Market</a></li>
                <li><a href="#optimization">Growth Optimization</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ $t('footer.company') }}</h4>
              <ul>
                <li><a href="#about">About UCYX</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#partners">Partners</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ $t('footer.resources') }}</h4>
              <ul>
                <li><a href="/novochoice">Novochoice Platform</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#webinars">Webinars</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ $t('footer.support') }}</h4>
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
                <span>{{ currentLanguageName }}</span>
                <svg class="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="language-menu" v-show="showLanguageMenu">
                <a href="#" v-for="lang in languages" :key="lang.code" 
                   @click="setLanguage(lang.code)"
                   :class="{ active: lang.code === currentLanguage }">
                  {{ lang.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  
  data() {
    return {
      currentLanguage: 'en',
      showLanguageMenu: false,
      showMegaMenu: false,
      keepMegaMenu: false,
      currentStoryIndex: 0,
      currentMethodologyTab: 0,
      methodologyProgress: 0,
      methodologyTimer: null,
      animatedNumbers: {},
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      languages: [
        { code: 'en', name: 'English' },
        { code: 'zh-CN', name: '简体中文' },
        { code: 'zh-TW', name: '繁體中文' },
        { code: 'ja', name: '日本語' }
      ],
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
    currentLanguageName() {
      const lang = this.languages.find(l => l.code === this.currentLanguage)
      return lang ? lang.name : 'English'
    },
    trustStats() {
      return [
        this.$t('trustIndicators.stat1'),
        this.$t('trustIndicators.stat2'), 
        this.$t('trustIndicators.stat3'),
        this.$t('trustIndicators.stat4')
      ]
    },
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
    $t(key) {
      const keys = key.split('.')
      let value = translations[this.currentLanguage]
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k]
        } else {
          return key
        }
      }
      
      return value || key
    },

    setLanguage(langCode) {
      this.currentLanguage = langCode
      this.showLanguageMenu = false
      localStorage.setItem('ucyx-language', langCode)
    },

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

    animateNumbers() {
      this.trustStats.forEach((stat, index) => {
        const target = parseInt(stat.number)
        let current = 0
        const increment = target / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          this.animatedNumbers[index] = Math.floor(current)
        }, 33)
      })
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
    // Load saved language
    const savedLang = localStorage.getItem('ucyx-language')
    if (savedLang && this.languages.find(l => l.code === savedLang)) {
      this.currentLanguage = savedLang
    }

    // Start animations
    setTimeout(() => {
      this.animateNumbers()
      this.startMethodologyProgress()
    }, 1000)

    // Hide loading
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.style.opacity = '0'
        setTimeout(() => loading.remove(), 300)
      }
    }, 500)
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
  console.log('UCYX Shopify-style App initialized!')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
}
