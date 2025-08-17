// 直接在 window 对象上创建测试函数
window.testVue = function() {
  console.log('Testing Vue initialization...')
  
  // 隐藏loading
  const loading = document.getElementById('loading')
  if (loading) {
    loading.style.opacity = '0'
    setTimeout(() => loading.remove(), 300)
  }
  
  // 显示测试内容
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif;">
        <h1 style="color: #4f46e5; margin-bottom: 20px;">UCYX Debug Test</h1>
        <p style="font-size: 18px; color: #666;">JavaScript is working correctly!</p>
        <p style="font-size: 14px; color: #999; margin-top: 20px;">Time: ${new Date().toLocaleString()}</p>
      </div>
    `
    console.log('Test content displayed successfully!')
  } else {
    console.error('Could not find #app element')
  }
}

// 页面加载完成后执行测试
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.testVue)
} else {
  window.testVue()
}

console.log('Debug script loaded successfully!')
