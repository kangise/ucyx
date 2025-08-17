<template>
  <div class="contact-page">
    <!-- Contact Hero -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('contact.title') }}</h1>
          <p class="hero-subtitle">{{ $t('contact.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to transform your e-commerce strategy? Let's discuss how we can help your brand achieve exponential growth.</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h3>Email</h3>
                  <a href="mailto:partnership@ucyx.com">partnership@ucyx.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h3>Office</h3>
                  <p>Global Headquarters<br>Available Worldwide</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form @submit="handleFormSubmit" class="form">
              <div class="form-group">
                <label for="name">{{ $t('form.name') }}</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name"
                  :placeholder="$t('form.name')"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email">{{ $t('form.email') }}</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  :placeholder="$t('form.email')"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="company">{{ $t('form.company') }}</label>
                <input 
                  type="text" 
                  id="company"
                  v-model="form.company"
                  :placeholder="$t('form.company')"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="message">{{ $t('form.message') }}</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  :placeholder="$t('form.message')"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn--primary btn--large" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : $t('form.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
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
  },
  mounted() {
    document.title = 'Contact Us - UCYX'
  }
}
</script>

<style scoped>
.contact-hero {
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

.contact-form-section {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.contact-info h2 {
  margin-bottom: var(--spacing-lg);
  text-align: left;
}

.contact-info p {
  margin-bottom: var(--spacing-2xl);
  color: var(--text-color);
  font-size: var(--font-size-lg);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.method-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  flex-shrink: 0;
}

.method-icon svg {
  width: 30px;
  height: 30px;
}

.method-content h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--dark-color);
}

.method-content p,
.method-content a {
  color: var(--text-color);
  margin: 0;
}

.method-content a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
}

.method-content a:hover {
  color: var(--primary-hover-color);
}

.contact-form {
  background: var(--light-gray-color);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--dark-color);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  transition: border-color var(--transition-normal);
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
  }
  
  .method-icon {
    margin-bottom: var(--spacing-sm);
  }
}
</style>
