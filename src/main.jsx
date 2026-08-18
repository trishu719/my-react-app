import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/theme.scss'
import App from './App'

/* import 'bootstrap/dist/css/bootstrap.min.css';
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)