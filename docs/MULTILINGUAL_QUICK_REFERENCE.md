# 多语言系统快速参考

## 🚀 快速开始

### 添加新翻译内容
```json
// 1. 在 src/locales/en.json 中添加英文内容
{
  "newSection": {
    "title": "New Section Title",
    "description": "Description text here"
  }
}

// 2. 在所有其他语言文件中添加对应翻译
// src/locales/zh-cn.json
{
  "newSection": {
    "title": "新章节标题", 
    "description": "这里是描述文本"
  }
}
```

### 在模板中使用
```html
<h2>{{ safeT.newSection.title }}</h2>
<p>{{ safeT.newSection.description }}</p>
```

## 🔧 常用命令

```bash
# 验证JSON语法
npm run build

# 启动开发服务器
npm run dev

# 检查特定语言文件
node -e "console.log(JSON.parse(require('fs').readFileSync('src/locales/zh-cn.json', 'utf8')))"
```

## 📋 检查清单

### 添加新内容时
- [ ] 在en.json中添加英文内容
- [ ] 在zh-cn.json中添加中文简体翻译
- [ ] 在zh-tw.json中添加中文繁体翻译  
- [ ] 在ja.json中添加日语翻译
- [ ] 验证JSON语法无错误
- [ ] 在模板中使用safeT访问
- [ ] 测试所有语言切换

### 调试问题时
- [ ] 检查浏览器控制台错误
- [ ] 验证JSON文件语法
- [ ] 确认文件路径和命名正确
- [ ] 检查翻译字段是否存在
- [ ] 清除缓存重新构建

## ⚠️ 重要注意事项

1. **始终使用safeT**: `{{ safeT.field }}` 而不是 `{{ t.field }}`
2. **引号转义**: JSON中的引号必须转义 `\"text\"`
3. **文件命名**: 使用小写 `zh-cn.json` 不是 `zh-CN.json`
4. **结构一致**: 所有语言文件结构必须与en.json完全一致
5. **逐字对应**: 翻译应该逐字逐句对应英文版本

## 🐛 快速修复

### JSON语法错误
```bash
# 找到错误行
npm run build 2>&1 | grep "line"

# 常见错误：未转义引号
"text": "包含"引号"的文本"  # ❌ 错误
"text": "包含\"引号\"的文本" # ✅ 正确
```

### 翻译不显示
```javascript
// 在控制台检查
console.log(this.currentLanguage);  // 当前语言
console.log(this.t);                // 当前翻译对象
console.log(window.languageManager.translations); // 缓存状态
```

### 语言切换失效
```javascript
// 检查语言管理器
console.log(window.languageManager);

// 手动切换测试
this.changeLanguage('zh-cn');
```
