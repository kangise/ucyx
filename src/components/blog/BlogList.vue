<template>
  <section class="blog-list">
    <div class="container">
      <!-- 博客过滤器 -->
      <div class="blog-filters" v-if="showFilters">
        <div class="blog-categories">
          <button 
            v-for="category in categories" 
            :key="category"
            class="filter-btn"
            :class="{ active: selectedCategory === category }"
            @click="filterByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="blog-search">
          <input 
            type="text" 
            v-model="searchQuery"
            :placeholder="$t('blog.search')"
            class="search-input"
            @input="handleSearch"
          >
        </div>
      </div>
      
      <!-- 博客网格 -->
      <div class="blog-grid" v-if="filteredPosts.length">
        <BlogCard 
          v-for="post in paginatedPosts" 
          :key="post.slug"
          :post="post"
          class="reveal"
        />
      </div>
      
      <!-- 空状态 -->
      <div v-else class="blog-empty">
        <h3>{{ $t('blog.noPosts') }}</h3>
        <p>{{ $t('blog.noPostsDesc') }}</p>
      </div>
      
      <!-- 分页 -->
      <div class="blog-pagination" v-if="totalPages > 1">
        <button 
          class="btn btn--secondary"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          {{ $t('blog.previous') }}
        </button>
        
        <div class="pagination-numbers">
          <button
            v-for="page in visiblePages"
            :key="page"
            class="page-btn"
            :class="{ active: page === currentPage }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          class="btn btn--secondary"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          {{ $t('blog.next') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  name: 'BlogList',
  components: {
    BlogCard
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    showFilters: {
      type: Boolean,
      default: true
    },
    postsPerPage: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      selectedCategory: 'All',
      searchQuery: '',
      currentPage: 1
    }
  },
  computed: {
    categories() {
      const cats = ['All', ...new Set(this.posts.map(post => post.category))]
      return cats
    },
    filteredPosts() {
      let filtered = this.posts
      
      // 按分类过滤
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(post => post.category === this.selectedCategory)
      }
      
      // 按搜索词过滤
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
        )
      }
      
      return filtered
    },
    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage)
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage
      const end = start + this.postsPerPage
      return this.filteredPosts.slice(start, end)
    },
    visiblePages() {
      const pages = []
      const total = this.totalPages
      const current = this.currentPage
      
      // 显示当前页前后各2页
      const start = Math.max(1, current - 2)
      const end = Math.min(total, current + 2)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      return pages
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
      this.currentPage = 1
    },
    handleSearch() {
      this.currentPage = 1
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  },
  watch: {
    selectedCategory() {
      this.$emit('category-changed', this.selectedCategory)
    },
    searchQuery() {
      this.$emit('search-changed', this.searchQuery)
    }
  }
}
</script>

<style scoped>
.blog-list {
  padding: var(--spacing-3xl) 0;
}

.blog-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
  gap: var(--spacing-lg);
}

.blog-categories {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 2px solid var(--border-color);
  background: var(--white-color);
  color: var(--text-color);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-btn:hover,
.filter-btn.active {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white-color);
}

.blog-search {
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  transition: border-color var(--transition-normal);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.blog-empty {
  text-align: center;
  padding: var(--spacing-3xl) 0;
}

.blog-empty h3 {
  color: var(--medium-gray-color);
  margin-bottom: var(--spacing-sm);
}

.blog-empty p {
  color: var(--medium-gray-color);
}

.blog-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
}

.pagination-numbers {
  display: flex;
  gap: var(--spacing-xs);
}

.page-btn {
  width: 40px;
  height: 40px;
  border: 2px solid var(--border-color);
  background: var(--white-color);
  color: var(--text-color);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.page-btn:hover,
.page-btn.active {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blog-filters {
    flex-direction: column;
    align-items: stretch;
  }
  
  .blog-search {
    min-width: auto;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .blog-pagination {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>
