import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NoteViewer from './components/NoteViewer'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<NoteViewer defaultGreeting={true} />} />
                    <Route path="/note/:subject/:chapter/:noteId" element={<NoteViewer />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
