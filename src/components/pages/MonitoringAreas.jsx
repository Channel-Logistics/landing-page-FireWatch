import { MapPin, Edit, Bell } from 'lucide-react';
import { MoniAreas, Area, Polygon } from '..';

export default function MonitoringAreas() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Monitoring Areas</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Create custom areas by defining polygons or entering an address with a radius. Enable alerts to receive emails when fires are reported nearby.
          </p>
        </header>

        <section className="py-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Visual Guide: Step-by-Step Interface
          </h2>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-1 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    Create New Area
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Receive fire data and alerts for a specific Monitoring Area by defining custom bounds.
                    This step allows you to establish the initial monitoring zone for your fire detection system.
                  </p>
                </div>
              </div>
              <div className="order-2 lg:order-2 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-full h-full rounded-lg flex items-center justify-center bg-gray-50">
                  <img
                    src={MoniAreas.src}
                    alt={MoniAreas.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-1 lg:order-1">
                <div className="w-85 h-full rounded-lg flex items-center justify-center bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={Polygon.src}
                    alt={Polygon.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    Areas List and Management
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                  Create an area by entering an address and selecting a custom radius to monitor proximity.
                  This final step allows you to manage all your monitoring areas from a centralized interface with easy access to view and modify settings.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 items-center justify-center">
              <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Address & Radius</h3>
              <p className="text-gray-600">
                Enter a specific address and set a custom radius to create a circular monitoring zone around your property or area of interest.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 items-center justify-center">
              <Edit className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Draw Polygon</h3>
              <p className="text-gray-600">
                Draw custom polygons on the map to define irregular monitoring areas that match your specific needs and boundaries.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 items-center justify-center">
              <Bell className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Real-Time Alerts</h3>
              <p className="text-gray-600">
                Receive instant email notifications when fires are detected within your monitoring areas, keeping you informed and prepared.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">My Areas & Team Areas</h3>
                  <p className="text-gray-600">
                    Organize your monitoring areas into personal "My Areas" for private use and "Team Areas" for collaborative monitoring efforts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset Value Tracking</h3>
                  <p className="text-gray-600">
                    Track total asset value for each monitoring area with detailed policy information and unique identifiers for comprehensive coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Radius Settings</h3>
                  <p className="text-gray-600">
                    Set custom radius distances (default 5 miles) to match your specific monitoring needs and risk assessment requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Search & Filter</h3>
                  <p className="text-gray-600">
                    Use the search functionality to quickly find specific areas and filter by various criteria for efficient area management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Creation Timestamps</h3>
                  <p className="text-gray-600">
                    Track when each monitoring area was created with precise timestamps for audit trails and management purposes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Actions</h3>
                  <p className="text-gray-600">
                    Access "Create New Area +" button and "View" options for each area to manage and monitor your coverage efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}