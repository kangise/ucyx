const fs = require('fs');
const content = fs.readFileSync('src/main.js', 'utf8');

// 提取模板部分
const templateMatch = content.match(/template:\s*`([\s\S]*?)`,/);
if (!templateMatch) {
  console.log('No template found');
  process.exit(1);
}

const template = templateMatch[1];
const lines = template.split('\n');

// 简单的标签配对检查
const stack = [];
const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];

lines.forEach((line, index) => {
  const lineNum = index + 1;
  
  // 查找所有标签
  const tagRegex = /<\/?[^>]+>/g;
  let match;
  
  while ((match = tagRegex.exec(line)) !== null) {
    const tag = match[0];
    
    if (tag.startsWith('<!--')) {
      // 跳过注释
      continue;
    }
    
    if (tag.startsWith('</')) {
      // 结束标签
      const tagName = tag.match(/<\/([^>\s]+)/)[1];
      if (stack.length === 0) {
        console.log(`Line ${lineNum}: Unmatched closing tag: ${tag}`);
      } else {
        const lastOpen = stack.pop();
        if (lastOpen !== tagName) {
          console.log(`Line ${lineNum}: Tag mismatch. Expected </${lastOpen}>, found ${tag}`);
        }
      }
    } else if (tag.endsWith('/>') || selfClosingTags.includes(tag.match(/<([^>\s]+)/)[1])) {
      // 自闭合标签，不需要处理
      continue;
    } else {
      // 开始标签
      const tagName = tag.match(/<([^>\s]+)/)[1];
      stack.push(tagName);
    }
  }
});

if (stack.length > 0) {
  console.log('Unclosed tags:', stack);
} else {
  console.log('All tags are properly matched!');
}
