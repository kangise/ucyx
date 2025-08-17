# UCYX 多语言翻译系统文档

## 📋 系统架构

### 核心文件
```
src/
├── locales/                    # 翻译文件
│   ├── en.json                # 英文 (基准版本)
│   ├── zh-cn.json             # 中文简体
│   ├── zh-tw.json             # 中文繁体
│   └── ja.json                # 日语
├── assets/js/language.js      # 语言管理器
└── main.js                    # Vue主应用
```

### 工作流程
```
用户访问 → 语言检测 → 动态导入JSON → 更新Vue → 页面渲染
用户切换 → changeLanguage() → 加载新JSON → 更新this.t → 重新渲染
加载失败 → Fallback机制 → 显示英文默认值 → 确保页面正常
```

## 🔧 核心逻辑

### 1. 语言管理器 (`language.js`)
```javascript
class LanguageManager {
  async loadTranslations(lang) {
    // 动态导入对应语言的JSON文件
    if (lang === 'zh-cn') {
      const module = await import('../../locales/zh-cn.json');
      return module.default;
    }
    // ... 其他语言
  }
}
```

### 2. Vue主应用 (`main.js`)
```javascript
data() {
  return {
    t: { /* 完整英文默认值 */ },
    currentLanguage: 'en'
  }
},
computed: {
  safeT() {
    // 安全访问，防止undefined
    return this.t || { /* 英文fallback */ };
  }
},
methods: {
  async changeLanguage(langCode) {
    const translations = await window.languageManager.setLanguage(langCode);
    this.t = translations;
    this.currentLanguage = langCode;
  }
}
```

## 📝 使用方法

### 在模板中使用
```html
<!-- 基本用法 -->
<h1>{{ safeT.hero.titleLine1 }}</h1>
<p>{{ safeT.hero.subtitle }}</p>

<!-- 循环渲染 -->
<div v-for="case in successCases" :key="case.title">
  <h3>{{ case.title }}</h3>
</div>

<!-- 语言切换 -->
<button @click="changeLanguage('zh-cn')">中文</button>
```

## ➕ 添加新内容

### 1. 在所有JSON文件中添加对应字段
```json
// en.json
{
  "newSection": {
    "title": "New Title",
    "description": "Description here"
  }
}

// zh-cn.json  
{
  "newSection": {
    "title": "新标题",
    "description": "这里是描述"
  }
}
```

### 2. 在模板中使用
```html
<h2>{{ safeT.newSection.title }}</h2>
<p>{{ safeT.newSection.description }}</p>
```

## ⚠️ 重要规则

1. **始终使用safeT**: `{{ safeT.field }}` 不是 `{{ t.field }}`
2. **结构一致**: 所有语言文件结构必须与en.json完全相同
3. **逐字对应**: 翻译要逐字逐句对应英文版本
4. **引号转义**: JSON中包含引号的文本要转义 `\"text\"`
5. **文件命名**: 使用小写 `zh-cn.json` 不是 `zh-CN.json`

## 🐛 常见问题

### JSON语法错误
```bash
# 构建时会显示错误
npm run build

# 常见：未转义引号
"text": "包含"引号"的文本"  # ❌
"text": "包含\"引号\"的文本" # ✅
```

### 翻译不显示
```javascript
// 控制台检查
console.log(this.currentLanguage);  // 当前语言
console.log(this.t);                // 翻译对象
```

### 语言切换失效
- 检查changeLanguage方法是否正确绑定
- 确认JSON文件语法正确
- 验证动态导入路径

## 📞 调试步骤

1. **检查JSON语法**: `npm run build` 会显示语法错误
2. **验证文件存在**: 确认 `src/locales/` 下有对应文件
3. **检查控制台**: 查看浏览器控制台的错误信息
4. **测试导入**: 在控制台测试 `import('/src/locales/zh-cn.json')`
5. **清除缓存**: 删除 `node_modules/.vite` 和 `dist/` 重新构建

---

**核心原则**: 保持简单，所有翻译与英文版本逐字对应，使用safeT确保安全访问！
