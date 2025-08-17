<template>
  <div class="blog-page">
    <!-- Blog Hero Section -->
    <section class="blog-hero">
      <div class="container">
        <div class="blog-hero__content">
          <h1 class="gradient-title">{{ $t('blog.title') }}</h1>
          <p class="blog-hero__subtitle">{{ $t('blog.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <BlogList 
      :posts="blogPosts" 
      :show-filters="true"
      @category-changed="handleCategoryChange"
      @search-changed="handleSearchChange"
    />
  </div>
</template>

<script>
import BlogList from '@/components/blog/BlogList.vue'

export default {
  name: 'BlogPage',
  components: {
    BlogList
  },
  data() {
    return {
      blogPosts: [
        {
          slug: 'ai-driven-ecommerce-trends-2024',
          title: 'AI-Driven E-commerce Trends Shaping 2024',
          excerpt: 'Explore how artificial intelligence is revolutionizing the e-commerce landscape in 2024.',
          date: '2024-01-15',
          category: 'Trends',
          tags: ['AI', 'E-commerce', 'Technology'],
          image: '/assets/images/blog/ai-trends.jpg'
        },
        {
          slug: 'cross-border-ecommerce-strategies',
          title: 'Cross-Border E-commerce: Strategies for Global Success',
          excerpt: 'Learn proven strategies for expanding your e-commerce business across international markets.',
          date: '2024-01-10',
          category: 'Strategy',
          tags: ['Cross-border', 'Global', 'Strategy'],
          image: '/assets/images/blog/cross-border.jpg'
        },
        {
          slug: 'novochoice-platform-launch',
          title: 'Introducing Novochoice: Advanced Market Intelligence Platform',
          excerpt: 'Discover how our new Novochoice platform provides real-time market insights for e-commerce success.',
          date: '2024-01-05',
          category: 'Product',
          tags: ['Novochoice', 'Platform', 'Intelligence'],
          image: '/assets/images/blog/novochoice-launch.jpg'
        },
        {
          slug: 'china-market-entry-guide',
          title: 'The Complete Guide to Entering the China Market',
          excerpt: 'Everything you need to know about successfully launching your brand in the Chinese e-commerce market.',
          date: '2023-12-28',
          category: 'Market Entry',
          tags: ['China', 'Market Entry', 'Tmall'],
          image: '/assets/images/blog/china-market.jpg'
        },
        {
          slug: 'data-driven-product-development',
          title: 'Data-Driven Product Development for E-commerce',
          excerpt: 'How to use market data and consumer insights to develop products that customers actually want.',
          date: '2023-12-20',
          category: 'Strategy',
          tags: ['Data', 'Product Development', 'Analytics'],
          image: '/assets/images/blog/data-driven.jpg'
        },
        {
          slug: 'social-commerce-trends',
          title: 'Social Commerce: The Future of Online Shopping',
          excerpt: 'Explore how social media platforms are becoming the new frontier for e-commerce sales.',
          date: '2023-12-15',
          category: 'Trends',
          tags: ['Social Commerce', 'Social Media', 'Shopping'],
          image: '/assets/images/blog/social-commerce.jpg'
        }
      ]
    }
  },
  methods: {
    handleCategoryChange(category) {
      console.log('Category changed:', category)
      // 这里可以添加分析跟踪
    },
    handleSearchChange(query) {
      console.log('Search query:', query)
      // 这里可以添加搜索分析
    }
  },
  mounted() {
    // 设置页面标题
    document.title = `${this.$t('blog.title')} - UCYX`
  }
}
</script>

<style scoped>
.blog-hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white-color);
  padding: calc(var(--navbar-height) + var(--spacing-3xl)) 0 var(--spacing-3xl) 0;
  text-align: center;
}

.blog-hero__content {
  max-width: 800px;
  margin: 0 auto;
}

.blog-hero h1 {
  color: var(--white-color);
  margin-bottom: var(--spacing-lg);
  font-size: clamp(2.5rem, 5vw, 4rem);
}

.blog-hero__subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}
</style>
