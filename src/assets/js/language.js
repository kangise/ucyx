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
      // 动态导入翻译文件
      let translations;
      
      if (lang === 'en') {
        const module = await import('../../locales/en.json');
        translations = module.default;
      } else if (lang === 'zh-cn') {
        const module = await import('../../locales/zh-cn.json');
        translations = module.default;
      } else if (lang === 'zh-tw') {
        const module = await import('../../locales/zh-tw.json');
        translations = module.default;
      } else if (lang === 'ja') {
        const module = await import('../../locales/ja.json');
        translations = module.default;
      } else {
        throw new Error(`Unsupported language: ${lang}`);
      }
      
      this.translations[lang] = translations;
      return translations;
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // 如果加载失败，加载英语作为后备
      if (lang !== 'en') {
        return await this.loadTranslations('en');
      }
      // 如果英语也加载失败，返回基础翻译
      return this.getFallbackTranslations();
    }
  }

  // 获取后备翻译
  getFallbackTranslations() {
    return {
      nav: { 
        services: 'Services', 
        whoWeServe: 'Who We Serve', 
        successStories: 'Success Stories', 
        methodology: 'Methodology', 
        login: 'Login' 
      },
      hero: { 
        titleLine1: 'AI-Driven', 
        titleLine2: 'Global E-commerce Consultancy', 
        subtitle: 'Helping brands achieve success in global e-commerce markets through artificial intelligence and data insights', 
        cta: 'Start Consultation', 
        learnMore: 'Learn More' 
      },
      megaMenu: {
        start: 'Start',
        choice: 'Choice',
        sell: 'Sell',
        manage: 'Manage',
        novochoice: 'NovoChoice'
      },
      dataPower: {
        stat1: { number: '500', suffix: '+', label: 'Success Cases' },
        stat2: { number: '98', suffix: '%', label: 'Client Satisfaction' },
        stat3: { number: '50', suffix: '+', label: 'Countries' },
        stat4: { number: '24', suffix: '/7', label: 'Support' }
      },
      services: {
        title: 'Our Solutions',
        subtitle: 'Comprehensive support for your e-commerce success through AI-driven insights and expertise',
        feature1: { title: 'Smart Product Selection', description: 'AI-powered market analysis to recommend the most promising products', tag1: 'Market Analysis', tag2: 'Trend Prediction' },
        feature2: { title: 'Precision Marketing', description: 'Data-driven marketing strategies to improve conversion rates and ROI', tag1: 'Data-Driven', tag2: 'ROI Optimization' },
        feature3: { title: 'Global Expansion', description: 'Help brands enter new markets and achieve sustainable global growth', tag1: 'Market Entry', tag2: 'Growth Strategy' },
        feature4: { title: 'Customer Management', description: 'Build long-term customer relationships and increase customer lifetime value', tag1: 'Relationship Management', tag2: 'Value Enhancement' }
      },
      whoWeServe: {
        title: 'Who We Serve',
        subtitle: 'Customized solutions for businesses of different scales and stages',
        card1: { title: 'Startups', description: 'Help emerging brands establish e-commerce foundations and quickly enter the market' },
        card2: { title: 'Growth Companies', description: 'Support rapidly growing companies to expand market share and optimize operational efficiency' },
        card3: { title: 'Large Enterprises', description: 'Provide innovative solutions for mature enterprises to maintain competitive advantages' }
      },
      successStories: {
        title: 'Success Stories',
        subtitle: 'See how we help clients achieve breakthrough growth'
      },
      methodology: {
        title: 'Our Methodology',
        subtitle: 'Data-driven systematic approach to ensure project success',
        usingProprietaryModel: 'Using proprietary models',
        model: 'for analysis and optimization'
      },
      brands: {
        title: 'NovoChoice Platform',
        description: 'Our AI-driven platform providing intelligent support for e-commerce decisions',
        cta: 'Learn More',
        novochoiceTitle: 'NovoChoice'
      },
      contact: {
        readyTitle: 'Ready to Get Started?',
        readySubtitle: 'Contact us to learn how AI-driven solutions can enhance your e-commerce business'
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        message: 'Message',
        messagePlaceholder: 'Describe your needs...',
        submit: 'Send Message'
      },
      footer: {
        company: 'Company',
        resources: 'Resources',
        about: 'About Us',
        careers: 'Careers',
        contact: 'Contact',
        blog: 'Blog',
        caseStudies: 'Case Studies',
        whitepapers: 'Whitepapers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      footerExtra: {
        copyright: '© 2024 UCYX. All rights reserved.'
      },
      language: { 
        current: 'English', 
        switch: 'Switch Language' 
      }
    };
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
