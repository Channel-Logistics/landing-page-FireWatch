import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Layout/Header'
import Carrousel from './components/ui/Carrousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Carrousel />
      
    </>
  )
}

export default App
