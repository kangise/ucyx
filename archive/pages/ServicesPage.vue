<template>
  <div class="services-page">
    <!-- Services Hero -->
    <section class="services-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('services.title') }}</h1>
          <p class="hero-subtitle">{{ $t('services.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>{{ $t('services.phase1.title') }}</h3>
            <p>{{ $t('services.phase1.description') }}</p>
            <router-link to="/methodology" class="service-link">Learn More →</router-link>
          </div>

          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6z"/>
              </svg>
            </div>
            <h3>{{ $t('services.phase2.title') }}</h3>
            <p>{{ $t('services.phase2.description') }}</p>
            <router-link to="/methodology" class="service-link">Learn More →</router-link>
          </div>

          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3>{{ $t('services.phase3.title') }}</h3>
            <p>{{ $t('services.phase3.description') }}</p>
            <router-link to="/methodology" class="service-link">Learn More →</router-link>
          </div>

          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>{{ $t('services.phase4.title') }}</h3>
            <p>{{ $t('services.phase4.description') }}</p>
            <router-link to="/methodology" class="service-link">Learn More →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to Start Your Growth Journey?</h2>
          <p>Let our experts help you unlock your brand's potential in global markets.</p>
          <router-link to="/contact" class="btn btn--primary btn--large">
            Get Started Today
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  mounted() {
    document.title = `${this.$t('nav.services')} - UCYX`
  }
}
</script>

<style scoped>
.services-hero {
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

.services-overview {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

.service-card {
  background: var(--light-gray-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
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

.service-icon svg {
  width: 40px;
  height: 40px;
}

.service-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.service-card p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.service-link {
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.service-link:hover {
  color: var(--primary-hover-color);
}

.services-cta {
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
</style>
