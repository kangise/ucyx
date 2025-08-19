import { createApp } from 'vue'
import './assets/css/variables.css'
import './assets/css/components.css'
import './assets/css/modern-style.css'
import './assets/css/mobile-all.css'
import './assets/js/language.js'

const UCYXApp = {
  template: `
    <div id="app">
      <!-- Modern Navigation -->
      <header class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">UCYX</a>
          
          <!-- Desktop Navigation -->
          <nav class="main-nav">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" @mouseenter="showMegaMenu = true" @mouseleave="clearMegaMenu">{{ safeT.nav.services }}</a>
            </div>
            <a href="#who-we-serve" class="nav-link">{{ safeT.nav.whoWeServe }}</a>
            <a href="#success-stories" class="nav-link">{{ safeT.nav.successStories }}</a>
            <a href="#methodology" class="nav-link">{{ safeT.nav.methodology }}</a>
            <a href="/novochoice" class="nav-link">{{ safeT.megaMenu.novochoice }}</a>
          </nav>
          
          <!-- Desktop Actions -->
          <div class="nav-actions">
            <a href="#login" class="login-link">{{ safeT.nav.login }}</a>
            <a href="#contact" class="cta-button">{{ safeT.hero.cta }}</a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: showMobileMenu }">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay" v-show="showMobileMenu" @click="closeMobileMenu"></div>
        
        <!-- Mobile Menu -->
        <nav class="mobile-menu" :class="{ active: showMobileMenu }">
          <div class="mobile-menu-header">
            <div class="mobile-logo">UCYX</div>
            <button class="mobile-close-btn" @click="closeMobileMenu">
              <span class="close-icon">×</span>
            </button>
          </div>
          
          <div class="mobile-menu-content">
            <!-- Services Accordion -->
            <div class="mobile-menu-item">
              <button class="mobile-menu-link accordion-trigger" @click="toggleMobileServices">
                <span>{{ safeT.nav.services }}</span>
                <span class="accordion-arrow" :class="{ active: showMobileServices }">▼</span>
              </button>
              <div class="mobile-submenu" :class="{ active: showMobileServices }">
                <!-- Start 子菜单 -->
                <div class="mobile-submenu-item">
                  <button class="mobile-submenu-link accordion-trigger" @click="toggleMobileStart">
                    <span>{{ safeT.megaMenu.start }}</span>
                    <span class="accordion-arrow" :class="{ active: showMobileStart }">▼</span>
                  </button>
                  <div class="mobile-submenu mobile-submenu-level3" :class="{ active: showMobileStart }">
                    <a href="#sell-china" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.sellToChina }}</a>
                    <a href="#sell-world" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.sellToWorld }}</a>
                  </div>
                </div>
                
                <!-- Choice 子菜单 -->
                <div class="mobile-submenu-item">
                  <button class="mobile-submenu-link accordion-trigger" @click="toggleMobileChoice">
                    <span>{{ safeT.megaMenu.choice }}</span>
                    <span class="accordion-arrow" :class="{ active: showMobileChoice }">▼</span>
                  </button>
                  <div class="mobile-submenu mobile-submenu-level3" :class="{ active: showMobileChoice }">
                    <a href="#platform-selection" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.platformSelection }}</a>
                    <a href="#market-research" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.marketResearch }}</a>
                  </div>
                </div>
                
                <!-- Sell 子菜单 -->
                <div class="mobile-submenu-item">
                  <button class="mobile-submenu-link accordion-trigger" @click="toggleMobileSell">
                    <span>{{ safeT.megaMenu.sell }}</span>
                    <span class="accordion-arrow" :class="{ active: showMobileSell }">▼</span>
                  </button>
                  <div class="mobile-submenu mobile-submenu-level3" :class="{ active: showMobileSell }">
                    <a href="#store-setup" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.storeSetup }}</a>
                    <a href="#product-listing" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.productListing }}</a>
                  </div>
                </div>
                
                <!-- Manage 子菜单 -->
                <div class="mobile-submenu-item">
                  <button class="mobile-submenu-link accordion-trigger" @click="toggleMobileManage">
                    <span>{{ safeT.megaMenu.manage }}</span>
                    <span class="accordion-arrow" :class="{ active: showMobileManage }">▼</span>
                  </button>
                  <div class="mobile-submenu mobile-submenu-level3" :class="{ active: showMobileManage }">
                    <a href="#order-management" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.orderManagement }}</a>
                    <a href="#customer-service" class="mobile-submenu-link" @click="closeMobileMenu">{{ safeT.megaMenu.customerService }}</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mobile-menu-item">
              <a href="#who-we-serve" class="mobile-menu-link" @click="closeMobileMenu">{{ safeT.nav.whoWeServe }}</a>
            </div>
            
            <div class="mobile-menu-item">
              <a href="#success-stories" class="mobile-menu-link" @click="closeMobileMenu">{{ safeT.nav.successStories }}</a>
            </div>
            
            <div class="mobile-menu-item">
              <a href="#methodology" class="mobile-menu-link" @click="closeMobileMenu">{{ safeT.nav.methodology }}</a>
            </div>
            
            <div class="mobile-menu-item">
              <a href="/novochoice" class="mobile-menu-link" @click="closeMobileMenu">{{ safeT.megaMenu.novochoice }}</a>
            </div>
            
            <div class="mobile-menu-divider"></div>
            
            <div class="mobile-menu-item">
              <a href="#login" class="mobile-menu-link" @click="closeMobileMenu">{{ safeT.nav.login }}</a>
            </div>
            
            <div class="mobile-menu-item">
              <a href="#contact" class="mobile-menu-cta" @click="closeMobileMenu">{{ safeT.hero.cta }}</a>
            </div>
          </div>
        </nav>
      </header>

      <!-- Modern Solutions Mega Menu -->
      <div class="mega-menu-fullwidth" 
           v-show="showMegaMenu" 
           @mouseenter="keepMegaMenu = true"
           @mouseleave="hideMegaMenu">
        <div class="mega-menu-container">
          <!-- SVG Gradient Definition -->
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
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>{{ safeT.megaMenu.start }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#sell-china" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.sellToChina }}</div>
                    <div class="service-value">{{ safeT.megaMenu.reachConsumers }}</div>
                  </a>
                  <a href="#sell-world" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.sellToWorld }}</div>
                    <div class="service-value">{{ safeT.megaMenu.globalExpansion }}</div>
                  </a>
                </div>
              </div>

              <!-- Choice Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <circle cx="11" cy="11" r="3"/>
                  </svg>
                </div>
                <h4>{{ safeT.megaMenu.choice }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="/novochoice" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.novochoice }}</div>
                    <div class="service-value">{{ safeT.megaMenu.aiPoweredIntelligence }}</div>
                  </a>
                  <a href="#customized" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.customizedSelection }}</div>
                    <div class="service-value">{{ safeT.megaMenu.tailoredRecommendations }}</div>
                  </a>
                </div>
              </div>

              <!-- Sell Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h4>{{ safeT.megaMenu.sell }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#copilot" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.sellerCopilot }}</div>
                    <div class="service-value">{{ safeT.megaMenu.aiDrivenOptimization }}</div>
                  </a>
                  <a href="#marketing" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.marketingMix }}</div>
                    <div class="service-value">{{ safeT.megaMenu.maximizeROI }}</div>
                  </a>
                </div>
              </div>

              <!-- Manage Module -->
              <div class="modern-mega-card">
                <div class="mega-icon-full">
                  <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="url(#greenBlackGradient)" strokeWidth="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h4>{{ safeT.megaMenu.manage }}</h4>
                <div class="mega-divider"></div>
                <div class="mega-links-full">
                  <a href="#customer-management" class="mega-service-link">
                    <div class="service-name">{{ safeT.megaMenu.manageCustomer }}</div>
                    <div class="service-value">{{ safeT.megaMenu.buildRelationships }}</div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <!-- Bottom section: gray background with 3 horizontal links -->
        <div class="mega-menu-footer">
          <div class="mega-footer-content">
            <a href="#contact" class="mega-footer-item">
              <span>{{ safeT.megaMenu.startConsultation }}</span>
            </a>
            <div class="mega-footer-divider"></div>
            <a href="#blog" class="mega-footer-item">
              <span>{{ safeT.megaMenu.visitBlog }}</span>
            </a>
            <div class="mega-footer-divider"></div>
            <a href="#methodology" class="mega-footer-item">
              <span>{{ safeT.megaMenu.learnMethodology }}</span>
            </a>
          </div>
        </div>
      </div>

      <main>
        <!-- Full-screen Hero Section with Background -->
        <section id="hero" class="hero-section-fullscreen">
          <div class="hero-overlay"></div>
          <div class="hero-content-center">
            <div class="hero-title-container">
              <div class="hero-title-line1">{{ safeT.hero.titleLine1 }}</div>
              <div class="hero-title-line2">{{ safeT.hero.titleLine2 }}</div>
            </div>
            <p class="hero-subtitle-large">{{ safeT.hero.subtitle }}</p>
            <div class="hero-actions-center">
              <a href="#contact" class="btn-primary-large">{{ safeT.hero.cta }}</a>
              <a href="#methodology" class="btn-secondary-large">{{ safeT.hero.learnMore }}</a>
            </div>
          </div>
        </section>

        <!-- Trust Indicators -->
        <section id="trust-indicators" class="trust-section">
          <div class="trust-container">
            <div class="trust-stats">
              <div class="stat-item">
                <div class="stat-number">{{ safeT.dataPower.stat1.number }}{{ safeT.dataPower.stat1.suffix }}</div>
                <div class="stat-label">{{ safeT.dataPower.stat1.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ safeT.dataPower.stat2.number }}{{ safeT.dataPower.stat2.suffix }}</div>
                <div class="stat-label">{{ safeT.dataPower.stat2.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ safeT.dataPower.stat3.number }}{{ safeT.dataPower.stat3.suffix }}</div>
                <div class="stat-label">{{ safeT.dataPower.stat3.label }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ safeT.dataPower.stat4.number }}{{ safeT.dataPower.stat4.suffix }}</div>
                <div class="stat-label">{{ safeT.dataPower.stat4.label }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Solutions Section with more bottom spacing -->
        <section id="solutions" class="solutions-section-spaced">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ safeT.services.title }}</h2>
              <p class="section-subtitle">{{ safeT.services.subtitle }}</p>
            </div>
            <div class="solutions-grid-large">
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <circle cx="11" cy="11" r="3"/>
                  </svg>
                </div>
                <h3>{{ safeT.services.feature1.title }}</h3>
                <p>{{ safeT.services.feature1.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ safeT.services.feature1.tag1 }}</span>
                  <span class="highlight-tag">{{ safeT.services.feature1.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>{{ safeT.services.feature2.title }}</h3>
                <p>{{ safeT.services.feature2.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ safeT.services.feature2.tag1 }}</span>
                  <span class="highlight-tag">{{ safeT.services.feature2.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                  </svg>
                </div>
                <h3>{{ safeT.services.feature3.title }}</h3>
                <p>{{ safeT.services.feature3.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ safeT.services.feature3.tag1 }}</span>
                  <span class="highlight-tag">{{ safeT.services.feature3.tag2 }}</span>
                </div>
              </div>
              <div class="solution-feature-card-large">
                <div class="feature-icon-large">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.72V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <h3>{{ safeT.services.feature4.title }}</h3>
                <p>{{ safeT.services.feature4.description }}</p>
                <div class="feature-highlights">
                  <span class="highlight-tag">{{ safeT.services.feature4.tag1 }}</span>
                  <span class="highlight-tag">{{ safeT.services.feature4.tag2 }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Who We Serve Section -->
        <section id="who-we-serve" class="serve-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ safeT.whoWeServe.title }}</h2>
              <p class="section-subtitle">{{ safeT.whoWeServe.subtitle }}</p>
            </div>
            <div class="serve-grid">
              <div class="serve-card">
                <h3>{{ safeT.whoWeServe.card1.title }}</h3>
                <p>{{ safeT.whoWeServe.card1.description }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ safeT.whoWeServe.card2.title }}</h3>
                <p>{{ safeT.whoWeServe.card2.description }}</p>
              </div>
              <div class="serve-card">
                <h3>{{ safeT.whoWeServe.card3.title }}</h3>
                <p>{{ safeT.whoWeServe.card3.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Success Stories -->
        <section id="success-stories" class="stories-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ safeT.successStories.title }}</h2>
              <p class="section-subtitle">{{ safeT.successStories.subtitle }}</p>
            </div>
            <!-- First layer: outer positioning container -->
            <div class="stories-slider-dual-wide">
              <!-- Second layer: content display container -->
              <div class="story-content-container" 
                   @touchstart="handleTouchStart"
                   @touchmove="handleTouchMove" 
                   @touchend="handleTouchEnd">
                <!-- Third layer: content track -->
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
              <!-- Fourth layer: independent control button layer -->
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
        </section>

        <!-- Methodology Section -->
        <section id="methodology" class="methodology-section">
          <div class="section-container">
            <div class="section-header">
              <h2>{{ safeT.methodology.title }}</h2>
              <p class="section-subtitle">{{ safeT.methodology.subtitle }}</p>
            </div>
            <div class="methodology-content">
              <div class="methodology-tabs">
                <div class="tab-item" 
                     v-for="(step, index) in methodologySteps" 
                     :key="index"
                     :class="{ active: currentMethodologyTab === index }"
                     @click="setMethodologyTab(index)">
                  <h4>{{ step.title }}</h4>
                  <p>{{ safeT.methodology.usingProprietaryModel }} <strong>{{ step.tool }}</strong> {{ safeT.methodology.model }}</p>
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
                <h2>{{ safeT.brands.title }}</h2>
                <p>{{ safeT.brands.description }}</p>
                <a href="/novochoice" class="btn-primary">{{ safeT.brands.cta }}</a>
              </div>
              <div class="platform-visual">
                <div class="platform-logo">{{ safeT.brands.novochoiceTitle }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section id="contact" class="contact-section">
          <div class="section-container">
            <div class="contact-header">
              <h2>{{ safeT.contact.readyTitle }}</h2>
              <p class="section-subtitle">{{ safeT.contact.readySubtitle }}</p>
            </div>
            <div class="contact-form-container-wide">
              <form class="contact-form-wide" @submit.prevent="handleFormSubmit">
                <div class="form-row-wide">
                  <div class="form-group">
                    <label>{{ safeT.form.name }}</label>
                    <input type="text" v-model="form.name" :placeholder="safeT.form.namePlaceholder" required>
                  </div>
                  <div class="form-group">
                    <label>{{ safeT.form.email }}</label>
                    <input type="email" v-model="form.email" :placeholder="safeT.form.emailPlaceholder" required>
                  </div>
                </div>
                <div class="form-group">
                  <label>{{ safeT.form.message }}</label>
                  <textarea v-model="form.message" :placeholder="safeT.form.messagePlaceholder" required></textarea>
                </div>
                <button type="submit" class="btn-primary-wide" :disabled="isSubmitting">
                  {{ isSubmitting ? safeT.contact.submitting : safeT.form.submit }}
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
              <h4>{{ safeT.megaMenu.start }}</h4>
              <ul>
                <li><a href="#sell-china">{{ safeT.footerExtra.sellToChina }}</a></li>
                <li><a href="#sell-world">{{ safeT.footerExtra.sellToWorld }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ safeT.megaMenu.choice }}</h4>
              <ul>
                <li><a href="/novochoice">{{ safeT.megaMenu.novochoice }}</a></li>
                <li><a href="#customized">{{ safeT.megaMenu.customizedSelection }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ safeT.megaMenu.sell }}</h4>
              <ul>
                <li><a href="#copilot">{{ safeT.footerExtra.sellerCopilot }}</a></li>
                <li><a href="#marketing">{{ safeT.footerExtra.marketingMix }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ safeT.megaMenu.manage }}</h4>
              <ul>
                <li><a href="#customer-management">{{ safeT.footerExtra.manageCustomer }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ safeT.footer.company }}</h4>
              <ul>
                <li><a href="#about">{{ safeT.footerExtra.aboutUCYX }}</a></li>
                <li><a href="#careers">{{ safeT.footer.careers }}</a></li>
                <li><a href="#partners">{{ safeT.footerExtra.partners }}</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>{{ safeT.footer.resources }}</h4>
              <ul>
                <li><a href="/novochoice">{{ safeT.footerExtra.novochoicePlatform }}</a></li>
                <li><a href="#blog">{{ safeT.footer.blog }}</a></li>
                <li><a href="#case-studies">{{ safeT.footer.cases }}</a></li>
                <li><a href="#webinars">{{ safeT.footer.webinars }}</a></li>
              </ul>
              <h4 style="margin-top: 24px;">{{ safeT.footerExtra.support }}</h4>
              <ul>
                <li><a href="#help">{{ safeT.footerExtra.helpCenter }}</a></li>
                <li><a href="#contact">{{ safeT.footerExtra.contactUs }}</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-legal">
              <p>{{ safeT.footerExtra.copyright }}</p>
              <div class="legal-links">
                <a href="#privacy">{{ safeT.footer.privacy }}</a>
                <a href="#terms">{{ safeT.footer.terms }}</a>
              </div>
            </div>
            <div class="language-selector">
              <button class="language-toggle" @click="showLanguageMenu = !showLanguageMenu">
                <span class="current-language-name">{{ safeT.language.current }}</span>
                <span class="language-arrow">{{ showLanguageMenu ? '▲' : '▼' }}</span>
              </button>
              <div class="language-menu" :class="{ show: showLanguageMenu }">
                <div v-for="(lang, code) in supportedLanguages" :key="code" 
                     class="language-option" 
                     :class="{ active: currentLanguage === code }"
                     @click="changeLanguage(code)">
                  <span class="language-name">{{ lang.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  
  data() {
    return {
      // 多语言相关数据 - 初始为空，由languageManager填充
      t: {},
      currentLanguage: 'en',
      supportedLanguages: {
        'en': { name: 'English' },
        'zh-cn': { name: '中文简体' },
        'zh-tw': { name: '中文繁體' },
        'ja': { name: '日本語' }
      },
      showLanguageMenu: false,
      
      // 现有数据保持不变
      showMegaMenu: false,
      keepMegaMenu: false,
      
      // 移动端菜单状态
      showMobileMenu: false,
      showMobileServices: false,
      showMobileStart: false,
      showMobileChoice: false,
      showMobileSell: false,
      showMobileManage: false,
      
      currentStoryIndex: 0,
      storyTimer: null,
      
      // 触摸滑动状态
      touchStartX: null,
      touchStartY: null,
      isSwiping: false,
      
      currentMethodologyTab: 0,
      methodologyProgress: 0,
      methodologyTimer: null,
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      // 动态数据，将在语言加载后更新
      successCases: [],
      methodologySteps: [],
      
      // 响应式窗口大小
      windowWidth: window.innerWidth
    }
  },

  computed: {
    // 安全的翻译对象访问
    safeT() {
      if (!this.t || Object.keys(this.t).length === 0) {
        return {
          nav: { services: 'Services', whoWeServe: 'Who We Serve', successStories: 'Success Stories', methodology: 'Methodology', login: 'Log in' },
          hero: { titleLine1: 'You See Your', titleLine2: 'Extraordinary.', subtitle: 'UCYX is a future-focused, AI-driven consultancy dedicated to helping brands uncover unique "X-trodinary" in the complex cross-border e-commerce market.', cta: 'Start Your Growth Journey', learnMore: 'Discover Our Methodology' },
          megaMenu: { novochoice: 'Novochoice', start: 'Start', choice: 'Choice', sell: 'Sell', manage: 'Manage' },
          dataPower: { 
            stat1: { number: '300', suffix: '+', label: 'Core E-commerce Categories Monitored' },
            stat2: { number: '5', suffix: 'M+', label: 'Active Products Tracked' },
            stat3: { number: '10', suffix: 'M+', label: 'Industry Keywords Analyzed' },
            stat4: { number: '50', suffix: 'M+', label: 'Consumer Reviews Processed' }
          },
          services: { 
            title: 'Everything you need to achieve extraordinary growth', subtitle: 'Our comprehensive AI-driven methodology covers every aspect of your e-commerce journey.', 
            feature1: { title: 'Novochoice', description: 'Discover high-potential niches with Novochoice™ Opportunity Quadrant, powered by AI analysis of massive datasets.', tag1: 'Novochoice™', tag2: 'AI analysis' },
            feature2: { title: 'Brand Smart', description: 'Through the UCselection™ Value Proposition Canvas, co-create a product prototype with a compelling "X-factor".', tag1: 'UCselection™', tag2: 'Brand Strategy' },
            feature3: { title: 'Launch to Win', description: 'Execute successful launches across global platforms with integrated marketing solutions.', tag1: 'UCforecast™', tag2: 'Growth Path' },
            feature4: { title: 'Lasting Success', description: 'Achieve sustained growth with our UCcopilot™ AI-driven optimization system.', tag1: 'UCcopilot™', tag2: 'AI Optimization' }
          },
          whoWeServe: { 
            title: 'Who We Serve', subtitle: 'We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.', 
            card1: { title: 'Established Brands', description: 'You have successful products and a stable business but are eager to enter new markets to find your next growth curve.' },
            card2: { title: 'Startups with Great Ideas', description: 'You have created an outstanding ideas but lack the approach to turn into product and brand.' },
            card3: { title: 'Traditional Manufacture', description: 'You have a great product but lack the go-to-market strategy and brand marketing experience for platforms like Amazon or Shopify.' }
          },
          successStories: { title: 'Our Success Stories', subtitle: 'We don\'t just deliver strategies, we deliver measurable results.' },
          methodology: { title: 'The UCYX Value Growth Methodology™', subtitle: 'We don\'t offer scattered advice. We deliver a systematic, verifiable blueprint for success.', usingProprietaryModel: 'Using our proprietary', model: 'model' },
          brands: { title: 'Advanced Market Intelligence Platform', description: 'Novochoice is UCYX\'s advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce opportunities worldwide.', cta: 'Learn More About Novochoice', novochoiceTitle: 'Novochoice' },
          contact: { readyTitle: 'Ready to achieve extraordinary growth?', readySubtitle: 'Join hundreds of brands that have transformed their business with our methodology.', submitting: 'Submitting...', successMessage: 'Thank you! We will contact you within 24 hours.', errorMessage: 'Sorry, there was an error. Please try again.' },
          form: { name: 'Name', namePlaceholder: 'Your Name', email: 'Email', emailPlaceholder: 'your@email.com', message: 'Your Needs', messagePlaceholder: 'Tell us about your business goals...', submit: 'Submit' },
          footer: { company: 'Company', resources: 'Resources', about: 'About Us', careers: 'Careers', contact: 'Contact', blog: 'Blog', cases: 'Case Studies', webinars: 'Webinars', privacy: 'Privacy Policy', terms: 'Terms of Service' },
          footerExtra: { copyright: '© 2025 UCYX Ltd. All rights reserved.', support: 'Support' },
          language: { current: 'English', switch: 'Switch Language' }
        };
      }
      return this.t;
    },

    storySlides() {
      // 使用响应式窗口宽度检查是否为移动端
      const isMobile = this.windowWidth <= 768;
      
      if (isMobile) {
        // 移动端：每个slide只包含一个案例
        return this.successCases.map(story => [story]);
      } else {
        // 桌面端：每个slide包含两个案例
        const slides = []
        for (let i = 0; i < this.successCases.length; i += 2) {
          slides.push(this.successCases.slice(i, i + 2))
        }
        return slides
      }
    }
  },

  methods: {
    // 多语言相关方法
    async changeLanguage(langCode) {
      if (langCode === this.currentLanguage) {
        this.showLanguageMenu = false;
        return;
      }

      try {
        // 直接调用languageManager的setLanguage方法
        await window.languageManager.setLanguage(langCode);
        
        // 更新Vue应用的状态
        this.currentLanguage = langCode;
        this.t = window.languageManager.getCurrentTranslations();
        
        // 更新动态数据
        this.updateDynamicData();
        
        // 关闭语言菜单
        this.showLanguageMenu = false;
        
        // 强制Vue重新渲染
        this.$forceUpdate();
        
        // 更新页面标题
        document.title = this.t.meta?.title || 'UCYX - AI-Driven Global E-commerce Consultancy';
      } catch (error) {
        console.error('Failed to change language:', error);
      }
    },

    updateDynamicData() {
      // 更新动态数据
      this.successCases = this.t.successStories?.cases || [];
      this.methodologySteps = this.t.methodology?.steps || [];
    },

    async initializeLanguage() {
      try {
        // 确保languageManager已经加载
        if (!window.languageManager) {
          console.error('LanguageManager not found, waiting...');
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // 获取支持的语言列表
        this.supportedLanguages = window.languageManager.getSupportedLanguages();
        console.log('Supported languages:', this.supportedLanguages);
        
        // 初始化语言（IP检测 + 浏览器检测）
        const detectedLanguage = await window.languageManager.initLanguage();
        this.currentLanguage = detectedLanguage;
        console.log('Detected language:', detectedLanguage);
        
        // 确保获取到翻译对象
        const translations = window.languageManager.getCurrentTranslations();
        if (translations && Object.keys(translations).length > 0) {
          this.t = translations;
        } else {
          // 如果没有翻译对象，手动加载
          const loadedTranslations = await window.languageManager.loadTranslations(detectedLanguage);
          this.t = loadedTranslations;
        }
        
        console.log('Final translations loaded:', this.t);
        
        // 更新动态数据
        this.updateDynamicData();
        
        // 监听语言变更事件
        window.addEventListener('languageChanged', (event) => {
          this.currentLanguage = event.detail.language;
          this.t = event.detail.translations;
          this.updateDynamicData();
          console.log('Language changed to:', event.detail.language, event.detail.translations);
        });
        
        console.log(`Language initialized: ${detectedLanguage}`, this.t);
      } catch (error) {
        console.error('Failed to initialize language:', error);
        // 如果初始化失败，使用默认英语和后备翻译
        this.currentLanguage = 'en';
        this.t = window.languageManager.getFallbackTranslations();
        this.updateDynamicData();
      }
    },

    // 移动端菜单控制方法
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      if (this.showMobileMenu) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        this.showMobileServices = false;
      }
    },

    closeMobileMenu() {
      this.showMobileMenu = false;
      this.showMobileServices = false;
      this.showMobileStart = false;
      this.showMobileChoice = false;
      this.showMobileSell = false;
      this.showMobileManage = false;
      document.body.style.overflow = '';
    },

    toggleMobileServices() {
      this.showMobileServices = !this.showMobileServices;
      // 关闭所有三级菜单
      if (!this.showMobileServices) {
        this.showMobileStart = false;
        this.showMobileChoice = false;
        this.showMobileSell = false;
        this.showMobileManage = false;
      }
    },

    toggleMobileStart() {
      this.showMobileStart = !this.showMobileStart;
    },

    toggleMobileChoice() {
      this.showMobileChoice = !this.showMobileChoice;
    },

    toggleMobileSell() {
      this.showMobileSell = !this.showMobileSell;
    },

    toggleMobileManage() {
      this.showMobileManage = !this.showMobileManage;
    },

    // 触摸滑动相关方法
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.isSwiping = false;
    },

    handleTouchMove(event) {
      if (!this.touchStartX || !this.touchStartY) return;
      
      const touchX = event.touches[0].clientX;
      const touchY = event.touches[0].clientY;
      const diffX = this.touchStartX - touchX;
      const diffY = this.touchStartY - touchY;
      
      // 判断是否为水平滑动
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        this.isSwiping = true;
        event.preventDefault(); // 防止页面滚动
      }
    },

    handleTouchEnd(event) {
      if (!this.touchStartX || !this.isSwiping) return;
      
      const touchEndX = event.changedTouches[0].clientX;
      const diffX = this.touchStartX - touchEndX;
      const threshold = 50; // 滑动阈值
      
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          // 向左滑动，显示下一张
          this.nextStory();
        } else {
          // 向右滑动，显示上一张
          this.prevStory();
        }
      }
      
      // 重置触摸状态
      this.touchStartX = null;
      this.touchStartY = null;
      this.isSwiping = false;
    },

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

  async mounted() {
    console.log('UCYX App initialized!')
    
    // 延迟初始化多语言，确保DOM准备就绪
    await this.$nextTick();
    await this.initializeLanguage();
    
    // 监听窗口大小变化，自动关闭移动端菜单
    window.addEventListener('resize', () => {
      // 更新窗口宽度
      this.windowWidth = window.innerWidth;
      
      if (window.innerWidth > 768 && this.showMobileMenu) {
        this.closeMobileMenu()
      }
    })
    
    // 监听ESC键关闭移动端菜单
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showMobileMenu) {
        this.closeMobileMenu()
      }
      if (e.key === 'Escape' && this.showLanguageMenu) {
        this.showLanguageMenu = false
      }
    })
    
    // 监听外部点击关闭语言菜单
    document.addEventListener('click', (e) => {
      if (this.showLanguageMenu && !e.target.closest('.language-selector')) {
        this.showLanguageMenu = false
      }
    })
    
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
