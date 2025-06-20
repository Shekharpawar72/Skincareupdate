import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingSection from "./components/LandingSection";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <LandingSection /> 
      
    </>
  )
}

export default App
