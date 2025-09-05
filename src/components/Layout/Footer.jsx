<<<<<<< Updated upstream
import { Flame, Github, Mail, Globe, AlertTriangle } from 'lucide-react';
=======
import {  Github, Mail, Globe, AlertTriangle } from 'lucide-react';
import { LogoSpaceEyesWhite } from '..';
>>>>>>> Stashed changes

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br  rounded flex items-center justify-center">
                <img
                  src={LogoSpaceEyesWhite.src}
                  alt="Space Eyes Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold">FireWatch</span>
                <span className="text-xs text-gray-400 block">Global Fire Monitor</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advanced wildfire monitoring system providing real-time global fire detection,
              early warning alerts, and comprehensive data analytics to protect communities
              and natural resources worldwide.
            </p>


            <div className="bg-red-900 bg-opacity-50 border border-red-700 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-red-300 font-medium text-sm mb-1">Emergency Notice</div>
                  <div className="text-red-200 text-sm leading-snug">
                    In case of immediate fire danger, contact your local emergency services.
                    FireWatch is a monitoring tool and should not replace official emergency protocols.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/space-eyes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://space-eyes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Sitio web"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@firewatch.io"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 space-x-1.5">
            <div className="flex sm:flex-row md:flex-row justify-between">

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FireWatch</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SeaWatch</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CarbonWatch</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FinancialWatch</a></li>
                </ul>
              </div>

              <div className="md:h-43 sm:50 border-l border-gray-300"></div>

              <div className='sm: mx-16'>
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FireWatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
