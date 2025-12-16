import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NoteViewer from './components/NoteViewer'

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<NoteViewer defaultGreeting={true} />} />
                    <Route path="/:subject/:chapter/:noteId" element={<NoteViewer />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
