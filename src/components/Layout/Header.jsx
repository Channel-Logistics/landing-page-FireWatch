import { Search, Menu, Flame, Globe, AlertTriangle } from 'lucide-react';
import {LogoSpaceEyes} from '..'

const Header = ({ isMobileMenuOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br flex items-center justify-center">
                <img
                  src={LogoSpaceEyes.src}
                  alt="Space Eyes Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">FireWatch</span>
                <span className="text-xs text-gray-500 block -mt-1">Global Fire Monitor</span>
              </div>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-6">

            <nav className="flex space-x-8">
              <a
                href="#overview"
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Docs
              </a>
            </nav>


            <div className="h-6 border-l border-gray-300"></div>


            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-md"
            >
              Log In
            </a>
          </div>



          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#overview"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
            >
              <Globe className="w-4 h-4 mr-3" />
              Overview
            </a>
            <a
              href="#fires"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 rounded-lg"
            >
              <Flame className="w-4 h-4 mr-3" />
              Fires
            </a>
            <a
              href="#alerts"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 rounded-lg"
            >
              <AlertTriangle className="w-4 h-4 mr-3" />
              Alerts
            </a>
            <a
              href="#data-sources"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 rounded-lg"
            >
              <Search className="w-4 h-4 mr-3" />
              Data Sources
            </a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <a
              href="https://firewatch.space-eyes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium block text-center"
            >
              Launch FireWatch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
