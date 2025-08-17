<template>
  <div id="test-app" style="padding: 2rem; font-family: Arial, sans-serif;">
    <h1 style="color: #4f46e5;">UCYX Test App</h1>
    <p>Vue.js is working! Current time: {{ currentTime }}</p>
    <button @click="updateTime" style="padding: 0.5rem 1rem; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer;">
      Update Time
    </button>
    <div style="margin-top: 1rem;">
      <p>Navigation test:</p>
      <router-link to="/" style="margin-right: 1rem; color: #4f46e5;">Home</router-link>
      <router-link to="/blog" style="margin-right: 1rem; color: #4f46e5;">Blog</router-link>
      <router-link to="/contact" style="color: #4f46e5;">Contact</router-link>
    </div>
    <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
      <h3>Current Route: {{ $route.path }}</h3>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestApp',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString()
    }
  },
  methods: {
    updateTime() {
      this.currentTime = new Date().toLocaleTimeString()
    }
  },
  mounted() {
    console.log('TestApp mounted successfully!')
  }
}
</script>
