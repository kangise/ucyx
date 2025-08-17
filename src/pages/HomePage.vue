<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="gradient-title">{{ $t('hero.title') }}</h1>
          <p>{{ $t('hero.subtitle') }}</p>
          <div class="hero-buttons">
            <router-link to="/contact" class="btn btn--primary btn--large">
              {{ $t('hero.cta') }}
            </router-link>
            <a href="#data-power" class="btn btn--secondary btn--large">
              {{ $t('hero.learnMore') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Power Section -->
    <section id="data-power" class="data-power-section">
      <div class="container">
        <h2 class="reveal">{{ $t('dataPower.title') }}</h2>
        <p class="section-subtitle reveal">{{ $t('dataPower.subtitle') }}</p>
        <div class="stats-grid">
          <div class="stat-item reveal">
            <div class="stat-number" data-number="500">500M+</div>
            <div class="stat-label">{{ $t('dataPower.stat1.label') }}</div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-number" data-number="98">98%</div>
            <div class="stat-label">{{ $t('dataPower.stat2.label') }}</div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-number" data-number="50">50+</div>
            <div class="stat-label">{{ $t('dataPower.stat3.label') }}</div>
          </div>
          <div class="stat-item reveal">
            <div class="stat-number" data-number="24">24/7</div>
            <div class="stat-label">{{ $t('dataPower.stat4.label') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="our-services" class="services-section">
      <div class="container">
        <h2 class="reveal">{{ $t('services.title') }}</h2>
        <p class="section-subtitle reveal">{{ $t('services.subtitle') }}</p>
        <div class="service-phase-grid">
          <div class="service-phase-card reveal">
            <div class="phase-number">01</div>
            <h3>{{ $t('services.phase1.title') }}</h3>
            <p>{{ $t('services.phase1.description') }}</p>
          </div>
          <div class="service-phase-card reveal">
            <div class="phase-number">02</div>
            <h3>{{ $t('services.phase2.title') }}</h3>
            <p>{{ $t('services.phase2.description') }}</p>
          </div>
          <div class="service-phase-card reveal">
            <div class="phase-number">03</div>
            <h3>{{ $t('services.phase3.title') }}</h3>
            <p>{{ $t('services.phase3.description') }}</p>
          </div>
          <div class="service-phase-card reveal">
            <div class="phase-number">04</div>
            <h3>{{ $t('services.phase4.title') }}</h3>
            <p>{{ $t('services.phase4.description') }}</p>
          </div>
        </div>
        <div class="services-cta">
          <router-link to="/services" class="btn btn--primary btn--large">
            {{ $t('services.cta') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Who We Serve Section -->
    <section id="who-we-serve" class="who-we-serve-section">
      <div class="container">
        <h2 class="reveal">{{ $t('whoWeServe.title') }}</h2>
        <p class="section-subtitle reveal">{{ $t('whoWeServe.subtitle') }}</p>
        <div class="serve-grid">
          <div class="serve-card reveal">
            <h3>{{ $t('whoWeServe.established.title') }}</h3>
            <p>{{ $t('whoWeServe.established.description') }}</p>
          </div>
          <div class="serve-card reveal">
            <h3>{{ $t('whoWeServe.startups.title') }}</h3>
            <p>{{ $t('whoWeServe.startups.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <section id="brands" class="brands-section">
      <div class="container reveal">
        <div class="brand-showcase">
          <div class="brand-content">
            <h2>{{ $t('brands.title') }}</h2>
            <h3 class="novochoice-logo gradient-title">{{ $t('brands.novochoiceTitle') }}</h3>
            <p>{{ $t('brands.novochoiceDescription') }}</p>
            <router-link to="/channels/novochoice" class="btn btn--primary">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="leads-form" class="leads-form-section">
      <div class="container reveal">
        <h2>{{ $t('form.title') }}</h2>
        <p class="section-subtitle">{{ $t('form.subtitle') }}</p>
        <div class="form-container">
          <form id="contact-form" @submit="handleFormSubmit">
            <div class="form-grid">
              <div class="form-group">
                <input 
                  type="text" 
                  v-model="form.name"
                  :placeholder="$t('form.name')"
                  required
                >
              </div>
              <div class="form-group">
                <input 
                  type="email" 
                  v-model="form.email"
                  :placeholder="$t('form.email')"
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <input 
                type="text" 
                v-model="form.company"
                :placeholder="$t('form.company')"
                required
              >
            </div>
            <div class="form-group">
              <textarea 
                v-model="form.message"
                :placeholder="$t('form.message')"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn--primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : $t('form.submit') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async handleFormSubmit(e) {
      e.preventDefault()
      this.isSubmitting = true
      
      try {
        // 模拟表单提交
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 重置表单
        this.form = {
          name: '',
          email: '',
          company: '',
          message: ''
        }
        
        alert('Thank you! We will contact you within 24 hours.')
        
      } catch (error) {
        alert('Sorry, there was an error. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, var(--dark-color) 0%, #374151 100%);
  color: var(--white-color);
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/images/hero-bg.jpg') center/cover;
  opacity: 0.1;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-content h1 {
  color: var(--white-color);
  margin-bottom: var(--spacing-lg);
}

.hero-content p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

/* Data Power Section */
.data-power-section {
  background-color: var(--white-color);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  text-align: center;
}

.stat-item {
  padding: var(--spacing-lg);
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-black);
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: var(--font-size-md);
  color: var(--medium-gray-color);
}

/* Services Section */
.services-section {
  background-color: var(--light-gray-color);
}

.service-phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.service-phase-card {
  background: var(--white-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
  position: relative;
}

.service-phase-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.phase-number {
  position: absolute;
  top: -20px;
  left: var(--spacing-lg);
  background: var(--primary-color);
  color: var(--white-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-black);
  font-size: var(--font-size-lg);
}

.services-cta {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

/* Who We Serve Section */
.who-we-serve-section {
  background-color: var(--white-color);
}

.serve-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

.serve-card {
  background: var(--light-gray-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  text-align: center;
}

/* Brands Section */
.brands-section {
  background-color: var(--light-gray-color);
}

.brand-showcase {
  background-color: var(--dark-color);
  color: var(--white-color);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-lg);
  text-align: center;
}

.brand-showcase h2,
.brand-showcase h3,
.brand-showcase p {
  color: var(--white-color);
}

.novochoice-logo {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-black);
  margin: var(--spacing-lg) 0;
}

/* Leads Form Section */
.leads-form-section {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: var(--white-color);
}

.leads-form-section h2,
.leads-form-section .section-subtitle {
  color: var(--white-color);
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: var(--white-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  transition: border-color var(--transition-normal);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-container .btn {
  width: 100%;
  padding: var(--spacing-md);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .service-phase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
