// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import ContextProvider from './Context/Appcontext'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <ContextProvider>
     <App />
  // {/* </ContextProvider> */}
   
  // </StrictMode>,
)
