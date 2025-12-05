import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const location = useLocation() // Use location to trigger animations

    // Responsive check
    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(false) // Reset on desktop
            }
        }
        checkSize()
        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)
    }, [])

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}>

            <Sidebar
                isMobile={isMobile}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main style={{
                flex: 1,
                overflowY: 'auto',
                padding: isMobile ? '1rem' : '2rem',
                maxWidth: '1000px',
                margin: '0 auto',
                width: '100%',
                position: 'relative'
            }}>
                {isMobile && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        style={{
                            position: 'fixed',
                            top: '1rem',
                            right: '1rem',
                            zIndex: 50,
                            background: '#fdf6e3',
                            border: '1px solid #d4c4a8',
                            borderRadius: '8px',
                            padding: '8px',
                            cursor: 'pointer',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Menu size={24} color="#8b4513" />
                    </button>
                )}

                {/* Keyed wrapper for Page Transition Animation */}
                <div
                    key={location.pathname} // Forces re-render and animation on path change
                    className="fade-in"
                >
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
