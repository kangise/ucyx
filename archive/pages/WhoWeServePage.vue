<template>
  <div class="who-we-serve-page">
    <section class="who-we-serve-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('whoWeServe.title') }}</h1>
          <p class="hero-subtitle">{{ $t('whoWeServe.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="client-types">
      <div class="container">
        <div class="client-types-grid">
          <div class="client-type-card reveal">
            <div class="client-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <h3>{{ $t('whoWeServe.established.title') }}</h3>
            <p>{{ $t('whoWeServe.established.description') }}</p>
            <div class="client-features">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Fortune 500 companies</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Multi-national brands</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Established market presence</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Seeking new market expansion</span>
              </div>
            </div>
          </div>

          <div class="client-type-card reveal">
            <div class="client-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>{{ $t('whoWeServe.startups.title') }}</h3>
            <p>{{ $t('whoWeServe.startups.description') }}</p>
            <div class="client-features">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Innovative product offerings</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Rapid growth potential</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Agile business models</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Global market ambitions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="industries-section">
      <div class="container">
        <h2 class="reveal">Industries We Serve</h2>
        <div class="industries-grid">
          <div class="industry-card reveal" v-for="industry in industries" :key="industry.name">
            <div class="industry-icon" v-html="industry.icon"></div>
            <h3>{{ industry.name }}</h3>
            <p>{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to Partner with Us?</h2>
          <p>Whether you're an established brand or an innovative startup, we're here to help you succeed in global markets.</p>
          <router-link to="/contact" class="btn btn--primary btn--large">
            Let's Talk
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WhoWeServePage',
  data() {
    return {
      industries: [
        {
          name: 'Fashion & Apparel',
          description: 'From luxury brands to fast fashion, we help clothing companies expand globally.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
        },
        {
          name: 'Electronics & Tech',
          description: 'Consumer electronics, gadgets, and tech accessories across multiple markets.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
        },
        {
          name: 'Health & Beauty',
          description: 'Cosmetics, skincare, wellness products, and health supplements.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6z"/></svg>'
        },
        {
          name: 'Home & Garden',
          description: 'Furniture, home decor, kitchen appliances, and gardening products.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>'
        },
        {
          name: 'Sports & Outdoor',
          description: 'Athletic wear, sports equipment, and outdoor recreation products.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
        },
        {
          name: 'Food & Beverage',
          description: 'Specialty foods, beverages, and gourmet products for global markets.',
          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
        }
      ]
    }
  },
  mounted() {
    document.title = 'Who We Serve - UCYX'
  }
}
</script>

<style scoped>
.who-we-serve-hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white-color);
  padding: calc(var(--navbar-height) + var(--spacing-3xl)) 0 var(--spacing-3xl) 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  color: var(--white-color);
  margin-bottom: var(--spacing-lg);
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
}

.client-types {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.client-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-3xl);
}

.client-type-card {
  background: var(--light-gray-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-normal);
}

.client-type-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.client-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto var(--spacing-lg) auto;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
}

.client-icon svg {
  width: 50px;
  height: 50px;
}

.client-type-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.client-type-card p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.client-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  text-align: left;
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.feature-icon {
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.industries-section {
  padding: var(--spacing-3xl) 0;
  background-color: var(--light-gray-color);
}

.industries-section h2 {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

.industry-card {
  background: var(--white-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
}

.industry-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.industry-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--spacing-lg) auto;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
}

.industry-icon svg {
  width: 30px;
  height: 30px;
}

.industry-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.industry-card p {
  color: var(--text-color);
}

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

/* 响应式设计 */
@media (max-width: 768px) {
  .client-types-grid {
    grid-template-columns: 1fr;
  }
  
  .industries-grid {
    grid-template-columns: 1fr;
  }
}
</style>
