<template>
  <div class="methodology-page">
    <section class="methodology-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('methodology.title') }}</h1>
          <p class="hero-subtitle">{{ $t('methodology.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="methodology-steps">
      <div class="container">
        <div class="steps-grid">
          <div class="step-card reveal" v-for="(step, index) in methodologySteps" :key="step.key">
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-content">
              <h3>{{ $t(`methodology.${step.key}.title`) }}</h3>
              <p>{{ $t(`methodology.${step.key}.description`) }}</p>
              <div class="step-features">
                <div class="feature" v-for="feature in step.features" :key="feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="methodology-cta">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to Apply Our Methodology?</h2>
          <p>Let our proven framework guide your brand to success in global markets.</p>
          <router-link to="/contact" class="btn btn--primary btn--large">
            Start Your Journey
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MethodologyPage',
  data() {
    return {
      methodologySteps: [
        {
          key: 'step1',
          features: [
            'Market size analysis',
            'Competitor landscape mapping',
            'Consumer behavior insights',
            'Opportunity prioritization'
          ]
        },
        {
          key: 'step2',
          features: [
            'Product-market fit analysis',
            'Pricing strategy development',
            'Brand positioning',
            'Go-to-market planning'
          ]
        },
        {
          key: 'step3',
          features: [
            'Business model validation',
            'Resource requirement planning',
            'Risk assessment',
            'Growth trajectory mapping'
          ]
        },
        {
          key: 'step4',
          features: [
            'Performance monitoring',
            'Continuous optimization',
            'Scale-up strategies',
            'Long-term sustainability'
          ]
        }
      ]
    }
  },
  mounted() {
    document.title = 'Methodology - UCYX'
  }
}
</script>

<style scoped>
.methodology-hero {
  background: linear-gradient(135deg, var(--dark-color) 0%, #374151 100%);
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

.methodology-steps {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-3xl);
}

.step-card {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-2xl);
  background: var(--light-gray-color);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal);
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: var(--white-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-black);
}

.step-content h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.step-content p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.step-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-color);
}

.feature svg {
  width: 20px;
  height: 20px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.methodology-cta {
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
  .steps-grid {
    grid-template-columns: 1fr;
  }
  
  .step-card {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin: 0 auto var(--spacing-lg) auto;
  }
}
</style>
