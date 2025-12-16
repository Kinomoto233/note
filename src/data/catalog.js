// ============================================
// 笔记数据文件 / Note Data File
// ============================================
// [已重构] 现在数据从 src/contents/ 目录下的 .md 和 meta.json 文件自动加载
// [Refactored] Data is now auto-loaded from .md and meta.json in src/contents/
// ============================================

import { loadCatalog } from '../utils/contentLoader';

const { catalog: dynamicCatalog, notesContent: dynamicNotesContent } = loadCatalog();

export const catalog = dynamicCatalog;
export const notesContent = dynamicNotesContent;
