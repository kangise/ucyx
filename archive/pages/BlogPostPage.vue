<template>
  <div class="blog-post-page">
    <article class="blog-post" v-if="post">
      <div class="container">
        <header class="blog-post__header">
          <div class="blog-post__meta">
            <span class="blog-post__category">{{ post.category }}</span>
            <time class="blog-post__date">{{ formatDate(post.date) }}</time>
          </div>
          <h1 class="blog-post__title">{{ post.title }}</h1>
          <p class="blog-post__excerpt">{{ post.excerpt }}</p>
          <div class="blog-post__tags" v-if="post.tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </header>
        
        <div class="blog-post__image" v-if="post.image">
          <img :src="post.image" :alt="post.title" loading="lazy">
        </div>
        
        <div class="blog-post__content" v-html="post.content"></div>
        
        <footer class="blog-post__footer">
          <div class="blog-post__navigation">
            <router-link to="/blog" class="btn btn--secondary">
              ← Back to Blog
            </router-link>
          </div>
        </footer>
      </div>
    </article>
    
    <div v-else class="blog-post-loading">
      <div class="container">
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <router-link to="/blog" class="btn btn--primary">Back to Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostPage',
  data() {
    return {
      post: null
    }
  },
  async created() {
    await this.loadPost()
  },
  methods: {
    async loadPost() {
      const slug = this.$route.params.slug
      
      // 模拟从API或静态文件加载博客文章
      const mockPosts = {
        'ai-driven-ecommerce-trends-2024': {
          slug: 'ai-driven-ecommerce-trends-2024',
          title: 'AI-Driven E-commerce Trends Shaping 2024',
          excerpt: 'Explore how artificial intelligence is revolutionizing the e-commerce landscape in 2024.',
          date: '2024-01-15',
          category: 'Trends',
          tags: ['AI', 'E-commerce', 'Technology'],
          image: '/assets/images/blog/ai-trends.jpg',
          content: `
            <h2>The AI Revolution in E-commerce</h2>
            <p>The e-commerce landscape is rapidly evolving, with artificial intelligence at the forefront of this transformation. As we navigate through 2024, several key trends are emerging that will define the future of online retail.</p>
            
            <h3>Personalized Shopping Experiences</h3>
            <p>AI-powered recommendation engines are becoming increasingly sophisticated, offering customers highly personalized shopping experiences that drive conversion rates and customer satisfaction.</p>
            
            <h3>Predictive Analytics for Inventory Management</h3>
            <p>Machine learning algorithms are helping retailers optimize their inventory management, reducing waste and ensuring popular products are always in stock.</p>
            
            <h3>Conversational Commerce</h3>
            <p>Chatbots and virtual assistants are becoming more natural and helpful, providing customers with instant support and guidance throughout their shopping journey.</p>
          `
        },
        'novochoice-platform-launch': {
          slug: 'novochoice-platform-launch',
          title: 'Introducing Novochoice: Advanced Market Intelligence Platform',
          excerpt: 'Discover how our new Novochoice platform provides real-time market insights for e-commerce success.',
          date: '2024-01-05',
          category: 'Product',
          tags: ['Novochoice', 'Platform', 'Intelligence'],
          image: '/assets/images/blog/novochoice-launch.jpg',
          content: `
            <h2>What is Novochoice?</h2>
            <p>Novochoice is an advanced market intelligence platform that combines artificial intelligence, big data analytics, and real-time monitoring to provide comprehensive insights into e-commerce markets worldwide.</p>
            
            <h3>Key Features</h3>
            <ul>
              <li><strong>Real-Time Market Data</strong>: Access up-to-the-minute market trends and competitor analysis</li>
              <li><strong>AI-Powered Recommendations</strong>: Get actionable insights for product positioning and pricing</li>
              <li><strong>Comprehensive Analytics</strong>: Visualize your market position with intuitive dashboards</li>
            </ul>
            
            <h3>Why Choose Novochoice?</h3>
            <p>In today's fast-paced e-commerce environment, having access to accurate, real-time market intelligence is crucial for success.</p>
          `
        }
      }
      
      this.post = mockPosts[slug] || null
      
      if (this.post) {
        document.title = `${this.post.title} - UCYX Blog`
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const locale = this.$i18n.locale.value || this.$i18n.locale
      
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  watch: {
    '$route'() {
      this.loadPost()
    }
  }
}
</script>

<style scoped>
.blog-post {
  padding: calc(var(--navbar-height) + var(--spacing-2xl)) 0 var(--spacing-3xl) 0;
}

.blog-post__header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.blog-post__meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.blog-post__category {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-post__date {
  color: var(--medium-gray-color);
}

.blog-post__title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.blog-post__excerpt {
  font-size: var(--font-size-lg);
  color: var(--medium-gray-color);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.blog-post__tags {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.tag {
  background-color: var(--light-gray-color);
  color: var(--text-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.blog-post__image {
  margin-bottom: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.blog-post__image img {
  width: 100%;
  height: auto;
  display: block;
}

.blog-post__content {
  max-width: 800px;
  margin: 0 auto var(--spacing-2xl) auto;
  font-size: var(--font-size-md);
  line-height: var(--line-height-relaxed);
}

.blog-post__content h2 {
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-lg);
  color: var(--dark-color);
}

.blog-post__content h3 {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
  color: var(--dark-color);
}

.blog-post__content p {
  margin-bottom: var(--spacing-lg);
}

.blog-post__content ul,
.blog-post__content ol {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-lg);
}

.blog-post__content li {
  margin-bottom: var(--spacing-sm);
}

.blog-post__footer {
  max-width: 800px;
  margin: 0 auto;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--border-color);
}

.blog-post__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-post-loading {
  padding: calc(var(--navbar-height) + var(--spacing-3xl)) 0 var(--spacing-3xl) 0;
  text-align: center;
}

.blog-post-loading h1 {
  margin-bottom: var(--spacing-lg);
  color: var(--medium-gray-color);
}

.blog-post-loading p {
  margin-bottom: var(--spacing-lg);
  color: var(--medium-gray-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blog-post__meta {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
