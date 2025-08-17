<template>
  <div class="lang-switcher">
    <div class="current-lang" :aria-label="$t('aria.languageSelector')" @click="toggleDropdown">
      <span class="lang-flag">{{ currentLanguageFlag }}</span>
      <span id="current-lang-text">{{ currentLanguageName }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dropdown-icon">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </div>
    <ul class="lang-dropdown" :class="{ 'show': isDropdownOpen }">
      <li v-for="language in languages" :key="language.code">
        <a 
          href="#" 
          class="lang-option" 
          :class="{ active: language.code === currentLocale }"
          @click.prevent="changeLanguage(language.code)"
        >
          <span class="lang-flag">{{ language.flag }}</span>
          {{ language.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      isDropdownOpen: false,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
        { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
      ]
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n?.locale?.value || this.$i18n?.locale || 'en'
    },
    currentLanguageName() {
      const current = this.languages.find(lang => lang.code === this.currentLocale)
      return current ? current.name : 'English'
    },
    currentLanguageFlag() {
      const current = this.languages.find(lang => lang.code === this.currentLocale)
      return current ? current.flag : '🇺🇸'
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    changeLanguage(locale) {
      if (locale !== this.currentLocale && this.$i18n) {
        this.$i18n.global.locale.value = locale
        localStorage.setItem('ucyx-language', locale)
        document.documentElement.lang = locale
        
        // 关闭下拉菜单
        this.isDropdownOpen = false
        
        // 触发自定义事件，通知其他组件语言已更改
        this.$emit('language-changed', locale)
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false
      }
    }
  },
  mounted() {
    console.log('LanguageSwitcher mounted, current locale:', this.currentLocale)
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.lang-switcher {
  position: relative;
  user-select: none;
}

.current-lang {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 0.5rem);
  padding: var(--spacing-xs, 0.5rem) var(--spacing-sm, 0.75rem);
  cursor: pointer;
  font-weight: var(--font-weight-semibold, 600);
  color: var(--dark-color, #333);
  transition: color var(--transition-normal, 0.3s ease);
  border-radius: var(--radius-sm, 0.375rem);
  background-color: transparent;
  border: 1px solid transparent;
}

.current-lang:hover {
  color: var(--primary-color, #007bff);
  background-color: var(--light-gray-color, #f8f9fa);
}

.lang-flag {
  margin-right: var(--spacing-xs, 0.5rem);
  font-size: 1.2em;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-normal, 0.3s ease);
}

.lang-switcher .current-lang:hover .dropdown-icon,
.lang-dropdown.show ~ .current-lang .dropdown-icon {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--white-color, #fff);
  border-radius: var(--radius-md, 0.5rem);
  box-shadow: var(--shadow-lg, 0 10px 25px rgba(0, 0, 0, 0.15));
  padding: var(--spacing-xs, 0.5rem);
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-normal, 0.3s ease);
  margin-top: var(--spacing-xs, 0.5rem);
  list-style: none;
  z-index: 1000;
  border: 1px solid var(--border-color, #e5e7eb);
}

.lang-dropdown.show,
.lang-switcher:hover .lang-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-option {
  display: flex;
  align-items: center;
  padding: var(--spacing-xs, 0.5rem) var(--spacing-sm, 0.75rem);
  color: var(--text-color, #666);
  font-weight: var(--font-weight-normal, 400);
  border-radius: var(--radius-sm, 0.375rem);
  transition: all var(--transition-normal, 0.3s ease);
  text-decoration: none;
  white-space: nowrap;
}

.lang-option:hover {
  background-color: var(--light-gray-color, #f8f9fa);
  color: var(--primary-color, #007bff);
}

.lang-option.active {
  background-color: var(--primary-color, #007bff);
  color: var(--white-color, #fff);
  font-weight: var(--font-weight-semibold, 600);
}

.lang-option.active:hover {
  background-color: var(--primary-color, #007bff);
  color: var(--white-color, #fff);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .lang-dropdown {
    right: -10px;
    min-width: 140px;
  }
  
  .current-lang {
    padding: var(--spacing-xs, 0.5rem);
  }
  
  .lang-option {
    padding: var(--spacing-sm, 0.75rem);
  }
}
</style>
