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


function App() {
  const scrollRef = useRef(null)

  return (
    <div className="w-full h-[100dvh] flex flex-col relative">

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