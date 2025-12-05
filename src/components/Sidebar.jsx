import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { catalog } from '../data/catalog';
import { ChevronRight, ChevronDown, FileText, X, ArrowLeft, ArrowRight } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isMobile }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedChapters, setExpandedChapters] = useState({});
    const [activeCourseId, setActiveCourseId] = useState(catalog[0]?.id);

    // Parse URL to get active IDs
    const pathParts = location.pathname.split('/');
    // URL structure: /note/:courseId/:chapterId/:noteId
    // split: ['', 'note', 'courseId', 'chapterId', 'noteId']
    const currentNoteId = (pathParts[1] === 'note' && pathParts[4]) ? pathParts[4] : null;

    // Dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sync state with URL location
    useEffect(() => {
        if (pathParts[1] === 'note' && pathParts[2]) {
            const urlCourseId = pathParts[2];
            if (urlCourseId !== activeCourseId) {
                setActiveCourseId(urlCourseId);
            }

            // Auto expand chapter if we are in one
            const urlChapterId = pathParts[3];
            if (urlChapterId) {
                setExpandedChapters(prev => ({ ...prev, [urlChapterId]: true }));
            }
        }
    }, [location.pathname]);

    const toggleChapter = (chapterId) => {
        setExpandedChapters(prev => ({
            ...prev,
            [chapterId]: prev[chapterId] === false ? true : false
        }));
    };

    const activeCourse = catalog.find(c => c.id === activeCourseId) || catalog[0];

    const sidebarStyle = {
        width: '280px',
        backgroundColor: '#fdf6e3',
        borderRight: '1px solid #e0d0b8',
        height: '100%',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: isMobile ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        zIndex: 100,
        transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: isMobile && isOpen ? '2px 0 10px rgba(0,0,0,0.1)' : 'none'
    };

    return (
        <>
            {isMobile && isOpen && (
                <div
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        zIndex: 90,
                        backdropFilter: 'blur(2px)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                />
            )}

            <nav style={sidebarStyle} title="课程目录">
                <div style={{
                    padding: '1rem',
                    borderBottom: '1px solid #e0d0b8',
                    backgroundColor: '#f8f0dc',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    zIndex: 101 // Ensure dropdown goes over content if needed
                }}>
                    {isMobile && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b4513' }}>
                                <X size={20} />
                            </button>
                        </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                            onClick={() => navigate(-1)}
                            title="返回上一页"
                            className="nav-btn"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        {/* Custom Animated Dropdown */}
                        <div style={{ flex: 1, position: 'relative' }} ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                style={{
                                    width: '100%',
                                    padding: '6px 24px 6px 12px',
                                    borderRadius: '6px',
                                    border: `1px solid ${isDropdownOpen ? '#8b4513' : '#8b4513'}`,
                                    backgroundColor: '#fff',
                                    color: '#4a3b2a',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span>{activeCourse?.title}</span>
                                <ChevronDown size={14} style={{
                                    transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease'
                                }} />
                            </button>

                            {/* Dropdown Options Container with Animation */}
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                marginTop: '4px',
                                backgroundColor: '#fff',
                                border: '1px solid #d4c4a8',
                                borderRadius: '6px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                zIndex: 1000,
                                // Animation Logic
                                opacity: isDropdownOpen ? 1 : 0,
                                transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                                pointerEvents: isDropdownOpen ? 'auto' : 'none',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {catalog.map(course => (
                                        <button
                                            key={course.id}
                                            onClick={() => {
                                                setActiveCourseId(course.id);
                                                setIsDropdownOpen(false);
                                            }}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '10px 12px',
                                                background: activeCourseId === course.id ? '#fdf6e3' : 'transparent',
                                                color: activeCourseId === course.id ? '#8b4513' : '#4a3b2a',
                                                fontWeight: activeCourseId === course.id ? 'bold' : 'normal',
                                                border: 'none',
                                                borderBottom: '1px solid #eee',
                                                cursor: 'pointer',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (activeCourseId !== course.id) e.currentTarget.style.background = '#fafafa';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (activeCourseId !== course.id) e.currentTarget.style.background = 'transparent';
                                            }}
                                        >
                                            {course.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate(1)}
                            title="前进下一页"
                            className="nav-btn"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                    {activeCourse && (
                        <div className="fade-in" key={activeCourse.id}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {activeCourse.chapters.map(chapter => {
                                    const isExpanded = expandedChapters[chapter.id] !== false;
                                    return (
                                        <div key={chapter.id} style={{ marginBottom: '0.5rem' }}>
                                            <button
                                                onClick={() => toggleChapter(chapter.id)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    padding: '8px 12px',
                                                    background: 'rgba(0,0,0,0.03)',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    borderRadius: '6px',
                                                    color: '#4a3b2a',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.95rem',
                                                    transition: 'all 0.2s',
                                                    textAlign: 'left'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
                                            >
                                                <div style={{
                                                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.2s ease',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginRight: '6px'
                                                }}>
                                                    <ChevronRight size={16} />
                                                </div>
                                                {chapter.title}
                                            </button>

                                            <div
                                                className="chapter-list-grid"
                                                style={{
                                                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                                                    opacity: isExpanded ? 1 : 0.5,
                                                    transition: 'all 0.3s ease-out'
                                                }}
                                            >
                                                <div style={{ overflow: 'hidden' }}>
                                                    <ul style={{
                                                        listStyle: 'none',
                                                        padding: 0,
                                                        margin: '6px 0 8px 12px',
                                                        borderLeft: '2px dashed #d4c4a8'
                                                    }}>
                                                        {chapter.notes.map(note => {
                                                            const isActive = currentNoteId === note.id;

                                                            // Brute-force inline styles fallback
                                                            const activeStyle = isActive ? {
                                                                color: '#8b4513',
                                                                fontWeight: 'bold',
                                                                backgroundColor: 'rgba(139, 69, 19, 0.08)',
                                                                borderColor: '#8b4513',
                                                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                                                            } : {};

                                                            return (
                                                                <li key={note.id} style={{ marginBottom: '4px', paddingLeft: '8px' }}>
                                                                    <Link
                                                                        to={`/note/${activeCourse.id}/${chapter.id}/${note.id}`}
                                                                        onClick={isMobile ? onClose : undefined}
                                                                        className={`sidebar-note-link ${isActive ? 'active' : ''}`}
                                                                        title={note.title}
                                                                        style={activeStyle}
                                                                    >
                                                                        <FileText size={14} style={{ marginRight: '8px', opacity: isActive ? 1 : 0.7, flexShrink: 0 }} />
                                                                        <span style={{
                                                                            whiteSpace: 'nowrap',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            flex: 1
                                                                        }}
                                                                        >
                                                                            {note.title}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
