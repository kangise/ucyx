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
          "title": "Data-Driven Insight",
          "subtitle": "Every strategic recommendation we make is rooted in deep learning and analysis of massive datasets.",
          "stat1": { "number": "300", "suffix": "+", "label": "Core E-commerce Categories" },
          "stat2": { "number": "5", "suffix": "M+", "label": "Active Products" },
          "stat3": { "number": "10", "suffix": "M+", "label": "Industry Keywords" },
          "stat4": { "number": "50", "suffix": "M+", "label": "Consumer Reviews" }
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
        "successStories": { 
          "title": "我们的成功故事", 
          "subtitle": "我们不仅提供策略，我们提供可衡量的结果。",
          "cases": [
            { "brand": "北美护肤品牌", "title": "从零开始进入亚洲市场", "description": "使用Novochoice™数据平台，我们在中国电子商务平台上识别了一个高潜力利基市场，并通过UCselection™服务，我们帮助定义了针对亚洲消费者偏好的价值主张，在第一个月超出销售预测300%。", "metric": "+300%", "metricLabel": "第一个月销售目标" },
            { "brand": "欧洲智能家居品牌", "title": "通过评论洞察重塑用户忠诚度", "description": "我们分析了前10名热销商品中的5000条客户评论，发现了核心产品改进机会并优化了销售材料，在六个月内将重复购买率提高了50%。", "metric": "+50%", "metricLabel": "重复购买率" },
            { "brand": "中国网络存储品牌", "title": "Amazon新产品发布优化", "description": "利用UCcopilot™进行智能广告活动优化，我们将他们在Amazon美国的新产品的点击转化率提高了75%，并将ACoS降低了40%，而没有增加广告预算。", "metric": "-40%", "metricLabel": "广告销售成本(ACoS)" },
            { "brand": "日本设计师文具品牌", "title": "Shopify DTC销售预测", "description": "通过UCforecast™模型，我们为他们针对北美市场的新产品线提供了准确的销售预测。这帮助优化了他们的库存策略，实现了95%的初始库存销售率。", "metric": "95%", "metricLabel": "初始库存销售率" }
          ]
        },
        "methodology": { 
          "title": "UCYX价值增长方法论™", 
          "subtitle": "我们不提供零散的建议。我们提供系统性的、可验证的成功蓝图。", 
          "usingProprietaryModel": "使用我们专有的", 
          "model": "模型",
          "steps": [
            { "title": "市场扫描与机会解锁", "description": "使用我们专有的Novochoice机会象限模型，结合AI数据分析，我们快速从数百个利基市场中为你识别高潜力的\"价值盆地\"。", "tool": "Novochoice™" },
            { "title": "深度洞察与产品定义", "description": "通过UCselection™价值主张画布，我们逆向工程竞争对手评论和用户痛点，共同创造一个具有引人注目的\"X因子\"的产品原型。", "tool": "UCopps™" },
            { "title": "可行性与增长路径", "description": "利用UCforecast™销售预测模型使用机器学习进行损益情景规划，我们使用\"品牌增长路径矩阵\"为你的业务绘制清晰的1到N的旅程。", "tool": "UCforecast™" },
            { "title": "平台成功与持续优化", "description": "通过UCcopilot™ AI助手，我们持续优化你的平台运营、广告和客户体验，确保你的品牌不仅成功发布而且蓬勃发展。", "tool": "UCcopilot™" }
          ]
        },
        "brands": { "title": "先进市场情报平台", "description": "Novochoice是UCYX的先进市场情报平台，结合人工智能、大数据分析和实时监控，为全球电子商务机会提供全面洞察。", "cta": "了解更多关于Novochoice", "novochoiceTitle": "Novochoice" },
        "contact": { "readyTitle": "准备实现非凡增长？", "readySubtitle": "加入数百个通过我们的方法论转变业务的品牌。", "submitting": "提交中...", "successMessage": "谢谢！我们将在24小时内联系你。", "errorMessage": "抱歉，出现了错误。请重试。" },
        "form": { "name": "姓名", "namePlaceholder": "你的姓名", "email": "邮箱", "emailPlaceholder": "your@email.com", "message": "你的需求", "messagePlaceholder": "告诉我们你的业务目标...", "submit": "提交" },
        "footer": { "company": "公司", "resources": "资源", "about": "关于我们", "careers": "招聘", "contact": "联系", "blog": "博客", "cases": "案例研究", "webinars": "网络研讨会", "privacy": "隐私政策", "terms": "服务条款" },
        "footerExtra": { "sellToChina": "销往中国", "sellToWorld": "销往世界", "sellerCopilot": "UCcopilot服务", "marketingMix": "UC-MMM", "manageCustomer": "管理你的客户", "aboutUCYX": "关于UCYX", "partners": "合作伙伴", "novochoicePlatform": "Novochoice平台", "helpCenter": "帮助中心", "contactUs": "联系我们", "copyright": "© 2025 UCYX Ltd. 保留所有权利。", "support": "支持" },
        "megaMenu": { "novochoice": "Novochoice", "start": "开始", "choice": "选择", "sell": "销售", "manage": "管理", "sellToChina": "销往中国", "sellToWorld": "销往世界", "reachConsumers": "触达10亿消费者", "globalExpansion": "全球市场扩张", "aiPoweredIntelligence": "AI驱动的市场情报", "customizedSelection": "UCselection服务", "tailoredRecommendations": "定制产品推荐", "sellerCopilot": "UCcopilot服务", "aiDrivenOptimization": "AI驱动的销售优化", "marketingMix": "UC-MMM", "maximizeROI": "最大化营销投资回报率", "manageCustomer": "管理你的客户", "buildRelationships": "建立持久关系", "startConsultation": "开始免费咨询", "visitBlog": "访问我们的博客", "learnMethodology": "了解更多关于方法论" },
        "language": { "current": "中文简体", "switch": "切换语言" }
      },
      'zh-tw': {
        "nav": { "services": "服務", "whoWeServe": "我們服務誰", "successStories": "成功故事", "methodology": "方法論", "login": "登入" },
        "hero": { "titleLine1": "你看到你的", "titleLine2": "非凡。", "subtitle": "UCYX是一家面向未來的、AI驅動的諮詢公司，致力於幫助品牌在複雜的跨境電子商務市場中發現獨特的「X-非凡」。", "cta": "開始你的增長之旅", "learnMore": "發現我們的方法論" },
        "dataPower": { "stat1": { "number": "300", "suffix": "+", "label": "監控的核心電子商務類別" }, "stat2": { "number": "5", "suffix": "M+", "label": "追蹤的活躍產品" }, "stat3": { "number": "10", "suffix": "M+", "label": "分析的行業關鍵詞" }, "stat4": { "number": "50", "suffix": "M+", "label": "處理的消費者評論" } },
        "services": { "title": "實現非凡增長所需的一切", "subtitle": "我們全面的AI驅動方法論涵蓋你的電子商務旅程的每個方面。", "feature1": { "title": "Novochoice", "description": "通過Novochoice™機會象限發現高潛力利基市場，由大規模數據集的AI分析提供支持。", "tag1": "Novochoice™", "tag2": "AI分析" }, "feature2": { "title": "品牌智能", "description": "通過UCselection™價值主張畫布，共同創造一個具有引人注目的「X因子」的產品原型。", "tag1": "UCselection™", "tag2": "品牌策略" }, "feature3": { "title": "發布致勝", "description": "通過集成營銷解決方案在全球平台上執行成功的發布。", "tag1": "UCforecast™", "tag2": "增長路徑" }, "feature4": { "title": "持久成功", "description": "通過我們的UCcopilot™ AI驅動優化系統實現持續增長。", "tag1": "UCcopilot™", "tag2": "AI優化" } },
        "whoWeServe": { "title": "我們服務誰", "subtitle": "我們與全球市場先鋒合作，無論你是尋求擴張的成熟品牌還是擁有優秀產品的初創公司。", "card1": { "title": "成熟品牌", "description": "你擁有成功的產品和穩定的業務，但渴望進入新市場以找到你的下一個增長曲線。" }, "card2": { "title": "有好想法的初創公司", "description": "你創造了出色的想法，但缺乏將其轉化為產品和品牌的方法。" }, "card3": { "title": "傳統製造商", "description": "你擁有優秀的產品，但缺乏在Amazon或Shopify等平台上的市場進入策略和品牌營銷經驗。" } },
        "successStories": { "title": "我們的成功故事", "subtitle": "我們不僅提供策略，我們提供可衡量的結果。", "cases": [{ "brand": "北美護膚品牌", "title": "從零開始進入亞洲市場", "description": "使用Novochoice™數據平台，我們在中國電子商務平台上識別了一個高潛力利基市場，並通過UCselection™服務，我們幫助定義了針對亞洲消費者偏好的價值主張，在第一個月超出銷售預測300%。", "metric": "+300%", "metricLabel": "第一個月銷售目標" }, { "brand": "歐洲智能家居品牌", "title": "通過評論洞察重塑用戶忠誠度", "description": "我們分析了前10名熱銷商品中的5000條客戶評論，發現了核心產品改進機會並優化了銷售材料，在六個月內將重複購買率提高了50%。", "metric": "+50%", "metricLabel": "重複購買率" }, { "brand": "中國網絡存儲品牌", "title": "Amazon新產品發布優化", "description": "利用UCcopilot™進行智能廣告活動優化，我們將他們在Amazon美國的新產品的點擊轉化率提高了75%，並將ACoS降低了40%，而沒有增加廣告預算。", "metric": "-40%", "metricLabel": "廣告銷售成本(ACoS)" }, { "brand": "日本設計師文具品牌", "title": "Shopify DTC銷售預測", "description": "通過UCforecast™模型，我們為他們針對北美市場的新產品線提供了準確的銷售預測。這幫助優化了他們的庫存策略，實現了95%的初始庫存銷售率。", "metric": "95%", "metricLabel": "初始庫存銷售率" }] },
        "methodology": { "title": "UCYX價值增長方法論™", "subtitle": "我們不提供零散的建議。我們提供系統性的、可驗證的成功藍圖。", "usingProprietaryModel": "使用我們專有的", "model": "模型", "steps": [{ "title": "市場掃描與機會解鎖", "description": "使用我們專有的Novochoice機會象限模型，結合AI數據分析，我們快速從數百個利基市場中為你識別高潛力的「價值盆地」。", "tool": "Novochoice™" }, { "title": "深度洞察與產品定義", "description": "通過UCselection™價值主張畫布，我們逆向工程競爭對手評論和用戶痛點，共同創造一個具有引人注目的「X因子」的產品原型。", "tool": "UCopps™" }, { "title": "可行性與增長路徑", "description": "利用UCforecast™銷售預測模型使用機器學習進行損益情景規劃，我們使用「品牌增長路徑矩陣」為你的業務繪製清晰的1到N的旅程。", "tool": "UCforecast™" }, { "title": "平台成功與持續優化", "description": "通過UCcopilot™ AI助手，我們持續優化你的平台運營、廣告和客戶體驗，確保你的品牌不僅成功發布而且蓬勃發展。", "tool": "UCcopilot™" }] },
        "brands": { "title": "先進市場情報平台", "description": "Novochoice是UCYX的先進市場情報平台，結合人工智能、大數據分析和實時監控，為全球電子商務機會提供全面洞察。", "cta": "了解更多關於Novochoice", "novochoiceTitle": "Novochoice" },
        "contact": { "readyTitle": "準備實現非凡增長？", "readySubtitle": "加入數百個通過我們的方法論轉變業務的品牌。", "submitting": "提交中...", "successMessage": "謝謝！我們將在24小時內聯繫你。", "errorMessage": "抱歉，出現了錯誤。請重試。" },
        "form": { "name": "姓名", "namePlaceholder": "你的姓名", "email": "郵箱", "emailPlaceholder": "your@email.com", "message": "你的需求", "messagePlaceholder": "告訴我們你的業務目標...", "submit": "提交" },
        "footer": { "company": "公司", "resources": "資源", "about": "關於我們", "careers": "招聘", "contact": "聯繫", "blog": "部落格", "cases": "案例研究", "webinars": "網絡研討會", "privacy": "隱私政策", "terms": "服務條款" },
        "footerExtra": { "sellToChina": "銷往中國", "sellToWorld": "銷往世界", "sellerCopilot": "UCcopilot服務", "marketingMix": "UC-MMM", "manageCustomer": "管理你的客戶", "aboutUCYX": "關於UCYX", "partners": "合作夥伴", "novochoicePlatform": "Novochoice平台", "helpCenter": "幫助中心", "contactUs": "聯繫我們", "copyright": "© 2025 UCYX Ltd. 保留所有權利。", "support": "支持" },
        "megaMenu": { "novochoice": "Novochoice", "start": "開始", "choice": "選擇", "sell": "銷售", "manage": "管理", "sellToChina": "銷往中國", "sellToWorld": "銷往世界", "reachConsumers": "觸達10億消費者", "globalExpansion": "全球市場擴張", "aiPoweredIntelligence": "AI驅動的市場情報", "customizedSelection": "UCselection服務", "tailoredRecommendations": "定制產品推薦", "sellerCopilot": "UCcopilot服務", "aiDrivenOptimization": "AI驅動的銷售優化", "marketingMix": "UC-MMM", "maximizeROI": "最大化營銷投資回報率", "manageCustomer": "管理你的客戶", "buildRelationships": "建立持久關係", "startConsultation": "開始免費諮詢", "visitBlog": "訪問我們的部落格", "learnMethodology": "了解更多關於方法論" },
        "language": { "current": "中文繁體", "switch": "切換語言" }
      },
      'ja': {
        "nav": { "services": "サービス", "whoWeServe": "私たちが支援する企業", "successStories": "成功事例", "methodology": "方法論", "login": "ログイン" },
        "hero": { "titleLine1": "あなたの", "titleLine2": "非凡を見つける。", "subtitle": "UCYXは未来志向のAI駆動コンサルティング会社で、複雑な越境ECマーケットでブランドが独自の「X-非凡」を発見することを支援します。", "cta": "成長の旅を始める", "learnMore": "私たちの方法論を発見" },
        "dataPower": { "stat1": { "number": "300", "suffix": "+", "label": "監視するコアECカテゴリー" }, "stat2": { "number": "5", "suffix": "M+", "label": "追跡するアクティブ製品" }, "stat3": { "number": "10", "suffix": "M+", "label": "分析する業界キーワード" }, "stat4": { "number": "50", "suffix": "M+", "label": "処理する消費者レビュー" } },
        "services": { "title": "非凡な成長を実現するために必要なすべて", "subtitle": "私たちの包括的なAI駆動方法論は、あなたのECジャーニーのあらゆる側面をカバーします。", "feature1": { "title": "Novochoice", "description": "大規模データセットのAI分析により、Novochoice™機会象限で高ポテンシャルニッチを発見。", "tag1": "Novochoice™", "tag2": "AI分析" }, "feature2": { "title": "ブランドスマート", "description": "UCselection™価値提案キャンバスを通じて、魅力的な「Xファクター」を持つ製品プロトタイプを共創。", "tag1": "UCselection™", "tag2": "ブランド戦略" }, "feature3": { "title": "勝利のローンチ", "description": "統合マーケティングソリューションでグローバルプラットフォームでの成功ローンチを実行。", "tag1": "UCforecast™", "tag2": "成長パス" }, "feature4": { "title": "持続的成功", "description": "UCcopilot™ AI駆動最適化システムで持続的成長を実現。", "tag1": "UCcopilot™", "tag2": "AI最適化" } },
        "whoWeServe": { "title": "私たちが支援する企業", "subtitle": "私たちは、拡張を求める確立されたブランドでも、優れた製品を持つスタートアップでも、グローバル市場のパイオニアとパートナーシップを組みます。", "card1": { "title": "確立されたブランド", "description": "成功した製品と安定したビジネスを持っているが、次の成長曲線を見つけるために新しい市場に参入したいと考えている。" }, "card2": { "title": "素晴らしいアイデアを持つスタートアップ", "description": "優れたアイデアを創造したが、それを製品とブランドに変える方法が不足している。" }, "card3": { "title": "従来の製造業", "description": "優れた製品を持っているが、AmazonやShopifyなどのプラットフォームでの市場参入戦略とブランドマーケティング経験が不足している。" } },
        "successStories": { "title": "私たちの成功事例", "subtitle": "私たちは戦略を提供するだけでなく、測定可能な結果を提供します。", "cases": [{ "brand": "北米スキンケアブランド", "title": "ゼロからアジア市場参入", "description": "Novochoice™データプラットフォームを使用して、中国のECプラットフォームで高ポテンシャルニッチ市場を特定し、UCselection™サービスでアジア消費者の好みに合わせた価値提案を定義し、初月で売上予測を300%上回りました。", "metric": "+300%", "metricLabel": "初月売上目標" }, { "brand": "ヨーロッパスマートホームブランド", "title": "レビュー洞察でユーザーロイヤルティ再構築", "description": "トップ10ベストセラー商品の5000件の顧客レビューを分析し、コア製品改善機会を発見し、販売資料を最適化して、6ヶ月でリピート購入率を50%向上させました。", "metric": "+50%", "metricLabel": "リピート購入率" }, { "brand": "中国ネットワークストレージブランド", "title": "Amazon新製品ローンチ最適化", "description": "UCcopilot™を活用したインテリジェント広告キャンペーン最適化により、Amazon USでの新製品のクリック転換率を75%向上させ、広告予算を増やすことなくACoSを40%削減しました。", "metric": "-40%", "metricLabel": "広告売上コスト(ACoS)" }, { "brand": "日本デザイナー文具ブランド", "title": "Shopify DTC売上予測", "description": "UCforecast™モデルにより、北米市場向け新製品ラインの正確な売上予測を提供。これにより在庫戦略を最適化し、初期在庫の95%売上率を達成しました。", "metric": "95%", "metricLabel": "初期在庫売上率" }] },
        "methodology": { "title": "UCYX価値成長方法論™", "subtitle": "私たちは散発的なアドバイスを提供しません。体系的で検証可能な成功の青写真を提供します。", "usingProprietaryModel": "私たちの独自の", "model": "モデルを使用", "steps": [{ "title": "市場スキャンと機会解放", "description": "独自のNovochoice機会象限モデルとAIデータ分析を組み合わせて、数百のニッチ市場から高ポテンシャルの「価値盆地」を迅速に特定します。", "tool": "Novochoice™" }, { "title": "深い洞察と製品定義", "description": "UCselection™価値提案キャンバスを通じて、競合レビューとユーザーペインポイントをリバースエンジニアリングし、魅力的な「Xファクター」を持つ製品プロトタイプを共創します。", "tool": "UCopps™" }, { "title": "実現可能性と成長パス", "description": "機械学習を使用したUCforecast™売上予測モデルでP&Lシナリオ計画を活用し、「ブランド成長パスマトリックス」を使用してビジネスの明確な1からNへの旅程をマッピングします。", "tool": "UCforecast™" }, { "title": "プラットフォーム成功と継続最適化", "description": "UCcopilot™ AIアシスタントにより、プラットフォーム運営、広告、顧客体験を継続的に最適化し、ブランドが成功ローンチするだけでなく繁栄することを確保します。", "tool": "UCcopilot™" }] },
        "brands": { "title": "先進市場インテリジェンスプラットフォーム", "description": "Novochoiceは、人工知能、ビッグデータ分析、リアルタイム監視を組み合わせて、世界中のECオポチュニティに関する包括的な洞察を提供するUCYXの先進市場インテリジェンスプラットフォームです。", "cta": "Novochoiceについて詳しく学ぶ", "novochoiceTitle": "Novochoice" },
        "contact": { "readyTitle": "非凡な成長を実現する準備はできていますか？", "readySubtitle": "私たちの方法論でビジネスを変革した数百のブランドに参加してください。", "submitting": "送信中...", "successMessage": "ありがとうございます！24時間以内にご連絡いたします。", "errorMessage": "申し訳ございませんが、エラーが発生しました。もう一度お試しください。" },
        "form": { "name": "お名前", "namePlaceholder": "あなたのお名前", "email": "メール", "emailPlaceholder": "your@email.com", "message": "あなたのニーズ", "messagePlaceholder": "あなたのビジネス目標について教えてください...", "submit": "送信" },
        "footer": { "company": "会社", "resources": "リソース", "about": "私たちについて", "careers": "採用", "contact": "お問い合わせ", "blog": "ブログ", "cases": "ケーススタディ", "webinars": "ウェビナー", "privacy": "プライバシーポリシー", "terms": "利用規約" },
        "footerExtra": { "sellToChina": "中国への販売", "sellToWorld": "世界への販売", "sellerCopilot": "UCcopilotサービス", "marketingMix": "UC-MMM", "manageCustomer": "顧客管理", "aboutUCYX": "UCYXについて", "partners": "パートナー", "novochoicePlatform": "Novochoiceプラットフォーム", "helpCenter": "ヘルプセンター", "contactUs": "お問い合わせ", "copyright": "© 2025 UCYX Ltd. 全著作権所有。", "support": "サポート" },
        "megaMenu": { "novochoice": "Novochoice", "start": "開始", "choice": "選択", "sell": "販売", "manage": "管理", "sellToChina": "中国への販売", "sellToWorld": "世界への販売", "reachConsumers": "10億の消費者にリーチ", "globalExpansion": "グローバル市場拡大", "aiPoweredIntelligence": "AI駆動市場インテリジェンス", "customizedSelection": "UCselectionサービス", "tailoredRecommendations": "カスタマイズされた製品推奨", "sellerCopilot": "UCcopilotサービス", "aiDrivenOptimization": "AI駆動販売最適化", "marketingMix": "UC-MMM", "maximizeROI": "マーケティングROI最大化", "manageCustomer": "顧客管理", "buildRelationships": "持続的関係構築", "startConsultation": "無料相談開始", "visitBlog": "ブログを訪問", "learnMethodology": "方法論について詳しく学ぶ" },
        "language": { "current": "日本語", "switch": "言語切替" }
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
