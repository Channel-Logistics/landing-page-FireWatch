import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Layout/Header'
import ElegantCarousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'
import SingleShowcase from './components/ui/DownloadApp'
import Footer from './components/Layout/Footer'

function App() {


  return (
    <div className="w-full"> 
        <Header />
        <Hero />
        <ElegantCarousel />
        <SingleShowcase />
        <Footer />
    </div>
  )
}

export default App
