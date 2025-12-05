import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Collapsible = ({ title = "查看详情", children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            margin: '1rem 0',
            backgroundColor: 'rgba(255,255,255,0.4)',
            overflow: 'hidden'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)',
                    fontSize: '1rem'
                }}
            >
                <div style={{
                    marginRight: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.3s ease'
                }}>
                    <ChevronDown size={20} />
                </div>
                {title}
            </button>

            <div style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.3s ease-out',
            }}>
                <div style={{ overflow: 'hidden' }}>
                    <div style={{
                        padding: '0 1rem', // Keep horizontal padding constant
                        paddingTop: isOpen ? '1rem' : '0',
                        paddingBottom: isOpen ? '1rem' : '0',
                        borderTop: isOpen ? '1px solid var(--color-border)' : '1px solid transparent',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        transition: 'all 0.3s ease',
                        opacity: isOpen ? 1 : 0
                    }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapsible;
