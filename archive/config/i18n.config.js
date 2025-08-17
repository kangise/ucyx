import { createI18n } from 'vue-i18n'

// 静态导入翻译文件
import en from '../locales/en.json'
import zhCN from '../locales/zh-CN.json'
import zhTW from '../locales/zh-TW.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'
import vi from '../locales/vi.json'

const messages = {
  'en': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'ja': ja,
  'ko': ko,
  'vi': vi
}

const locales = ['en', 'zh-TW', 'zh-CN', 'ja', 'ko', 'vi']

// 创建i18n实例
export const createI18nInstance = () => {
  return createI18n({
    locale: 'en', // 默认语言
    fallbackLocale: 'en',
    messages,
    legacy: false, // 启用组合式API
    globalInjection: true,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  })
}

// 语言检测和设置
export const detectLanguage = () => {
  // 从URL参数检测
  const urlParams = new URLSearchParams(window.location.search)
  const langFromUrl = urlParams.get('lang')
  if (langFromUrl && locales.includes(langFromUrl)) {
    return langFromUrl
  }
  
  // 从localStorage检测
  const savedLang = localStorage.getItem('ucyx-language')
  if (savedLang && locales.includes(savedLang)) {
    return savedLang
  }
  
  // 从浏览器语言检测
  const browserLang = navigator.language || navigator.languages[0]
  const shortLang = browserLang.split('-')[0]
  
  // 精确匹配
  if (locales.includes(browserLang)) {
    return browserLang
  }
  
  // 部分匹配
  if (locales.includes(shortLang)) {
    return shortLang
  }
  
  // 中文特殊处理
  if (browserLang.includes('zh')) {
    if (browserLang.includes('TW') || browserLang.includes('HK') || browserLang.includes('MO')) {
      return 'zh-TW'
    }
    return 'zh-CN'
  }
  
  return 'en' // 默认返回英文
}

// 设置语言
export const setLanguage = (i18n, locale) => {
  if (locales.includes(locale)) {
    i18n.global.locale.value = locale
    localStorage.setItem('ucyx-language', locale)
    document.documentElement.lang = locale
    
    // 更新页面标题和meta信息
    updatePageMeta(locale)
  }
}

// 更新页面meta信息
const updatePageMeta = (locale) => {
  // 这里可以根据语言更新页面的meta信息
  const direction = ['ar', 'he', 'fa'].includes(locale) ? 'rtl' : 'ltr'
  document.documentElement.dir = direction
}

export default {
  createI18nInstance,
  detectLanguage,
  setLanguage,
  locales
}
