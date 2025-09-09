import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { LogoSpaceEyes } from ".."

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white/95 supports-[backdrop-filter]:bg-white/85 backdrop-blur-md shadow-lg border-b border-gray-300"
          : "bg-white/80 supports-[backdrop-filter]:bg-white/65 backdrop-blur-md shadow-md border-b border-gray-200"
        }`}
    >
     
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 to-white/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex justify-between items-center h-16">
       
          <div className="flex items-center space-x-2.5">
            <div className="flex-shrink-0 flex items-center">
              <img
                src={LogoSpaceEyes.src}
                alt="Space Eyes Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="h-6 border-l border-gray-300 mx-2"  />
              <div className="ml-1 leading-tight">
                <span className="text-xl font-bold text-orange-500 block">FireWatch</span>
                <span className="text-xs text-gray-500 -mt-0.5 block">Global Fire Monitor</span>
              </div>
            </div>
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-2">
              <a
                href="https://r3s7014k-3000.use2.devtunnels.ms/"
                className="text-gray-900 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors"
              >
                Docs
              </a>
            </nav>

            <div className="h-6 border-l border-gray-300" />

            
            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5 transition-all duration-300 ease-out shadow-md shadow-orange-600/20"
            >
              Log In
            </a>
            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-2xl text-sm font-semibold hover:bg-orange-600 hover:text-white hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Sign Up
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="relative z-10 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200">
              <a
                href="https://r3s7014k-3000.use2.devtunnels.ms/"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="w-4 h-4 mr-3" />
                Docs
              </a>
              <div className="pt-2 mt-1 border-t border-gray-200 space-y-3">
                <a
                  href="https://firewatch.space-eyes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold block text-center shadow-md shadow-orange-600/20 active:scale-95 active:shadow-sm transition-all duration-200 ease-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </a>
                <a
                  href="https://firewatch.space-eyes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent border-2 border-orange-600 text-orange-600 px-4 py-2.5 rounded-xl text-sm font-semibold block text-center active:bg-orange-600 active:text-white active:scale-95 transition-all duration-200 ease-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
