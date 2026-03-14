import { useState } from 'react'
import './index.css'
import PopupModel from './Components/PopupModel'

function App() {

  const [popupModel, setpopupModel] = useState(false)

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-gray-300">

        <h1 className='text-5xl font-bold mt-4'>Popup Model</h1>
        <button 
          onClick={() => setpopupModel((prev) => !prev)}
          className='bg-green-500 px-4 py-2 text-lg rounded-2xl shadow-2xl'>Popup click</button>

        {/* {popupModel && <PopupModel onClose = {()=> setpopupModel((prev)=>{return !prev})}/>} */}
        {popupModel && 
        <PopupModel onClose = {() => setpopupModel((prev) => {return !prev})} />
        }


      </div>
    </>
  )
}

export default App
