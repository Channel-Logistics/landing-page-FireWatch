import { Flame, MapPin, Newspaper, Zap, Satellite, Layers, BookOpen, Apple, Cloud, Feather, Palette, Code, Github, Package, Network } from 'lucide-react';
import { LogoSpaceEyes, prediction } from ".."


const MainContent = () => {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Key Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive fire monitoring solutions designed for developers and organizations worldwide
            </p>
          </div>

          <div className="mb-24">
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-red-50 px-8 py-4 rounded-2xl border border-orange-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Layers className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Map Visualization</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mr-4 shadow-sm">
                      <Flame className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">FireWatch</h4>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Monitor fires worldwide with real-time satellite data and advanced analytics platform.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200">
                      <BookOpen className="w-4 h-4 mr-2" /> Web Docs
                    </a>
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-orange-50 border border-orange-200 text-sm font-semibold rounded-xl text-orange-700 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200">
                      <Zap className="w-4 h-4 mr-2" /> Examples
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mr-4 shadow-sm">
                      <Apple className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Mobile SDKs</h4>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Add real-time fire monitoring capabilities to your iOS and Android applications.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200">
                      <Apple className="w-4 h-4 mr-2" /> iOS SDK
                    </a>
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-green-50 border border-green-200 text-sm font-semibold rounded-xl text-green-700 hover:bg-green-100 transition-all duration-200">
                      <Cloud className="w-4 h-4 mr-2" /> Android
                    </a>
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-purple-50 border border-purple-200 text-sm font-semibold rounded-xl text-purple-700 hover:bg-purple-100 transition-all duration-200">
                      <Feather className="w-4 h-4 mr-2" /> Flutter
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mr-4 shadow-sm">
                      <Network className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Data Analysis</h4>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Advanced tools to analyze fire trends, affected areas, and predict future risks.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-gray-50 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200">
                      <BookOpen className="w-4 h-4 mr-2" /> Guides
                    </a>
                    <a href="#" className="inline-flex items-center px-5 py-3 bg-blue-50 border border-blue-200 text-sm font-semibold rounded-xl text-blue-700 hover:bg-blue-100 transition-all duration-200">
                      <Newspaper className="w-4 h-4 mr-2" /> Reports
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-2xl border border-blue-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Satellite className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Data & Access APIs</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "FireTile Service", desc: "Generate fire data tilesets for your applications", icon: Layers, color: "orange" },
                { name: "Uploads API", desc: "Create and update vector datasets from spatial data", icon: Cloud, color: "blue" },
                { name: "Datasets API", desc: "Manage vector datasets in the cloud for tilesets", icon: Package, color: "green" },
                { name: "Tilequery API", desc: "Query vector tileset features near specific points", icon: MapPin, color: "purple" }
              ].map((api, index) => (
                <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`p-3 bg-gradient-to-br from-${api.color}-100 to-${api.color}-200 rounded-xl w-fit mb-4 shadow-sm`}>
                    <api.icon className={`w-6 h-6 text-${api.color}-600`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{api.name}</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{api.desc}</p>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-semibold rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200">
                    <BookOpen className="w-3 h-3 mr-2" /> API Docs
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Everything you need to build amazing fire monitoring applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Map Design",
                icon: Palette,
                color: "purple",
                desc: "Add color, style, and touches to make your maps stand out.",
                links: ["Firewatch Studio", "Maki Icon Editor", "Firewatch Core Styles", "Mapbox Studio"]
              },
              {
                title: "API Playgrounds",
                icon: Code,
                color: "green",
                desc: "Explore Firewatch APIs in an interactive environment.",
                links: ["Directions API", "Search Box API", "Static Images API", "Isochrone API", "See all"]
              },
              {
                title: "Open Code",
                icon: Github,
                color: "gray",
                desc: "Browse open source code available on GitHub.",
                links: ["FireWatch Vector Tile Specification", "Space Eyes", "FireWatch Mobile", "See all"]
              },
              {
                title: "Web Service Interfaces",
                icon: Network,
                color: "orange",
                desc: "Access and integrate with Firewatch web services using SDKs.",
                links: ["Python", "React", "React Native", "JavaScript & TypeScript", "See all"]
              }
            ].map((resource, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`p-4 bg-gradient-to-br from-${resource.color}-100 to-${resource.color}-200 rounded-2xl w-fit mb-6 shadow-sm`}>
                  <resource.icon className={`w-7 h-7 text-${resource.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{resource.desc}</p>
                <ul className="space-y-3">
                  {resource.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className={`text-orange-600 hover:text-orange-800 font-medium hover:underline transition-colors ${link.includes('See all') ? 'font-bold' : ''}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200 rounded-3xl p-10 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 transform translate-x-8 -translate-y-8"></div>
            <div className="relative flex items-start space-x-6">
              <div className="p-4 bg-white rounded-2xl shadow-md flex-shrink-0">
                <Flame className="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-4">Emergency Alert</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In case of imminent fire danger, contact your local emergency services immediately.
                  FireWatch is a monitoring tool and should not replace official emergency protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;