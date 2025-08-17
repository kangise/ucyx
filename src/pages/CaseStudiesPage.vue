<template>
  <div class="case-studies-page">
    <section class="case-studies-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-title">{{ $t('successStories.title') }}</h1>
          <p class="hero-subtitle">{{ $t('successStories.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="case-studies-content">
      <div class="container">
        <div class="case-studies-grid">
          <div class="case-study-card reveal" v-for="caseStudy in caseStudies" :key="caseStudy.id">
            <div class="case-study-image">
              <img :src="caseStudy.image" :alt="caseStudy.title" loading="lazy">
            </div>
            <div class="case-study-content">
              <h3>{{ caseStudy.title }}</h3>
              <p class="case-study-excerpt">{{ caseStudy.excerpt }}</p>
              <div class="case-study-metrics">
                <div class="metric" v-for="metric in caseStudy.metrics" :key="metric.label">
                  <div class="metric-value">{{ metric.value }}</div>
                  <div class="metric-label">{{ metric.label }}</div>
                </div>
              </div>
              <a href="#" class="btn btn--secondary">View Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CaseStudiesPage',
  data() {
    return {
      caseStudies: [
        {
          id: 1,
          title: 'Portable Espresso Maker Success',
          excerpt: 'How we helped a lifestyle brand achieve 300% growth in their first year on Amazon.',
          image: '/assets/images/case-studies/espresso-maker.jpg',
          metrics: [
            { value: '300%', label: 'Revenue Growth' },
            { value: '150%', label: 'Market Share' },
            { value: '4.8★', label: 'Customer Rating' }
          ]
        },
        {
          id: 2,
          title: 'Fashion Brand China Entry',
          excerpt: 'Successfully launched a European fashion brand in the Chinese market through Tmall.',
          image: '/assets/images/case-studies/fashion-brand.jpg',
          metrics: [
            { value: '500%', label: 'Sales Increase' },
            { value: '50K+', label: 'New Customers' },
            { value: '6 months', label: 'ROI Timeline' }
          ]
        },
        {
          id: 3,
          title: 'Tech Gadget Global Expansion',
          excerpt: 'Expanded a tech startup from 1 market to 15 markets across 3 continents.',
          image: '/assets/images/case-studies/tech-gadget.jpg',
          metrics: [
            { value: '15', label: 'New Markets' },
            { value: '1000%', label: 'Revenue Growth' },
            { value: '12 months', label: 'Expansion Time' }
          ]
        }
      ]
    }
  },
  mounted() {
    document.title = 'Success Stories - UCYX'
  }
}
</script>

<style scoped>
.case-studies-hero {
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

.case-studies-content {
  padding: var(--spacing-3xl) 0;
  background-color: var(--white-color);
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-2xl);
}

.case-study-card {
  background: var(--white-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: transform var(--transition-normal);
}

.case-study-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.case-study-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.case-study-card:hover .case-study-image img {
  transform: scale(1.05);
}

.case-study-content {
  padding: var(--spacing-2xl);
}

.case-study-content h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.case-study-excerpt {
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.case-study-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--light-gray-color);
  border-radius: var(--radius-md);
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-black);
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.metric-label {
  font-size: var(--font-size-sm);
  color: var(--medium-gray-color);
  font-weight: var(--font-weight-semibold);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .case-study-metrics {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}
</style>
