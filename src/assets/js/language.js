// 语言管理工具
class LanguageManager {
  constructor() {
    this.supportedLanguages = {
      'en': { name: 'English', flag: '🇺🇸' },
      'zh-cn': { name: '中文简体', flag: '🇨🇳' },
      'zh-tw': { name: '中文繁體', flag: '🇹🇼' },
      'ja': { name: '日本語', flag: '🇯🇵' }
    };
    
    this.currentLanguage = 'en';
    this.translations = {};
    this.ipToLanguageMap = {
      'CN': 'zh-cn',  // 中国
      'TW': 'zh-tw',  // 台湾
      'HK': 'zh-tw',  // 香港
      'MO': 'zh-tw',  // 澳门
      'JP': 'ja',     // 日本
      'SG': 'zh-cn',  // 新加坡（简体中文）
      'MY': 'zh-cn',  // 马来西亚（简体中文）
      'US': 'en',     // 美国
      'GB': 'en',     // 英国
      'AU': 'en',     // 澳大利亚
      'CA': 'en',     // 加拿大
      'NZ': 'en'      // 新西兰
    };
  }

  // 根据IP获取用户地理位置并推荐语言
  async detectLanguageByIP() {
    try {
      // 使用免费的IP地理位置API
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.country_code) {
        const recommendedLang = this.ipToLanguageMap[data.country_code] || 'en';
        console.log(`Detected country: ${data.country_code}, recommended language: ${recommendedLang}`);
        return recommendedLang;
      }
    } catch (error) {
      console.log('IP detection failed, using browser language detection');
    }
    
    // 如果IP检测失败，使用浏览器语言检测
    return this.detectLanguageByBrowser();
  }

  // 根据浏览器语言检测
  detectLanguageByBrowser() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase();
    
    if (langCode.startsWith('zh-cn') || langCode.startsWith('zh-hans')) {
      return 'zh-cn';
    } else if (langCode.startsWith('zh-tw') || langCode.startsWith('zh-hant')) {
      return 'zh-tw';
    } else if (langCode.startsWith('ja')) {
      return 'ja';
    } else {
      return 'en';
    }
  }

  // 获取存储的语言偏好
  getStoredLanguage() {
    return localStorage.getItem('ucyx-language') || null;
  }

  // 存储语言偏好
  setStoredLanguage(lang) {
    localStorage.setItem('ucyx-language', lang);
  }

  // 初始化语言
  async initLanguage() {
    // 优先级：存储的偏好 > IP检测 > 浏览器检测 > 默认英语
    let language = this.getStoredLanguage();
    
    if (!language) {
      language = await this.detectLanguageByIP();
    }
    
    if (!this.supportedLanguages[language]) {
      language = 'en';
    }
    
    await this.setLanguage(language);
    return language;
  }

  // 加载翻译文件
  async loadTranslations(lang) {
    if (this.translations[lang]) {
      return this.translations[lang];
    }

    try {
      const response = await fetch(`/src/locales/${lang}.json`);
      const translations = await response.json();
      this.translations[lang] = translations;
      return translations;
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // 如果加载失败，加载英语作为后备
      if (lang !== 'en') {
        return await this.loadTranslations('en');
      }
      return {};
    }
  }

  // 设置语言
  async setLanguage(lang) {
    if (!this.supportedLanguages[lang]) {
      lang = 'en';
    }

    this.currentLanguage = lang;
    this.setStoredLanguage(lang);
    
    const translations = await this.loadTranslations(lang);
    
    // 触发语言变更事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang, translations }
    }));

    return translations;
  }

  // 获取当前语言
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // 获取支持的语言列表
  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  // 获取当前翻译
  getCurrentTranslations() {
    return this.translations[this.currentLanguage] || {};
  }
}

// 创建全局实例
window.languageManager = new LanguageManager();
