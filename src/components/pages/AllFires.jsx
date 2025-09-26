import { Bell, Search, Clock } from "lucide-react";
import { pFires, pFireSpecificAlerts, fireListWeb } from "..";

export default function AllFires() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reported Fires</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real-time monitoring system offering immediate updates on
            up-to-date, current fires.
          </p>
        </header>

        <section>
          <div className="grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
            <div className="w-full">
              <img
                src={fireListWeb.src}
                alt={fireListWeb.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 2: Fire List with Sort and Filter Options
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pFireSpecificAlerts.src}
                  alt={pFireSpecificAlerts.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div> */}
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
              <p className="text-gray-600">
                The system continuously monitors and updates fire information
                every few minutes from multiple data sources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Search className="h-12 w-12 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Advanced Filtering</h3>
              <p className="text-gray-600">
                Sort and filter fires by various criteria including acres
                burned, status, discovery time, last updated time, and containment level.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Bell className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Alert System</h3>
              <p className="text-gray-600">
                Enable notifications for specific fires to receive updates on
                status changes and containment progress.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Navigation Tabs
                  </h3>
                  <p className="text-gray-600">
                    Easy access to All Fires, Perimeters, and Historical data
                    through organized navigation tabs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Comprehensive Fire Database
                  </h3>
                  <p className="text-gray-600">
                    Access to a variety of active fires with complete, up-to-date information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Multiple Data Sources
                  </h3>
                  <p className="text-gray-600">
                    Information aggregated from multiple reliable wildfire
                    monitoring systems for greater accuracy.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Advanced Sorting & Filtering
                  </h3>
                  <p className="text-gray-600">
                    Sort by acres burned, filter by status, and search for
                    specific fires or locations.
                  </p>
                </div>
              </div>

            
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Fire Status Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-red-800">
                  Active (0% Containment)
                </h3>
              </div>
              <p className="text-red-700 mb-6">
                Uncontained fires requiring active suppression efforts. These pose
                the highest risk and require immediate attention.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-green-800">
                  Contained (100% Containment)
                </h3>
              </div>
              <p className="text-green-700 mb-6">
                Fires fully contained and under control. No further spread
                expected, but monitoring continues.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-yellow-800">
                  Partially Contained
                </h3>
              </div>
              <p className="text-yellow-700 mb-6">
                Fires with partial containment. Some progress made but still
                requires ongoing suppression efforts.
              </p>
              <div className="text-sm text-yellow-600">
                <strong>Status:</strong> Various containment percentages
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-900 text-center mb-8">
            How to Use All Fires
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <p className="text-green-800 text-lg">
                Use the navigation tabs to switch between All Fires, Perimeters,
                and Historical data.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <p className="text-green-800 text-lg">
                Use the SORT dropdown to organize fires by acres burned or other
                criteria.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <p className="text-green-800 text-lg">
                Use the FILTER dropdown to show specific types of fires or all
                fires.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <p className="text-green-800 text-lg">
                Click "View" on any fire to access detailed information and
                interactive maps.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                5
              </div>
              <p className="text-green-800 text-lg">
                Click "Turn On Alerts" to receive notifications about status
                changes for specific fires.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                6
              </div>
              <p className="text-green-800 text-lg">
                Use the "Add Fire +" button to manually add new fire incidents to
                the system.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
