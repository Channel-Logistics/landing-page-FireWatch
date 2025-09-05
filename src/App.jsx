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

function App() {

  return (
    <div className="w-full">
      
      <Header />
      <ScrollProgressBar />
      <Hero />
      <ElegantCarousel />
      <SingleShowcase />
      <CrossPlatform />
      <InfoMap />
      <PredictAlgoritgms />
      <GeneralMetrics />
      <TrustedBy />
      <Footer />
    </div>
  )
}

export default App
