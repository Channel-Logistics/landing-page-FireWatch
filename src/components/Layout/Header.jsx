import React from 'react';
import { Search, Menu, X, Flame, Globe, AlertTriangle, BarChart3 } from 'lucide-react';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">FireWatch</span>
                <span className="text-xs text-gray-500 block -mt-1">Global Fire Monitor</span>
              </div>
            </div>
          </div>

          
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
              Overview
            </a>
            <a href="#fires" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
              Fires
            </a>
            <a href="#alerts" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
              Alerts
            </a>
            <a href="#predictions" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
              Predictions
            </a>
            <a href="#api" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
              API
            </a>
          </nav>

          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search fires, locations..."
                className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-64"
              />
            </div>
            <a 
              href="https://firewatch.space-eyes.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-md"
            >
              Launch App
            </a>
          </div>

          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
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
 