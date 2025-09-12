import React from "react";
import { MapPin, Clock, Shield } from "lucide-react";
import { highPriority, highPriorityView } from "..";

export default function HighPriority() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">High Priority</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Immediate, proximity-based wildfire alerts for fires within five
            miles of PIF locations—crucial situational intelligence at a glance.
          </p>
        </header>

        {/* Visual Guide Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Visual Guide: Step-by-Step Interface
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 1: Complete High Priority View
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={highPriority.src}
                  alt={highPriority.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-lg text-center font-semibold text-gray-700 mb-6">
                Step 2: Active Fires Near PIF Locations
              </h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={highPriorityView.src}
                  alt={highPriorityView.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <MapPin className="h-12 w-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Proximity Monitoring</h3>
              <p className="text-gray-600">
                The system automatically tracks all active fires and calculates
                their distance to your configured PIF locations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Immediate Alerts</h3>
              <p className="text-gray-600">
                When a fire is detected within the 5-mile radius, you receive an
                instant notification with critical details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Situational Intelligence</h3>
              <p className="text-gray-600">
                You get detailed information about the fire, including exact
                location, size, and current conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Mile Radius</h3>
                  <p className="text-gray-600">
                    Automatic monitoring of fires within a 5-mile radius of each
                    PIF location, providing sufficient time for response.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Updates</h3>
                  <p className="text-gray-600">
                    Data is continuously updated to keep you informed about the
                    current status of each fire.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Information</h3>
                  <p className="text-gray-600">
                    Each alert includes fire name, specific location, estimated
                    size, and threat level.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple PIF Locations</h3>
                  <p className="text-gray-600">
                    You can configure multiple priority interest facilities for
                    simultaneous monitoring.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Map Integration</h3>
                  <p className="text-gray-600">
                    Clear geographic visualization showing the exact location of
                    fires and PIFs on the map.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Alert History</h3>
                  <p className="text-gray-600">
                    Access to complete alert history for trend analysis and
                    pattern recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Data Example Section */}
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
            Current Data Example
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Below are some of the fires currently being monitored:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { location: "Tionesta, Pennsylvania", fire: "Old Dump" },
              { location: "La Verkin, Utah", fire: "Lac-317957" },
              { location: "Los Angeles, California", fire: "Cty N Wheat" },
              { location: "Wisconsin Dells, Wisconsin", fire: "WASHINGTON" },
              { location: "Palm Desert, California", fire: "View" },
              { location: "Hesperia, California", fire: "Swift Complex" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{item.fire}</h4>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Instructions Section */}
        <section className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-900 text-center mb-8">
            How to Use High Priority
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <p className="text-green-800 text-lg">
                Regularly review the list of active fires in your monitoring area.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <p className="text-green-800 text-lg">
                Click on any fire to get detailed information and view its
                location on the map.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <p className="text-green-800 text-lg">
                Use the information to coordinate emergency responses and
                evacuations if necessary.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <p className="text-green-800 text-lg">
                Keep your PIF locations updated to ensure accurate monitoring.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
