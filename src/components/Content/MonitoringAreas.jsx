import { MapPin, Edit, Bell } from 'lucide-react';
import { MoniAreas, Area, Polygon } from '..';

export default function MonitoringAreas() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Monitoring Areas</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Create custom areas by defining polygons or entering an address with a radius. Enable alerts to receive emails when fires are reported nearby.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Visual Guide: Step-by-Step Interface
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 flex flex-col">
              <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-60 md:h-72">
                <img
                  src={MoniAreas.src}
                  alt={MoniAreas.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-base text-center font-semibold text-gray-700 mt-4 mb-2">Step 1: Create New Area</h3>
              <p className="text-gray-600 text-sm text-center">
                Receive fire data and alerts for a specific Monitoring Area by defining custom bounds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 flex flex-col">
              <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-60 md:h-72">
                <img
                  src={Area.src}
                  alt={Area.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-base text-center font-semibold text-gray-700 mt-4 mb-2">Step 2: Team Areas Management</h3>
              <p className="text-gray-600 text-sm text-center">
                Create Monitoring Areas by drawing custom polygons using points on the map.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 flex flex-col">
              <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-60 md:h-72">
                <img
                  src={Polygon.src}
                  alt={Polygon.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-base text-center font-semibold text-gray-700 mt-4 mb-2">Step 3: Areas List and Management</h3>
              <p className="text-gray-600 text-sm text-center">
                Create an area by entering an address and selecting a custom radius to monitor proximity.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Address & Radius</h3>
              <p className="text-gray-600">
                Enter a specific address and set a custom radius to create a circular monitoring zone around your property or area of interest.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <Edit className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Draw Polygon</h3>
              <p className="text-gray-600">
                Draw custom polygons on the map to define irregular monitoring areas that match your specific needs and boundaries.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <Bell className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Real-Time Alerts</h3>
              <p className="text-gray-600">
                Receive instant email notifications when fires are detected within your monitoring areas, keeping you informed and prepared.
              </p>
            </div>
          </div>
        </section>

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