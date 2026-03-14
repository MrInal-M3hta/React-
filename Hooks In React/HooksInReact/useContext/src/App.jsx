import { Profiler, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Footer/>
    </>
  )
}

export default App
