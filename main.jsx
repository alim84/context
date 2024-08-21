import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserproviderContext from './context/UserproviderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserproviderContext>
    <App />
    </UserproviderContext>
  </StrictMode>,
)
