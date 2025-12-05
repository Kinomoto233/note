# 如何添加新笔记

本项目目前是一个静态网站，笔记内容直接存储在代码文件中。添加新笔记主要分为两步：

## 第一步：在目录中注册笔记

打开文件：`src/data/catalog.js`

你需要找到 `catalog` 数组，在对应的 **课程 (Course)** -> **章节 (Chapter)** 下面的 `notes` 数组中添加一项。

**示例结构：**

```javascript
export const catalog = [
  {
    id: 'math', // 课程ID
    title: '高等数学',
    chapters: [
      {
        id: 'calc-1', // 章节ID
        title: '第一章：极限与连续',
        notes: [
          // 在这里添加新笔记
          { id: 'limits', title: '极限的定义与性质' }, 
          { id: 'new-note-id', title: '我的新笔记标题' } // <--- 新增这行
        ]
      }
    ]
  }
];
```

> **注意**：`id` 必须是全项目唯一的英文字符串（例如 `my-new-note`），之后会用到它。

---

## 第二步：添加笔记内容

继续在 `src/data/catalog.js` 文件中，向下滚动，找到 `notesContent` 对象。

在这里添加一个新的键值对，键 (Key) 就是你刚才定义的 `id`，值 (Value) 是笔记的内容（支持 Markdown 和 LaTeX 公式）。

**示例：**

```javascript
export const notesContent = {
  // ... 原有的笔记 ...
  
  // 新增笔记内容
  'new-note-id': `
# 我的新笔记标题

这里是正文内容支持 **Markdown** 语法。

## 小节标题

还可以写数学公式：
$$ E = mc^2 $$

或者行内公式 $a^2 + b^2 = c^2$

如果需要折叠内容，可以使用：
<Collapsible title="点击查看详情">
这里是隐藏的内容...
</Collapsible>
  `,
};
```

---

## 保存并预览

保存 `src/data/catalog.js` 文件后，回到浏览器，网页会自动刷新。
1. 在左侧导航栏找到你新加的笔记标题。
2. 点击它，右侧就会显示你刚刚写的内容了！
