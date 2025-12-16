import { loadCatalog } from '../utils/contentLoader';

const { catalog: dynamicCatalog, notesContent: dynamicNotesContent } = loadCatalog();

export const catalog = dynamicCatalog;
export const notesContent = dynamicNotesContent;
