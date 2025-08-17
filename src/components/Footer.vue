<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- 品牌信息 -->
        <div class="footer-brand">
          <div class="logo">UCYX</div>
          <p>{{ $t('footer.description') }}</p>
        </div>
        
        <!-- 链接分组 -->
        <div 
          v-for="section in footerSections" 
          :key="section.title"
          class="footer-links"
        >
          <h4>{{ $t(section.title) }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.key">
              <router-link 
                :to="link.path"
                :target="link.external ? '_blank' : '_self'"
              >
                {{ $t(`footer.${link.key}`) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 底部信息 -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} UCYX. {{ $t('footer.rights') }}</p>
        <div class="footer-legal">
          <router-link 
            v-for="legal in legalLinks" 
            :key="legal.key"
            :to="legal.path"
          >
            {{ $t(`footer.${legal.key}`) }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import siteConfig from '@/config/site.config.js'

export default {
  name: 'Footer',
  data() {
    return {
      footerSections: siteConfig.footer.sections,
      legalLinks: siteConfig.footer.legal
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* 组件特定样式 */
.footer-brand .logo {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
