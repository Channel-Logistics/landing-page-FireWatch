import { useState } from 'react'
import Header from './components/Layout/Header'
import Carrousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <Header />
        <Hero />
        <Carrousel />
    </>
  )
}

export default App
