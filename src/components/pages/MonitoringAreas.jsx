import { MapPin, Edit, Bell } from 'lucide-react';
import { pAreas, pTeamAreas, pAreasView } from '..';

export default function MonitoringAreas() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Monitoring Areas</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create custom areas by defining polygons or entering an address with a radius. Enable alerts to receive emails when fires are reported nearby.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Visual Guide: Step-by-Step Interface
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 1: Create New Area
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pAreas.src}
                  alt={pAreas.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 2: Team Areas Management
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pTeamAreas.src}
                  alt={pTeamAreas.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 md:col-span-2">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 3: Areas List and Management
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pAreasView.src}
                  alt={pAreasView.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Address & Radius</h3>
              <p className="text-gray-600">
                Enter a specific address and set a custom radius to create a circular monitoring zone around your property or area of interest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Edit className="h-12 w-12 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Draw Polygon</h3>
              <p className="text-gray-600">
                Draw custom polygons on the map to define irregular monitoring areas that match your specific needs and boundaries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Bell className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Alerts</h3>
              <p className="text-gray-600">
                Receive instant email notifications when fires are detected within your monitoring areas, keeping you informed and prepared.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
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