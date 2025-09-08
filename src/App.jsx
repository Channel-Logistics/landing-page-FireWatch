import { useRef } from 'react'

import Header from './components/Layout/Header'
import ElegantCarousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'
import SingleShowcase from './components/ui/DownloadApp'
import Footer from './components/Layout/Footer'
import TrustedBy from './components/ui/TrustedBy'
import CrossPlatform from './components/ui/CrossPlatform'
import InfoMap from './components/ui/InfoMap'
import PredictAlgoritgms from './components/ui/PredictAlgorithms'
import GeneralMetrics from './components/ui/GeneralMetrics'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Section from './components/Layout/Section'

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-white overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M 0,40 L 40,0" stroke="#e5e7eb" strokeWidth="1" opacity="0.4"/>
            <path d="M -10,10 L 10,-10" stroke="#e5e7eb" strokeWidth="1" opacity="0.4"/>
            <path d="M 30,50 L 50,30" stroke="#e5e7eb" strokeWidth="1" opacity="0.4"/>
          </pattern>
          
          <pattern id="orangeLines" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0,60 L 60,0" stroke="#fed7aa" strokeWidth="1.5" opacity="0.3"/>
            <path d="M -15,15 L 15,-15" stroke="#fed7aa" strokeWidth="1.5" opacity="0.3"/>
            <path d="M 45,75 L 75,45" stroke="#fed7aa" strokeWidth="1.5" opacity="0.3"/>
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        <rect width="100%" height="100%" fill="url(#orangeLines)" />
        
        <circle cx="150" cy="100" r="3" fill="#d1d5db" opacity="0.6" />
        <circle cx="350" cy="180" r="2" fill="#d1d5db" opacity="0.4" />
        <circle cx="550" cy="120" r="4" fill="#d1d5db" opacity="0.5" />
        <circle cx="750" cy="200" r="2.5" fill="#d1d5db" opacity="0.6" />
        <circle cx="950" cy="80" r="3.5" fill="#d1d5db" opacity="0.4" />
        <circle cx="1150" cy="160" r="2" fill="#d1d5db" opacity="0.5" />
        <circle cx="1350" cy="140" r="3" fill="#d1d5db" opacity="0.6" />
        <circle cx="1550" cy="90" r="2.5" fill="#d1d5db" opacity="0.4" />
        <circle cx="1750" cy="170" r="4" fill="#d1d5db" opacity="0.5" />
        
        <circle cx="250" cy="300" r="2.5" fill="#fdba74" opacity="0.5" />
        <circle cx="450" cy="380" r="3" fill="#fdba74" opacity="0.4" />
        <circle cx="650" cy="320" r="2" fill="#fdba74" opacity="0.6" />
        <circle cx="850" cy="400" r="3.5" fill="#fdba74" opacity="0.4" />
        <circle cx="1050" cy="280" r="2.5" fill="#fdba74" opacity="0.5" />
        <circle cx="1250" cy="360" r="3" fill="#fdba74" opacity="0.6" />
        <circle cx="1450" cy="340" r="2" fill="#fdba74" opacity="0.4" />
        <circle cx="1650" cy="390" r="4" fill="#fdba74" opacity="0.5" />
        
        <circle cx="100" cy="500" r="3" fill="#d1d5db" opacity="0.5" />
        <circle cx="300" cy="580" r="2.5" fill="#fdba74" opacity="0.4" />
        <circle cx="500" cy="520" r="3.5" fill="#d1d5db" opacity="0.6" />
        <circle cx="700" cy="600" r="2" fill="#fdba74" opacity="0.5" />
        <circle cx="900" cy="480" r="3" fill="#d1d5db" opacity="0.4" />
        <circle cx="1100" cy="560" r="2.5" fill="#fdba74" opacity="0.6" />
        <circle cx="1300" cy="540" r="4" fill="#d1d5db" opacity="0.5" />
        <circle cx="1500" cy="590" r="2" fill="#fdba74" opacity="0.4" />
        <circle cx="1700" cy="470" r="3.5" fill="#d1d5db" opacity="0.6" />
        
        <line x1="0" y1="250" x2="400" y2="150" stroke="#e5e7eb" strokeWidth="2" opacity="0.3" />
        <line x1="300" y1="0" x2="700" y2="200" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        <line x1="600" y1="50" x2="1000" y2="250" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.3" />
        <line x1="900" y1="0" x2="1300" y2="300" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        <line x1="1200" y1="100" x2="1600" y2="300" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.3" />
        <line x1="1500" y1="0" x2="1920" y2="200" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        
        <line x1="0" y1="450" x2="350" y2="650" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.3" />
        <line x1="250" y1="400" x2="650" y2="700" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        <line x1="500" y1="350" x2="900" y2="750" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.3" />
        <line x1="750" y1="300" x2="1150" y2="800" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        <line x1="1000" y1="400" x2="1400" y2="700" stroke="#e5e7eb" strokeWidth="1.5" opacity="0.3" />
        <line x1="1300" y1="350" x2="1920" y2="750" stroke="#fed7aa" strokeWidth="2" opacity="0.25" />
        
        <circle cx="80" cy="700" r="2" fill="#d1d5db" opacity="0.4" />
        <circle cx="280" cy="780" r="3" fill="#fdba74" opacity="0.5" />
        <circle cx="480" cy="720" r="2.5" fill="#d1d5db" opacity="0.6" />
        <circle cx="680" cy="800" r="2" fill="#fdba74" opacity="0.4" />
        <circle cx="880" cy="680" r="3.5" fill="#d1d5db" opacity="0.5" />
        <circle cx="1080" cy="760" r="2.5" fill="#fdba74" opacity="0.6" />
        <circle cx="1280" cy="740" r="3" fill="#d1d5db" opacity="0.4" />
        <circle cx="1480" cy="820" r="2" fill="#fdba74" opacity="0.5" />
        <circle cx="1680" cy="700" r="4" fill="#d1d5db" opacity="0.6" />
        <circle cx="1880" cy="780" r="2.5" fill="#fdba74" opacity="0.4" />
      </svg>
    </div>
  )
}

function App() {
  const scrollRef = useRef(null)

  return (
    <div className="w-full h-[100dvh] flex flex-col relative">
      <Background />

      <ScrollProgressBar containerRef={scrollRef} />

      <div className="sticky top-0 z-50 snap-none">
        <Header />
      </div>

      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth relative z-10"
      >
        <Section id="hero"><Hero /></Section>
        <Section id="carousel"><ElegantCarousel /></Section>

        <Section id="showcase" className="items-stretch"><SingleShowcase /></Section>
        <Section id="cross-platform" className="items-stretch"><CrossPlatform /></Section>
        <Section id="map" className="items-stretch"><InfoMap /></Section>
        <Section id="algorithms" className="items-stretch"><PredictAlgoritgms /></Section>
        <Section id="metrics" className="items-stretch"><GeneralMetrics /></Section>

        <div className="snap-start">
          <TrustedBy />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App