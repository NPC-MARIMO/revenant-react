import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page1 />
    <Page2/>
    <Page3/>
   
  </StrictMode>
)
