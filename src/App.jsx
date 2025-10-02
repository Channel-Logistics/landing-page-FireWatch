import { useRef } from 'react'
import Header from './components/Layout/Header'
import ElegantCarousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'
import SingleShowcase from './components/ui/SingleShowCase'
import Footer from './components/Layout/Footer'
import CrossPlatform from './components/ui/CrossPlatform'
import InfoMap from './components/ui/InfoMap'
import PredictAlgoritgms from './components/ui/PredictAlgorithms'
import GeneralMetrics from './components/ui/GeneralMetrics'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Section from './components/layout/Section';


function App() {
  const scrollRef = useRef(null)

  return (
    <div className="w-full h-[100dvh] flex flex-col relative overflow-x-hidden max-w-[100vw]">

      <ScrollProgressBar containerRef={scrollRef} />

      <div className="sticky top-0 z-50 snap-none">
        <Header />
      </div>

      <main
        ref={scrollRef}
        className="
    flex-1 overflow-y-auto overflow-x-hidden max-w-[100vw] snap-y snap-mandatory scroll-smooth relative z-10
    scroll-pt-[64px] sm:scroll-pt-[72px] md:scroll-pt-[80px]
  "
      >
        <Section id="hero"><Hero /></Section>
        <Section id="carousel" className="bg-[#D6D6D6]/90 drop-shadow-sm">
          <ElegantCarousel />
        </Section>


        <Section id="cross-platform" className="items-stretch"><CrossPlatform /></Section>
        <Section id="showcase" className="items-stretch"><SingleShowcase /></Section>
        <Section id="map" className="items-stretch"><InfoMap /></Section>
        <Section id="algorithms" className="items-stretch"><PredictAlgoritgms /></Section>
        <Section id="metrics" className="items-stretch"><GeneralMetrics /></Section>



        <div className="snap-start">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App