<template>
  <article class="blog-card card card--elevated">
    <div class="blog-card__image" v-if="post.image">
      <img :src="post.image" :alt="post.title" loading="lazy">
    </div>
    
    <div class="blog-card__content">
      <div class="blog-card__meta">
        <span class="blog-card__category">{{ post.category }}</span>
        <time class="blog-card__date" :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </div>
      
      <h3 class="blog-card__title">
        <router-link :to="`/blog/${post.slug}/`">
          {{ post.title }}
        </router-link>
      </h3>
      
      <p class="blog-card__excerpt">{{ post.excerpt }}</p>
      
      <div class="blog-card__footer">
        <router-link :to="`/blog/${post.slug}/`" class="btn btn--secondary">
          {{ $t('blog.readMore') }}
        </router-link>
        
        <div class="blog-card__tags" v-if="post.tags && post.tags.length">
          <span 
            v-for="tag in post.tags.slice(0, 3)" 
            :key="tag"
            class="blog-card__tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const locale = this.$i18n.locale.value || this.$i18n.locale
      
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.blog-card {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card__image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.blog-card:hover .blog-card__image img {
  transform: scale(1.05);
}

.blog-card__content {
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-xs);
}

.blog-card__category {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-card__date {
  color: var(--medium-gray-color);
}

.blog-card__title {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-tight);
}

.blog-card__title a {
  color: var(--dark-color);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.blog-card__title a:hover {
  color: var(--primary-color);
}

.blog-card__excerpt {
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.blog-card__tags {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.blog-card__tag {
  background-color: var(--light-gray-color);
  color: var(--text-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}
</style>
