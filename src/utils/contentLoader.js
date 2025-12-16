// Simple FrontMatter parser to avoid dependency issues in browser
const parseFrontMatter = (text) => {
    const pattern = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = text.match(pattern);

    if (!match) {
        return { attributes: {}, body: text };
    }

    const yamlBlock = match[1];
    const body = text.replace(pattern, '').trim();

    const attributes = {};
    yamlBlock.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim();
            // Handle basic types if needed
            if (value === 'true') attributes[key] = true;
            else if (value === 'false') attributes[key] = false;
            else if (!isNaN(Number(value)) && value !== '') attributes[key] = Number(value);
            else attributes[key] = value;
        }
    });

    return { attributes, body };
};


// 1. Get all meta.json files for structure (Courses and Chapters) -> Optional enrichment
const metaFiles = import.meta.glob('../contents/**/meta.json', { eager: true });

// 2. Get all markdown files for Notes -> Primary source of truth
const noteFiles = import.meta.glob('../contents/**/*.md', { eager: true, query: '?raw', import: 'default' });

export const loadCatalog = () => {
    const catalog = [];
    const notesContent = {};
    const coursesMap = new Map();

    // Helper to get or create course
    const getOrCreateCourse = (courseId) => {
        if (!coursesMap.has(courseId)) {
            // Try to find meta for this course
            const metaKey = `../contents/${courseId}/meta.json`;
            const meta = metaFiles[metaKey] || {};

            coursesMap.set(courseId, {
                id: meta.id || courseId,
                title: meta.title || courseId, // Fallback to folder name
                order: meta.order || 999,
                chapters: [],
                _chaptersMap: new Map()
            });
        }
        return coursesMap.get(courseId);
    };

    // Helper to get or create chapter
    const getOrCreateChapter = (course, chapterId) => {
        if (!course._chaptersMap.has(chapterId)) {
            // Try to find meta for this chapter
            const metaKey = `../contents/${course.id}/${chapterId}/meta.json`;
            const meta = metaFiles[metaKey] || {};

            // Infer order from folder name (e.g., "1", "2-limits")
            const match = chapterId.match(/^(\d+)/);
            const inferredOrder = match ? parseInt(match[1], 10) : 999;

            const chapter = {
                id: meta.id || chapterId,
                title: meta.title || chapterId, // Fallback to folder name
                order: meta.order !== undefined ? meta.order : inferredOrder,
                notes: []
            };
            course._chaptersMap.set(chapterId, chapter);
            course.chapters.push(chapter);
        }
        return course._chaptersMap.get(chapterId);
    };

    // --- Build Catalog from Note Files (structure source of truth) ---
    Object.keys(noteFiles).forEach(path => {
        const parts = path.split('/');
        // Expected: "../contents/courseId/chapterId/noteId.md"
        // parts[0]="..", [1]="contents", [2]=course, [3]=chapter, [4]=note

        if (parts.length === 5) {
            const courseId = parts[2];
            const chapterId = parts[3];
            const filename = parts[4];
            const rawContent = noteFiles[path];

            // Get or create logical structure
            const course = getOrCreateCourse(courseId);
            const chapter = getOrCreateChapter(course, chapterId);

            // Parse Note Info
            const contentStr = typeof rawContent === 'string' ? rawContent : '';
            const { attributes, body } = parseFrontMatter(contentStr);

            const basename = filename.replace('.md', '');
            const match = basename.match(/^(\d+)/);
            const inferredOrder = match ? parseInt(match[1], 10) : 999;

            const noteId = attributes.id || basename;
            const noteOrder = attributes.order !== undefined ? attributes.order : inferredOrder;
            const noteTitle = attributes.title || basename;

            // Add note to structure
            chapter.notes.push({
                id: noteId,
                title: noteTitle,
                order: noteOrder
            });

            // Store content globally
            const lookupKey = `${courseId}/${chapterId}/${noteId}`;
            notesContent[lookupKey] = body;
        }
    });

    // --- Final Sort & Clean up ---
    const sortedCatalog = Array.from(coursesMap.values())
        .sort((a, b) => a.order - b.order)
        .map(course => {
            // Sort chapters
            course.chapters.sort((a, b) => a.order - b.order);
            // Sort notes
            course.chapters.forEach(chap => {
                chap.notes.sort((a, b) => a.order - b.order);
            });
            // Remove temp map
            delete course._chaptersMap;
            return course;
        });

    return { catalog: sortedCatalog, notesContent };
};
