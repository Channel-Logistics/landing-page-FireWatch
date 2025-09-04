import React from 'react';
import { Flame, Github, Twitter, Mail, Globe, Shield, AlertTriangle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
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

          
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Live Map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data & Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
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
 