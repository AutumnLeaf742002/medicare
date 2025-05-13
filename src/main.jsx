import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'

import './index.css'
import 'animate.css'
import "bootstrap-icons/font/bootstrap-icons.css"

import { AppRouter } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </StrictMode>,
)
