<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__container">
      <router-link to="/" class="navbar__logo">
        UCYX
      </router-link>
      
      <div class="navbar__nav">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
              {{ $t('nav.services') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/who-we-serve" class="nav-link" :class="{ active: $route.path === '/who-we-serve' }">
              {{ $t('nav.whoWeServe') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/case-studies" class="nav-link" :class="{ active: $route.path === '/case-studies' }">
              {{ $t('nav.successStories') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/methodology" class="nav-link" :class="{ active: $route.path === '/methodology' }">
              {{ $t('nav.methodology') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" :class="{ active: $route.path.startsWith('/blog') }">
              {{ $t('nav.blog') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/channels/novochoice" class="nav-link" :class="{ active: $route.path.startsWith('/channels') }">
              {{ $t('nav.channels') }}
            </router-link>
          </li>
        </ul>
        
        <LanguageSwitcher />
        
        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-menu-toggle" 
          @click="toggleMobileMenu"
          :aria-label="$t('aria.openMenu')"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation Panel -->
    <div class="mobile-nav-panel" :class="{ open: isMobileMenuOpen }">
      <ul class="nav-menu">
        <li><router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/blog" class="nav-link" @click="closeMobileMenu">Blog</router-link></li>
        <li><router-link to="/contact" class="nav-link" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'Navigation',
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    console.log('Navigation component mounted')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* 组件特定样式可以在这里添加 */
.navbar--scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}
</style>
