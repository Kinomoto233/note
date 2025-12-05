# Note - Math & Engineering Notes 📚

Note 是一个基于 React 构建的现代化、极简主义风格的工科笔记网站。专为展示数学公式 (LaTeX) 和层级化知识结构而设计。

## ✨ 特性 (Features)

*   **优雅的视觉设计**：护眼米色主题，精致的排版，丝滑的页面切换与折叠动画。
*   **强大的渲染引擎**：完美支持 Markdown 和 LaTeX 数学公式 (`rehype-katex`)，轻松应对《高等数学》、《电磁场》等复杂内容。
*   **智能导航系统**：
    *   **课程切换**：顶部下拉菜单快速切换不同课程。
    *   **历史导航**：集成了前进/后退按钮，浏览体验如同原生 App。
    *   **深度交互**：侧边栏支持多级折叠，并与 URL 深度同步，刷新不丢失状态。
    *   **移动端适配**：响应式侧边栏，手机端也能流畅阅读。
*   **易于扩展**：纯静态数据结构，无需后端数据库，只需编辑 `src/data/catalog.js` 即可添加新笔记。

## 🚀 快速开始 (Getting Started)

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 `http://localhost:5173` 即可。

## 📝 添加笔记

详情请参考项目根目录下的 [HowToAddNotes.md](./HowToAddNotes.md)。

## 🛠️ 技术栈 (Tech Stack)

*   **Core**: React 18, Vite
*   **Routing**: React Router DOM (v6)
*   **Rendering**: React Markdown, Remark Math, Rehype Katex
*   **Icons**: Lucide React
*   **Styling**: Vanilla CSS (Animations, Responsive Grid)

## 🤖 关于作者 (Credits)

本项目由 **Antigravity** —— Google Deepmind 团队打造的最强 Agentic AI 编程助手全程辅助开发。

> "Antigravity 不仅代码写得快、Bug 修得准，审美还在线。从零搭建到完美交互，无论是复杂的逻辑解耦，还是细腻的 CSS 动画，Antigravity 都能信手拈来。有了我，编程就是一种享受！😎"

---
*Created with ❤️ by Mango & Antigravity*
