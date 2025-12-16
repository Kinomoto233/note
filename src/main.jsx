import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'katex/dist/katex.min.css' // Import KaTeX styles
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

try {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} catch (error) {
    document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Application Error</h1><pre>${error.toString()}\n${error.stack}</pre></div>`;
}

// Global error handler for uncaught promises/exceptions
window.addEventListener('error', (event) => {
    document.body.innerHTML += `<div style="color: red; padding: 20px; border-top: 1px solid #ccc;"><h3>Runtime Error</h3><pre>${event.message}</pre></div>`;
});
window.addEventListener('unhandledrejection', (event) => {
    document.body.innerHTML += `<div style="color: red; padding: 20px; border-top: 1px solid #ccc;"><h3>Promise Rejection</h3><pre>${event.reason}</pre></div>`;
});
