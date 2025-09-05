import Header from './components/Layout/Header'
import ElegantCarousel from './components/ui/Carrousel'
import Hero from './components/ui/Hero'
import SingleShowcase from './components/ui/DownloadApp'
import FeaturesCards from './components/ui/FeaturesCards'
import Footer from './components/Layout/Footer'

function App() {


  return (
    <div className="w-full"> 
        <Header />
        <Hero />
        <ElegantCarousel />
        <SingleShowcase />
        <FeaturesCards />
        <Footer />
    </div>
  )
}

export default App
