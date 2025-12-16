import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'katex/dist/katex.min.css' // Import KaTeX styles
import './index.css'

// Global error display helper
const showError = (error, title = 'Startup Error') => {
    document.body.innerHTML = `
        <div style="
            color: #d8000c; 
            background-color: #ffbaba;
            padding: 20px;
            margin: 20px;
            border: 1px solid #d8000c;
            border-radius: 5px;
            font-family: sans-serif;
        ">
            <h1 style="margin-top: 0;">${title}</h1>
            <pre style="white-space: pre-wrap; word-wrap: break-word;">${error.toString()}\n${error.stack || ''}</pre>
        </div>
    `;
};

const init = async () => {
    try {
        // Dynamically import App to catch errors in module evaluation (like catalog.js crashes)
        const { default: App } = await import('./App.jsx');
        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } catch (error) {
        showError(error);
    }
};

// Global handlers for runtime errors after init
window.addEventListener('error', (event) => showError(event.error || event.message, 'Runtime Error'));
window.addEventListener('unhandledrejection', (event) => showError(event.reason, 'Promise Rejection'));

init();
