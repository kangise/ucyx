// 语言管理工具
class LanguageManager {
  constructor() {
    this.supportedLanguages = {
      'en': { name: 'English' },
      'zh-cn': { name: '中文简体' },
      'zh-tw': { name: '中文繁體' },
      'ja': { name: '日本語' }
    };
    
    this.currentLanguage = 'en';
    this.translations = this.getInlineTranslations();
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

  // 内联翻译数据
  getInlineTranslations() {
    return {
      'en': {
        "nav": {
          "services": "Services",
          "whoWeServe": "Who We Serve",
          "successStories": "Success Stories",
          "methodology": "Methodology",
          "login": "Log in"
        },
        "hero": {
          "titleLine1": "You See Your",
          "titleLine2": "Extraordinary.",
          "subtitle": "UCYX is a future-focused, AI-driven consultancy dedicated to helping brands uncover unique \"X-trodinary\" in the complex cross-border e-commerce market.",
          "cta": "Start Your Growth Journey",
          "learnMore": "Discover Our Methodology"
        },
        "dataPower": {
          "stat1": { "number": "300", "suffix": "+", "label": "Core E-commerce Categories Monitored" },
          "stat2": { "number": "5", "suffix": "M+", "label": "Active Products Tracked" },
          "stat3": { "number": "10", "suffix": "M+", "label": "Industry Keywords Analyzed" },
          "stat4": { "number": "50", "suffix": "M+", "label": "Consumer Reviews Processed" }
        },
        "services": {
          "title": "Everything you need to achieve extraordinary growth",
          "subtitle": "Our comprehensive AI-driven methodology covers every aspect of your e-commerce journey.",
          "feature1": { "title": "Novochoice", "description": "Discover high-potential niches with Novochoice™ Opportunity Quadrant, powered by AI analysis of massive datasets.", "tag1": "Novochoice™", "tag2": "AI analysis" },
          "feature2": { "title": "Brand Smart", "description": "Through the UCselection™ Value Proposition Canvas, co-create a product prototype with a compelling \"X-factor\".", "tag1": "UCselection™", "tag2": "Brand Strategy" },
          "feature3": { "title": "Launch to Win", "description": "Execute successful launches across global platforms with integrated marketing solutions.", "tag1": "UCforecast™", "tag2": "Growth Path" },
          "feature4": { "title": "Lasting Success", "description": "Achieve sustained growth with our UCcopilot™ AI-driven optimization system.", "tag1": "UCcopilot™", "tag2": "AI Optimization" }
        },
        "whoWeServe": {
          "title": "Who We Serve",
          "subtitle": "We partner with global market pioneers, whether you are an established brand seeking expansion or a startup with a great product.",
          "card1": { "title": "Established Brands", "description": "You have successful products and a stable business but are eager to enter new markets to find your next growth curve." },
          "card2": { "title": "Startups with Great Ideas", "description": "You have created an outstanding ideas but lack the approach to turn into product and brand." },
          "card3": { "title": "Traditional Manufacture", "description": "You have a great product but lack the go-to-market strategy and brand marketing experience for platforms like Amazon or Shopify." }
        },
        "successStories": {
          "title": "Our Success Stories",
          "subtitle": "We don't just deliver strategies, we deliver measurable results.",
          "cases": [
            { "brand": "North American Skincare Brand", "title": "Entering the Asian Market from Scratch", "description": "Using the Novochoice™ data platform, we identified a high-potential niche market on China e-commerce platforms and with UCselection™ service, we helped defining a value proposition tailored to Asian consumer preferences, exceeding sales forecasts by 300% in the first month.", "metric": "+300%", "metricLabel": "First-Month Sales Target" },
            { "brand": "European Smart Home Brand", "title": "Reshaping User Loyalty with Review Insights", "description": "We analyze 5k customer reviews amongst the top 10 hot selling items, and uncovered core produce improvement opportunities and optimized selling material which increased the repeat purchase rate by 50% within six months.", "metric": "+50%", "metricLabel": "Repeat Purchase Rate" },
            { "brand": "China-based Network Storage Brand", "title": "Amazon New Product Launch Optimization", "description": "Leveraging UCcopilot™ for intelligent ad campaign optimization, we increased the click-through conversion rate for their new product on Amazon US by 75% and reduced ACoS by 40%, without increasing the ad budget.", "metric": "-40%", "metricLabel": "Advertising Cost of Sales (ACoS)" },
            { "brand": "Japanese Designer Stationery Brand", "title": "Shopify DTC Sales Forecasting", "description": "With the UCforecast™ model, we provided an accurate sales forecast for their new product line targeting the North American market. This helped optimize their inventory strategy, achieving a 95% sell-through rate for the initial stock.", "metric": "95%", "metricLabel": "Initial Stock Sell-Through Rate" }
          ]
        },
        "methodology": {
          "title": "The UCYX Value Growth Methodology™",
          "subtitle": "We don't offer scattered advice. We deliver a systematic, verifiable blueprint for success.",
          "usingProprietaryModel": "Using our proprietary",
          "model": "model",
          "steps": [
            { "title": "Market Scanning & Opportunity Unlocking", "description": "Using our proprietary Novochoice Opportunity Quadrant Model, combined with AI data analysis, we quickly identify high-potential \"value basins\" from hundreds of niche markets for you.", "tool": "Novochoice™" },
            { "title": "Deep Insight & Product Definition", "description": "Through the UCselection™ Value Proposition Canvas, we reverse-engineer competitor reviews and user pain points to co-create a product prototype with a compelling \"X-factor\".", "tool": "UCopps™" },
            { "title": "Viability & Growth Path", "description": "Leveraging the UCforecast™ sales prediction model using ML for P&L scenario planning, we use the \"Brand Growth Path Matrix\" to map out a clear 1-to-N journey for your business.", "tool": "UCforecast™" },
            { "title": "Platform Success & Continuous Optimization", "description": "With the UCcopilot™ AI assistant, we continuously optimize your platform operations, advertising, and customer experience to ensure your brand not only launches successfully but thrives.", "tool": "UCcopilot™" }
          ]
        },
        "brands": { "title": "Advanced Market Intelligence Platform", "novochoiceTitle": "Novochoice", "description": "Novochoice is UCYX's advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce opportunities worldwide.", "cta": "Learn More About Novochoice" },
        "contact": { "readyTitle": "Ready to achieve extraordinary growth?", "readySubtitle": "Join hundreds of brands that have transformed their business with our methodology.", "submitting": "Submitting..." },
        "form": { "name": "Name", "email": "Email", "message": "Your Needs", "submit": "Submit", "namePlaceholder": "Your Name", "emailPlaceholder": "your@email.com", "messagePlaceholder": "Tell us about your business goals..." },
        "footer": { "company": "Company", "resources": "Resources", "about": "About Us", "careers": "Careers", "blog": "Blog", "cases": "Case Studies", "webinars": "Webinars", "privacy": "Privacy Policy", "terms": "Terms of Service" },
        "footerExtra": { "sellToChina": "Sell to China", "sellToWorld": "Sell to The World", "sellerCopilot": "UCcopilot Services", "marketingMix": "UC-MMM", "manageCustomer": "Manage your Customer", "aboutUCYX": "About UCYX", "partners": "Partners", "novochoicePlatform": "Novochoice Platform", "helpCenter": "Help Center", "contactUs": "Contact Us", "copyright": "© 2025 UCYX Ltd. All rights reserved.", "support": "Support" },
        "megaMenu": { "start": "Start", "choice": "Choice", "sell": "Sell", "manage": "Manage", "sellToChina": "Sell to China", "sellToWorld": "Sell to The World", "reachConsumers": "Reach 1 billion consumers", "globalExpansion": "Global market expansion", "novochoice": "Novochoice", "aiPoweredIntelligence": "AI-powered market intelligence", "customizedSelection": "UCselection Service", "tailoredRecommendations": "Tailored product recommendations", "sellerCopilot": "UCcopilot Services", "aiDrivenOptimization": "AI-driven sales optimization", "marketingMix": "UC-MMM", "maximizeROI": "Maximize marketing ROI", "manageCustomer": "Manage your Customer", "buildRelationships": "Build lasting relationships", "startConsultation": "Start Free Consultation", "visitBlog": "Visit Our Blog", "learnMethodology": "Learn More About Methodology" },
        "language": { "current": "English", "switch": "Switch Language" }
      }
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
    
    const translations = await this.setLanguage(language);
    console.log(`Language detection complete: ${language}`, translations);
    return language;
  }

  // 加载翻译文件
  async loadTranslations(lang) {
    if (this.translations[lang]) {
      return this.translations[lang];
    }

    try {
      // 动态导入翻译文件 - 使用绝对路径
      let translations;
      
      if (lang === 'en') {
        const module = await import('/src/locales/en.json');
        translations = module.default;
      } else if (lang === 'zh-cn') {
        const module = await import('/src/locales/zh-cn.json');
        translations = module.default;
      } else if (lang === 'zh-tw') {
        const module = await import('/src/locales/zh-tw.json');
        translations = module.default;
      } else if (lang === 'ja') {
        const module = await import('/src/locales/ja.json');
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
        titleLine1: 'You See Your', 
        titleLine2: 'Extraordinary.', 
        subtitle: 'UCYX is a future-focused, AI-driven consultancy dedicated to helping brands uncover unique "X-trodinary" in the complex cross-border e-commerce market.', 
        cta: 'Start Your Growth Journey', 
        learnMore: 'Discover Our Methodology' 
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
    
    // 确保翻译对象被正确存储
    this.translations[lang] = translations;
    
    // 触发语言变更事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang, translations }
    }));

    console.log(`Language set to: ${lang}`, translations);
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
