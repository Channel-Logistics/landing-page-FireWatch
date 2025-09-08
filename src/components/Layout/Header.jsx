import { useState } from 'react';
import { Menu, Globe, X } from 'lucide-react';
import { LogoSpaceEyes } from '..'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 snap-none">
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-18 h-18 bg-gradient-to-br flex items-center justify-center">
                <img
                  src={LogoSpaceEyes.src}
                  alt="Space Eyes Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-orange-500">FireWatch</span>
                <span className="text-xs text-gray-500 block -mt-1">Global Fire Monitor</span>
              </div>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <a
                href="#overview"
                className="text-gray-900 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors"
              >
                Docs
              </a>
            </nav>

            <div className="h-6 border-l border-gray-300"></div>


            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-2xl text-sm font-semibold hover:shadow-lg hover:shadow-orange-600/30 
      hover:-translate-y-0.5 
      transition-all duration-300 ease-out
      shadow-md shadow-orange-600/20
    "
            >
              Log In
            </a>

            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      bg-transparent border-2 border-orange-600 
      text-orange-600 px-8 py-3 rounded-2xl text-sm font-semibold
      hover:bg-orange-600 hover:text-white 
      hover:shadow-lg hover:shadow-orange-600/20
      hover:-translate-y-0.5
      transition-all duration-300 ease-out
    "
            >
              Sign Up
            </a>
          </div>



          <div className="md:hidden flex items-center space-x-2">
            {isSidebarOpen ? (
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
              >
                <X className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>

        </div>
      </div>


      {isSidebarOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#overview"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors duration-200"
            >
              <Globe className="w-4 h-4 mr-3" />
              Docs
            </a>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 space-y-3">

            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
    w-full 
    bg-gradient-to-r from-orange-600 to-orange-500 
    text-white px-4 py-2.5 rounded-xl text-sm font-semibold 
    block text-center
    shadow-md shadow-orange-600/20
    active:scale-95 active:shadow-sm
    transition-all duration-200 ease-out
  "
            >
              Log In
            </a>


            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
        w-full 
        bg-transparent border-2 border-orange-600 
        text-orange-600 px-4 py-2.5 rounded-xl text-sm font-semibold
        block text-center
        active:bg-orange-600 active:text-white active:scale-95
        transition-all duration-200 ease-out
      "
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;
