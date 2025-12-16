import fm from 'front-matter';

// 1. Get all meta.json files for structure (Courses and Chapters)
// Key: relative path, Value: module export
const metaFiles = import.meta.glob('../contents/**/meta.json', { eager: true });

// 2. Get all markdown files for Notes
// Key: relative path, Value: raw string content
const noteFiles = import.meta.glob('../contents/**/*.md', { eager: true, query: '?raw', import: 'default' });

export const loadCatalog = () => {
    const catalog = [];
    const notesContent = {};

    // Helper to find meta for a specific path
    const getMeta = (path) => {
        // adjust path to match glob key format
        const key = `../contents/${path}/meta.json`;
        return metaFiles[key] || null;
    };

    // --- Build Courses ---
    // We assume top-level folders in src/contents are courses
    const coursesMap = new Map();

    Object.keys(metaFiles).forEach(path => {
        const parts = path.split('/');
        // path example: "../contents/math/meta.json" -> parts[2] is 'math'
        // path example: "../contents/math/calc-1/meta.json" -> parts[3] is 'calc-1'

        if (parts.length === 4) {
            // It's a Course (depth 1): ../contents/{courseId}/meta.json
            const courseId = parts[2];
            const meta = metaFiles[path];
            coursesMap.set(courseId, {
                id: meta.id || courseId,
                title: meta.title || courseId,
                order: meta.order || 99,
                chapters: [],
                _chaptersMap: new Map() // temporary helper
            });
        }
    });

    // --- Build Chapters ---
    Object.keys(metaFiles).forEach(path => {
        const parts = path.split('/');
        if (parts.length === 5) {
            // It's a Chapter (depth 2): ../contents/{courseId}/{chapterId}/meta.json
            const courseId = parts[2];
            const chapterId = parts[3];
            const meta = metaFiles[path];

            const course = coursesMap.get(courseId);
            if (course) {
                const chapter = {
                    id: meta.id || chapterId,
                    title: meta.title || chapterId,
                    order: meta.order || 99,
                    notes: []
                };
                course._chaptersMap.set(chapterId, chapter);
                course.chapters.push(chapter);
            }
        }
    });

    // --- Build Notes ---
    Object.keys(noteFiles).forEach(path => {
        const parts = path.split('/');
        // Example: "../contents/math/calc-1/limits.md"
        // parts[2]: courseId
        // parts[3]: chapterId
        // parts[4]: filename.md

        if (parts.length === 5) {
            const courseId = parts[2];
            const chapterId = parts[3];
            const filename = parts[4];
            const rawContent = noteFiles[path];

            // Parse FrontMatter
            const { attributes, body } = fm(rawContent);
            const noteId = attributes.id || filename.replace('.md', '');

            const course = coursesMap.get(courseId);
            if (course) {
                const chapter = course._chaptersMap.get(chapterId);
                if (chapter) {
                    chapter.notes.push({
                        id: noteId,
                        title: attributes.title || noteId,
                        order: attributes.order || 99
                    });

                    // Store content
                    notesContent[noteId] = body;
                }
            }
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
