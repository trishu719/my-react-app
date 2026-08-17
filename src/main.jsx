import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/theme.scss'
import App from './App'
import { WishlistProvider } from './ContextAPI/Providers/WishlistProvider'

/* import 'bootstrap/dist/css/bootstrap.min.css';
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
    <App/>
    </WishlistProvider>
  </StrictMode>,
)