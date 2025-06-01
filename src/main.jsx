import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Landing from './routes/Landing.jsx'
import App from './routes/App.jsx'
import Colors from './routes/Colors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<App />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
