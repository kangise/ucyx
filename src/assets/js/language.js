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
      },
      'zh-cn': {
        "nav": { "services": "解决方案", "whoWeServe": "服务对象", "successStories": "成功案例", "methodology": "方法论", "login": "登录" },
        "hero": { "titleLine1": "AI驱动的", "titleLine2": "全球电商咨询", "subtitle": "通过人工智能和数据洞察，帮助品牌在全球电商市场取得成功", "cta": "开始咨询", "learnMore": "了解更多" },
        "dataPower": { "stat1": { "number": "500", "suffix": "+", "label": "成功案例" }, "stat2": { "number": "98", "suffix": "%", "label": "客户满意度" }, "stat3": { "number": "50", "suffix": "+", "label": "合作国家" }, "stat4": { "number": "24", "suffix": "/7", "label": "全天候支持" } },
        "services": { "title": "我们的解决方案", "subtitle": "通过AI驱动的洞察和专业知识，为您的电商成功提供全方位支持", "feature1": { "title": "智能选品", "description": "利用AI分析市场趋势，为您推荐最具潜力的产品", "tag1": "市场分析", "tag2": "趋势预测" }, "feature2": { "title": "精准营销", "description": "基于数据洞察制定营销策略，提升转化率和ROI", "tag1": "数据驱动", "tag2": "ROI优化" }, "feature3": { "title": "全球扩张", "description": "帮助品牌进入新市场，实现可持续的全球增长", "tag1": "市场进入", "tag2": "增长策略" }, "feature4": { "title": "客户管理", "description": "建立长期客户关系，提升客户生命周期价值", "tag1": "关系管理", "tag2": "价值提升" } },
        "whoWeServe": { "title": "我们的服务对象", "subtitle": "为不同规模和阶段的企业提供定制化解决方案", "card1": { "title": "初创企业", "description": "帮助新兴品牌建立电商基础，快速进入市场" }, "card2": { "title": "成长型企业", "description": "支持快速增长的企业扩大市场份额，优化运营效率" }, "card3": { "title": "大型企业", "description": "为成熟企业提供创新解决方案，保持竞争优势" } },
        "successStories": { "title": "成功案例", "subtitle": "看看我们如何帮助客户实现突破性增长", "cases": [{ "title": "美妆品牌全球扩张", "brand": "BeautyBrand", "description": "通过AI驱动的市场分析，帮助美妆品牌成功进入亚洲市场", "metric": "300%", "metricLabel": "销售增长" }, { "title": "科技产品中国市场", "brand": "TechCorp", "description": "为科技公司制定本土化策略，快速占领中国市场份额", "metric": "150%", "metricLabel": "市场份额增长" }, { "title": "时尚品牌数字化转型", "brand": "FashionForward", "description": "帮助传统时尚品牌实现数字化转型，提升在线销售", "metric": "250%", "metricLabel": "在线销售增长" }, { "title": "健康产品全渠道布局", "brand": "HealthPlus", "description": "构建全渠道销售体系，实现线上线下协同发展", "metric": "180%", "metricLabel": "整体收入增长" }] },
        "methodology": { "title": "我们的方法论", "subtitle": "基于数据驱动的系统化方法，确保项目成功", "usingProprietaryModel": "使用专有模型", "model": "进行分析和优化", "steps": [{ "title": "市场分析", "tool": "MarketInsight", "description": "深入分析目标市场，识别机会和挑战。我们的AI驱动平台能够处理海量数据，为您提供精准的市场洞察。" }, { "title": "策略制定", "tool": "StrategyBuilder", "description": "基于数据洞察制定个性化策略。结合行业最佳实践和您的业务特点，制定可执行的增长计划。" }, { "title": "执行优化", "tool": "ExecutionEngine", "description": "实施策略并持续优化。通过实时监控和调整，确保策略执行效果最大化。" }, { "title": "结果评估", "tool": "ResultsAnalyzer", "description": "全面评估项目成果。提供详细的ROI分析和改进建议，为下一阶段发展奠定基础。" }] },
        "brands": { "title": "NovoChoice 平台", "description": "我们的AI驱动平台，为电商决策提供智能支持", "cta": "了解平台", "novochoiceTitle": "NovoChoice" },
        "contact": { "readyTitle": "准备开始了吗？", "readySubtitle": "联系我们，了解如何通过AI驱动的解决方案提升您的电商业务" },
        "form": { "name": "姓名", "namePlaceholder": "请输入您的姓名", "email": "邮箱", "emailPlaceholder": "请输入您的邮箱", "message": "留言", "messagePlaceholder": "请描述您的需求...", "submit": "发送消息" },
        "footer": { "company": "公司", "resources": "资源", "about": "关于我们", "careers": "招聘", "contact": "联系我们", "blog": "博客", "cases": "案例研究", "whitepapers": "白皮书", "privacy": "隐私政策", "terms": "服务条款" },
        "footerExtra": { "sellToChina": "销往中国", "sellToWorld": "销往全球", "sellerCopilot": "卖家助手", "marketingMix": "营销组合", "manageCustomer": "客户管理", "aboutUCYX": "关于UCYX", "partners": "合作伙伴", "novochoicePlatform": "NovoChoice平台", "helpCenter": "帮助中心", "contactUs": "联系我们", "copyright": "© 2024 UCYX. 保留所有权利。", "support": "支持" },
        "megaMenu": { "start": "开始", "choice": "选择", "sell": "销售", "manage": "管理", "sellToChina": "销往中国", "reachConsumers": "触达消费者", "sellToWorld": "销往全球", "globalExpansion": "全球扩张", "novochoice": "NovoChoice", "aiPoweredIntelligence": "AI驱动智能", "customizedSelection": "定制化选品", "tailoredRecommendations": "量身定制推荐", "sellerCopilot": "卖家助手", "aiDrivenOptimization": "AI驱动优化", "marketingMix": "营销组合", "maximizeROI": "最大化投资回报", "manageCustomer": "客户管理", "buildRelationships": "建立关系", "startConsultation": "开始咨询", "visitBlog": "访问博客", "learnMethodology": "了解方法论" },
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
    // 直接从内联数据返回翻译
    if (this.translations[lang]) {
      return this.translations[lang];
    }

    // 如果请求的语言不存在，返回英语
    if (lang !== 'en' && this.translations['en']) {
      return this.translations['en'];
    }

    // 最后的后备方案
    return this.getFallbackTranslations();
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
