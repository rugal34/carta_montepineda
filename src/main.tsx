
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'     // ← debe estar esta línea
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
