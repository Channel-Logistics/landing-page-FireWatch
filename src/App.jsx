import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Layout/Header'
import Carrousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'
import SmallVideoCard from './components/ui/video'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <Header />
        <Hero />
        <SmallVideoCard/>
        <Carrousel />
    </>
  )
}

export default App
