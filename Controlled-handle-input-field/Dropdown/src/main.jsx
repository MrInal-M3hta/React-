import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CascadingSelect from './CascadingSelect.jsx'
import DynamicSelect from './DynamicSelect.jsx'
import Select from './Select.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CascadingSelect />
    {/* <DynamicSelect />
    <Select /> */}
  </StrictMode>,
)
