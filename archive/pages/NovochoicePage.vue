<template>
  <div class="novochoice-page">
    <!-- Hero Section -->
    <section class="novochoice-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('channels.novochoice.title') }}</h1>
          <p class="hero-subtitle">{{ $t('channels.novochoice.description') }}</p>
          <div class="hero-buttons">
            <a href="#features" class="btn btn--primary btn--large">
              Explore Features
            </a>
            <router-link to="/contact" class="btn btn--secondary btn--large">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <div class="container">
        <h2 class="reveal">Platform Features</h2>
        <p class="section-subtitle reveal">
          Powerful tools and insights to drive your e-commerce success
        </p>
        
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>{{ $t('channels.novochoice.features.realTime') }}</h3>
            <p>Access up-to-the-minute market trends, pricing data, and consumer behavior insights across multiple platforms and regions.</p>
          </div>
          
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6z"/>
              </svg>
            </div>
            <h3>{{ $t('channels.novochoice.features.aiInsights') }}</h3>
            <p>Our advanced AI algorithms analyze vast datasets to provide actionable recommendations and predict market opportunities.</p>
          </div>
          
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3>{{ $t('channels.novochoice.features.trendAnalysis') }}</h3>
            <p>Comprehensive trend analysis with predictive modeling to help you stay ahead of market changes and consumer preferences.</p>
          </div>
          
          <div class="feature-card reveal">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>{{ $t('channels.novochoice.features.competitorTracking') }}</h3>
            <p>Monitor competitor activities, pricing strategies, and market positioning to maintain your competitive advantage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Preview Section -->
    <section class="dashboard-section">
      <div class="container">
        <div class="dashboard-content">
          <div class="dashboard-info">
            <h2 class="reveal">Intuitive Dashboard</h2>
            <p class="reveal">
              Our user-friendly interface makes complex market data accessible and actionable. 
              Visualize trends, track KPIs, and make informed decisions with confidence.
            </p>
            <ul class="dashboard-features reveal">
              <li>Real-time data visualization</li>
              <li>Customizable reporting</li>
              <li>Mobile-responsive design</li>
              <li>Export and sharing capabilities</li>
            </ul>
          </div>
          <div class="dashboard-preview reveal">
            <div class="dashboard-mockup">
              <div class="mockup-header">
                <div class="mockup-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup-title">Novochoice Dashboard</div>
              </div>
              <div class="mockup-content">
                <div class="mockup-sidebar">
                  <div class="sidebar-item active">Overview</div>
                  <div class="sidebar-item">Market Trends</div>
                  <div class="sidebar-item">Competitors</div>
                  <div class="sidebar-item">Analytics</div>
                </div>
                <div class="mockup-main">
                  <div class="chart-placeholder">
                    <div class="chart-bars">
                      <div class="bar" style="height: 60%"></div>
                      <div class="bar" style="height: 80%"></div>
                      <div class="bar" style="height: 45%"></div>
                      <div class="bar" style="height: 90%"></div>
                      <div class="bar" style="height: 70%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to Transform Your E-commerce Strategy?</h2>
          <p>Join thousands of successful brands using Novochoice to drive growth and stay ahead of the competition.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn--primary btn--large">
              Start Free Trial
            </router-link>
            <a href="#" class="btn btn--secondary btn--large">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NovochoicePage',
  mounted() {
    document.title = 'Novochoice - Advanced Market Intelligence Platform | UCYX'
  }
}
</script>

<style scoped>
/* Hero Section */
.novochoice-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--white-color);
  padding: calc(var(--navbar-height) + var(--spacing-3xl)) 0 var(--spacing-3xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.novochoice-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/images/tech-pattern.svg') center/cover;
  opacity: 0.1;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  color: var(--white-color);
  margin-bottom: var(--spacing-lg);
  font-size: clamp(3rem, 6vw, 5rem);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

/* Features Section */
.features-section {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
}

.feature-card {
  background: var(--light-gray-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-lg) auto;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
}

.feature-icon svg {
  width: 40px;
  height: 40px;
}

.feature-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.feature-card p {
  color: var(--text-color);
  line-height: var(--line-height-relaxed);
}

/* Dashboard Section */
.dashboard-section {
  padding: var(--spacing-3xl) 0;
  background-color: var(--light-gray-color);
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.dashboard-info h2 {
  text-align: left;
  margin-bottom: var(--spacing-lg);
}

.dashboard-info p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.dashboard-features {
  list-style: none;
  padding: 0;
}

.dashboard-features li {
  padding: var(--spacing-sm) 0;
  position: relative;
  padding-left: var(--spacing-lg);
  color: var(--text-color);
}

.dashboard-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}

/* Dashboard Mockup */
.dashboard-mockup {
  background: var(--white-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
}

.mockup-header {
  background: var(--dark-color);
  color: var(--white-color);
  padding: var(--spacing-sm) var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.mockup-controls {
  display: flex;
  gap: var(--spacing-xs);
}

.mockup-controls span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f56;
}

.mockup-controls span:nth-child(2) {
  background: #ffbd2e;
}

.mockup-controls span:nth-child(3) {
  background: #27ca3f;
}

.mockup-title {
  font-weight: var(--font-weight-semibold);
  margin-left: var(--spacing-sm);
}

.mockup-content {
  display: flex;
  height: 300px;
}

.mockup-sidebar {
  width: 200px;
  background: var(--light-gray-color);
  padding: var(--spacing-lg);
}

.sidebar-item {
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color var(--transition-normal);
}

.sidebar-item.active {
  background: var(--primary-color);
  color: var(--white-color);
}

.mockup-main {
  flex: 1;
  padding: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder {
  width: 100%;
  height: 200px;
  background: var(--light-gray-color);
  border-radius: var(--radius-md);
  display: flex;
  align-items: end;
  justify-content: center;
  padding: var(--spacing-lg);
}

.chart-bars {
  display: flex;
  gap: var(--spacing-sm);
  align-items: end;
  height: 100%;
}

.bar {
  width: 30px;
  background: linear-gradient(to top, var(--primary-color), var(--secondary-color));
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  animation: growUp 1s ease-out;
}

@keyframes growUp {
  from { height: 0; }
  to { height: var(--height, 100%); }
}

/* CTA Section */
.cta-section {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: var(--white-color);
  padding: var(--spacing-3xl) 0;
  text-align: center;
}

.cta-content h2,
.cta-content p {
  color: var(--white-color);
}

.cta-content h2 {
  margin-bottom: var(--spacing-lg);
}

.cta-content p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .mockup-content {
    flex-direction: column;
    height: auto;
  }
  
  .mockup-sidebar {
    width: 100%;
  }
}
</style>
