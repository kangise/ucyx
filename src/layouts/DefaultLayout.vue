<template>
  <div class="layout-default">
    <Navigation />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Footer
  },
  mounted() {
    console.log('DefaultLayout mounted')
    this.initScrollAnimations()
    this.initSmoothScroll()
  },
  methods: {
    initScrollAnimations() {
      const revealElements = document.querySelectorAll('.reveal')
      
      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              revealObserver.unobserve(entry.target)
            }
          })
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        })
        
        revealElements.forEach(element => {
          revealObserver.observe(element)
        })
      } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
          element.classList.add('visible')
        })
      }
    },
    
    initSmoothScroll() {
      // 平滑滚动到锚点
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]')
        if (link) {
          e.preventDefault()
          const targetId = link.getAttribute('href').substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80 // 考虑固定导航栏高度
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--navbar-height);
}
</style>
