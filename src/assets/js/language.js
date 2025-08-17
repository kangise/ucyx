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
        "successStories": { "title": "Our Success Stories", "subtitle": "We don't just deliver strategies, we deliver measurable results." },
        "methodology": { "title": "The UCYX Value Growth Methodology™", "subtitle": "We don't offer scattered advice. We deliver a systematic, verifiable blueprint for success.", "usingProprietaryModel": "Using our proprietary", "model": "model" },
        "brands": { "title": "Advanced Market Intelligence Platform", "description": "Novochoice is UCYX's advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce opportunities worldwide.", "cta": "Learn More About Novochoice", "novochoiceTitle": "Novochoice" },
        "contact": { "readyTitle": "Ready to achieve extraordinary growth?", "readySubtitle": "Join hundreds of brands that have transformed their business with our methodology.", "submitting": "Submitting...", "successMessage": "Thank you! We will contact you within 24 hours.", "errorMessage": "Sorry, there was an error. Please try again." },
        "form": { "name": "Name", "namePlaceholder": "Your Name", "email": "Email", "emailPlaceholder": "your@email.com", "message": "Your Needs", "messagePlaceholder": "Tell us about your business goals...", "submit": "Submit" },
        "footer": { "company": "Company", "resources": "Resources", "about": "About Us", "careers": "Careers", "contact": "Contact", "blog": "Blog", "cases": "Case Studies", "webinars": "Webinars", "privacy": "Privacy Policy", "terms": "Terms of Service" },
        "footerExtra": { "sellToChina": "Sell to China", "sellToWorld": "Sell to The World", "sellerCopilot": "UCcopilot Services", "marketingMix": "UC-MMM", "manageCustomer": "Manage your Customer", "aboutUCYX": "About UCYX", "partners": "Partners", "novochoicePlatform": "Novochoice Platform", "helpCenter": "Help Center", "contactUs": "Contact Us", "copyright": "© 2025 UCYX Ltd. All rights reserved.", "support": "Support" },
        "megaMenu": { "novochoice": "Novochoice", "start": "Start", "choice": "Choice", "sell": "Sell", "manage": "Manage", "sellToChina": "Sell to China", "sellToWorld": "Sell to The World", "reachConsumers": "Reach 1 billion consumers", "globalExpansion": "Global market expansion", "aiPoweredIntelligence": "AI-powered market intelligence", "customizedSelection": "UCselection Service", "tailoredRecommendations": "Tailored product recommendations", "sellerCopilot": "UCcopilot Services", "aiDrivenOptimization": "AI-driven sales optimization", "marketingMix": "UC-MMM", "maximizeROI": "Maximize marketing ROI", "manageCustomer": "Manage your Customer", "buildRelationships": "Build lasting relationships", "startConsultation": "Start Free Consultation", "visitBlog": "Visit Our Blog", "learnMethodology": "Learn More About Methodology" },
        "language": { "current": "English", "switch": "Switch Language" }
      },
      'zh-cn': {
        "nav": {
          "services": "服务",
          "whoWeServe": "我们服务谁",
          "successStories": "成功故事",
          "methodology": "方法论",
          "login": "登录"
        },
        "hero": {
          "titleLine1": "你看到你的",
          "titleLine2": "非凡。",
          "subtitle": "UCYX是一家面向未来的、AI驱动的咨询公司，致力于帮助品牌在复杂的跨境电子商务市场中发现独特的\"X-非凡\"。",
          "cta": "开始你的增长之旅",
          "learnMore": "发现我们的方法论"
        },
        "dataPower": {
          "stat1": { "number": "300", "suffix": "+", "label": "监控的核心电子商务类别" },
          "stat2": { "number": "5", "suffix": "M+", "label": "跟踪的活跃产品" },
          "stat3": { "number": "10", "suffix": "M+", "label": "分析的行业关键词" },
          "stat4": { "number": "50", "suffix": "M+", "label": "处理的消费者评论" }
        },
        "services": {
          "title": "实现非凡增长所需的一切",
          "subtitle": "我们全面的AI驱动方法论涵盖你的电子商务旅程的每个方面。",
          "feature1": { "title": "Novochoice", "description": "通过Novochoice™机会象限发现高潜力利基市场，由大规模数据集的AI分析提供支持。", "tag1": "Novochoice™", "tag2": "AI分析" },
          "feature2": { "title": "品牌智能", "description": "通过UCselection™价值主张画布，共同创造一个具有引人注目的\"X因子\"的产品原型。", "tag1": "UCselection™", "tag2": "品牌策略" },
          "feature3": { "title": "发布致胜", "description": "通过集成营销解决方案在全球平台上执行成功的发布。", "tag1": "UCforecast™", "tag2": "增长路径" },
          "feature4": { "title": "持久成功", "description": "通过我们的UCcopilot™ AI驱动优化系统实现持续增长。", "tag1": "UCcopilot™", "tag2": "AI优化" }
        },
        "whoWeServe": {
          "title": "我们服务谁",
          "subtitle": "我们与全球市场先锋合作，无论你是寻求扩张的成熟品牌还是拥有优秀产品的初创公司。",
          "card1": { "title": "成熟品牌", "description": "你拥有成功的产品和稳定的业务，但渴望进入新市场以找到你的下一个增长曲线。" },
          "card2": { "title": "有好想法的初创公司", "description": "你创造了出色的想法，但缺乏将其转化为产品和品牌的方法。" },
          "card3": { "title": "传统制造商", "description": "你拥有优秀的产品，但缺乏在Amazon或Shopify等平台上的市场进入策略和品牌营销经验。" }
        },
        "successStories": { "title": "我们的成功故事", "subtitle": "我们不仅提供策略，我们提供可衡量的结果。" },
        "methodology": { "title": "UCYX价值增长方法论™", "subtitle": "我们不提供零散的建议。我们提供系统性的、可验证的成功蓝图。", "usingProprietaryModel": "使用我们专有的", "model": "模型" },
        "brands": { "title": "先进市场情报平台", "description": "Novochoice是UCYX的先进市场情报平台，结合人工智能、大数据分析和实时监控，为全球电子商务机会提供全面洞察。", "cta": "了解更多关于Novochoice", "novochoiceTitle": "Novochoice" },
        "contact": { "readyTitle": "准备实现非凡增长？", "readySubtitle": "加入数百个通过我们的方法论转变业务的品牌。", "submitting": "提交中...", "successMessage": "谢谢！我们将在24小时内联系你。", "errorMessage": "抱歉，出现了错误。请重试。" },
        "form": { "name": "姓名", "namePlaceholder": "你的姓名", "email": "邮箱", "emailPlaceholder": "your@email.com", "message": "你的需求", "messagePlaceholder": "告诉我们你的业务目标...", "submit": "提交" },
        "footer": { "company": "公司", "resources": "资源", "about": "关于我们", "careers": "招聘", "contact": "联系", "blog": "博客", "cases": "案例研究", "webinars": "网络研讨会", "privacy": "隐私政策", "terms": "服务条款" },
        "footerExtra": { "sellToChina": "销往中国", "sellToWorld": "销往世界", "sellerCopilot": "UCcopilot服务", "marketingMix": "UC-MMM", "manageCustomer": "管理你的客户", "aboutUCYX": "关于UCYX", "partners": "合作伙伴", "novochoicePlatform": "Novochoice平台", "helpCenter": "帮助中心", "contactUs": "联系我们", "copyright": "© 2025 UCYX Ltd. 保留所有权利。", "support": "支持" },
        "megaMenu": { "novochoice": "Novochoice", "start": "开始", "choice": "选择", "sell": "销售", "manage": "管理", "sellToChina": "销往中国", "sellToWorld": "销往世界", "reachConsumers": "触达10亿消费者", "globalExpansion": "全球市场扩张", "aiPoweredIntelligence": "AI驱动的市场情报", "customizedSelection": "UCselection服务", "tailoredRecommendations": "定制产品推荐", "sellerCopilot": "UCcopilot服务", "aiDrivenOptimization": "AI驱动的销售优化", "marketingMix": "UC-MMM", "maximizeROI": "最大化营销投资回报率", "manageCustomer": "管理你的客户", "buildRelationships": "建立持久关系", "startConsultation": "开始免费咨询", "visitBlog": "访问我们的博客", "learnMethodology": "了解更多关于方法论" },
        "language": { "current": "中文简体", "switch": "切换语言" }
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
    console.log(`Loading translations for: ${lang}`);
    
    if (this.translations[lang]) {
      console.log(`Translations for ${lang} already cached`);
      return this.translations[lang];
    }

    try {
      console.log(`Getting inline translations for: ${lang}`);
      
      // 直接从内联翻译数据获取
      const inlineTranslations = this.getInlineTranslations();
      
      if (inlineTranslations[lang]) {
        const translations = inlineTranslations[lang];
        console.log(`Successfully loaded translations for ${lang}:`, translations);
        this.translations[lang] = translations;
        return translations;
      } else {
        throw new Error(`Unsupported language: ${lang}`);
      }
      
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // 如果加载失败，加载英语作为后备
      if (lang !== 'en') {
        console.log(`Falling back to English for ${lang}`);
        return await this.loadTranslations('en');
      }
      // 如果英语也加载失败，返回基础翻译
      console.log('Using fallback translations');
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
    console.log(`Setting language to: ${lang}`);
    
    if (!this.supportedLanguages[lang]) {
      console.log(`Language ${lang} not supported, falling back to English`);
      lang = 'en';
    }

    this.currentLanguage = lang;
    this.setStoredLanguage(lang);
    
    console.log(`Loading translations for: ${lang}`);
    const translations = await this.loadTranslations(lang);
    
    // 确保翻译对象被正确存储
    this.translations[lang] = translations;
    
    console.log(`Translations loaded and stored for ${lang}:`, translations);
    
    // 触发语言变更事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang, translations }
    }));

    console.log(`Language set to: ${lang}, event dispatched`);
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
