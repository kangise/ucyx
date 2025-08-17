export default {
  site: {
    name: 'UCYX',
    url: 'https://ucyx.com',
    description: 'AI-Driven Global E-commerce Consultancy',
    logo: '/assets/images/logo.svg'
  },
  
  navigation: [
    {
      key: 'services',
      path: '/services/',
      hasDropdown: true,
      children: [
        {
          section: 'Market Entry',
          items: [
            { key: 'china-market', path: '/services/china-market/' },
            { key: 'global-market', path: '/services/global-market/' }
          ]
        },
        {
          section: 'Value Growth Methodology',
          items: [
            { key: 'market-scanning', path: '/methodology/market-scanning/' },
            { key: 'deep-insight', path: '/methodology/deep-insight/' },
            { key: 'viability', path: '/methodology/viability/' },
            { key: 'optimization', path: '/methodology/optimization/' },
            { key: 'case-studies', path: '/case-studies/', className: 'case-link' }
          ]
        }
      ]
    },
    {
      key: 'who-we-serve',
      path: '/who-we-serve/'
    },
    {
      key: 'success-stories',
      path: '/case-studies/'
    },
    {
      key: 'methodology',
      path: '/methodology/'
    },
    {
      key: 'blog',
      path: '/blog/'
    },
    {
      key: 'channels',
      path: '#',
      hasDropdown: true,
      children: [
        {
          section: 'Platforms',
          items: [
            { 
              key: 'novochoice', 
              path: '/channels/novochoice/',
              external: false,
              description: 'Advanced market intelligence platform'
            },
            { 
              key: 'knowledge-base', 
              path: '/knowledge-base/',
              description: 'In-depth industry analysis and strategic guides'
            }
          ]
        }
      ]
    }
  ],
  
  footer: {
    sections: [
      {
        title: 'footer.services',
        links: [
          { key: 'china-market', path: '/services/china-market/' },
          { key: 'global-market', path: '/services/global-market/' },
          { key: 'methodology', path: '/methodology/' },
          { key: 'case-studies', path: '/case-studies/' }
        ]
      },
      {
        title: 'footer.company',
        links: [
          { key: 'about', path: '/about/' },
          { key: 'blog', path: '/blog/' },
          { key: 'news', path: '/news/' },
          { key: 'careers', path: '/careers/' }
        ]
      },
      {
        title: 'footer.resources',
        links: [
          { key: 'novochoice', path: '/channels/novochoice/' },
          { key: 'knowledge-base', path: '/knowledge-base/' },
          { key: 'contact', path: '/contact/' },
          { key: 'partnerships', path: '/partnerships/' }
        ]
      }
    ],
    legal: [
      { key: 'privacy', path: '/privacy-policy/' },
      { key: 'terms', path: '/terms-of-service/' },
      { key: 'cookies', path: '/cookie-policy/' }
    ]
  },
  
  pages: [
    {
      path: '/index.html',
      layout: 'default',
      components: ['Hero', 'DataPower', 'Services', 'WhoWeServe', 'SuccessStories', 'Methodology', 'Brands', 'LeadsForm', 'Contact'],
      meta: {
        title: 'UCYX - AI-Driven Global E-commerce Consultancy',
        description: 'UCYX is a future-focused, AI-driven consultancy helping global brands achieve exponential growth in cross-border e-commerce with our data-driven methodology.'
      }
    },
    {
      path: '/services/index.html',
      layout: 'default',
      components: ['ServicesHero', 'ServicesList', 'Methodology', 'CTA'],
      meta: {
        title: 'Our Services - UCYX',
        description: 'Comprehensive e-commerce consultancy services from market entry to growth optimization.'
      }
    },
    {
      path: '/blog/index.html',
      layout: 'default',
      components: ['BlogHero', 'BlogList', 'BlogCategories'],
      meta: {
        title: 'Blog - UCYX',
        description: 'Latest insights and trends in global e-commerce and cross-border trade.'
      }
    },
    {
      path: '/channels/novochoice/index.html',
      layout: 'default',
      components: ['NovochoiceHero', 'NovochoiceFeatures', 'NovochoiceCTA'],
      meta: {
        title: 'Novochoice - Advanced Market Intelligence Platform',
        description: 'Powerful market intelligence platform providing data-driven insights for e-commerce success.'
      }
    }
  ],
  
  languages: [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ],
  
  defaultLanguage: 'en'
}
