import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{padding:16}}>
      <h1>Exam Platform</h1>
      <p>Frontend placeholder is running. Set <code>VITE_API_BASE</code> to your backend URL.</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
