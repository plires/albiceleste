import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'

import 'normalize.css/normalize.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/js/app.js'
import '@/assets/css/fonts.css'
import '@/assets/css/app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
