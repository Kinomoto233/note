import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { notesContent } from '../data/catalog';
import Collapsible from './Collapsible';

// Simple recursive parser for nested <Collapsible> tags
const parseContent = (text) => {
    const result = [];
    let buffer = '';
    let i = 0;

    while (i < text.length) {
        if (text.substring(i).startsWith('<Collapsible')) {
            // Push accumulated buffer as Markdown
            if (buffer) {
                result.push({ type: 'markdown', content: buffer });
                buffer = '';
            }

            // Parse current Collapsible start
            // Crude attribute parser
            const startTagEnd = text.indexOf('>', i);
            const tagContent = text.substring(i, startTagEnd + 1);
            const titleMatch = tagContent.match(/title="([^"]*)"/);
            const title = titleMatch ? titleMatch[1] : '详情';

            i = startTagEnd + 1;

            // Find matching closing tag with depth tracking
            let depth = 1;
            let contentStart = i;
            let contentEnd = i;

            while (depth > 0 && i < text.length) {
                if (text.substring(i).startsWith('<Collapsible')) {
                    depth++;
                    i += 12; // Length of <Collapsible
                } else if (text.substring(i).startsWith('</Collapsible>')) {
                    depth--;
                    if (depth === 0) {
                        contentEnd = i;
                        i += 14; // Length of </Collapsible>
                        break;
                    }
                    i += 14;
                } else {
                    i++;
                }
            }

            const innerText = text.substring(contentStart, contentEnd);
            // Recursively parse inner content
            const children = parseContent(innerText);

            result.push({ type: 'collapsible', title, children });
        } else {
            buffer += text[i];
            i++;
        }
    }

    if (buffer) {
        result.push({ type: 'markdown', content: buffer });
    }

    return result;
};

// Component to render parsed tree
const RenderTree = ({ data }) => {
    return data.map((item, index) => {
        if (item.type === 'markdown') {
            return (
                <ReactMarkdown
                    key={index}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {item.content}
                </ReactMarkdown>
            );
        } else if (item.type === 'collapsible') {
            return (
                <Collapsible key={index} title={item.title}>
                    <RenderTree data={item.children} />
                </Collapsible>
            );
        }
        return null;
    });
};

const NoteViewer = ({ defaultGreeting = false }) => {
    const { noteId } = useParams();

    if (defaultGreeting) {
        return (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: '#666' }}>
                <h1>欢迎来到您的笔记</h1>
                <p>从左侧目录选择笔记开始学习。</p>
                <p>支持 <strong>LaTeX 数学公式</strong> 和 <strong>多级折叠例题</strong>。</p>
            </div>
        );
    }

    const content = notesContent[noteId];

    if (!content) {
        return <div>找不到该笔记。</div>;
    }

    const parsedData = parseContent(content);

    return (
        <div className="note-content" style={{ paddingBottom: '3rem' }}>
            <RenderTree data={parsedData} />
        </div>
    );
};

export default NoteViewer;
