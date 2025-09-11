import React from 'react';
import { AlertTriangle, MapPin, Clock, Shield, Info } from 'lucide-react';

export default function HighPriority() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">High Priority</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Immediate, proximity-based wildfire alerts for fires within five miles of PIF locations—crucial situational intelligence at a glance.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Visual Guide: Step-by-Step Interface</h2>
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 1: Complete High Priority View</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <Info className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 2: Fire Details View</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <AlertTriangle className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 3: PIF Risk Details</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proximity Monitoring</h3>
              <p className="text-gray-600">
                The system automatically tracks all active fires and calculates their distance to your configured PIF locations.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Immediate Alerts</h3>
              <p className="text-gray-600">
                When a fire is detected within the 5-mile radius, you receive an instant notification with critical details.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Situational Intelligence</h3>
              <p className="text-gray-600">
                You get detailed information about the fire, including exact location, size, and current conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Mile Radius</h3>
                <p className="text-gray-600">
                  Automatic monitoring of fires within a 5-mile radius of each PIF location, providing sufficient time for response.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
                <p className="text-gray-600">
                  Data is continuously updated to keep you informed about the current status of each fire.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Information</h3>
                <p className="text-gray-600">
                  Each alert includes fire name, specific location, estimated size, and threat level.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple PIF Locations</h3>
                <p className="text-gray-600">
                  You can configure multiple priority interest facilities for simultaneous monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Map Integration</h3>
                <p className="text-gray-600">
                  Clear geographic visualization showing the exact location of fires and PIFs on the map.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alert History</h3>
                <p className="text-gray-600">
                  Access to complete alert history for trend analysis and pattern recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Current Data Example</h2>
        <p className="text-gray-600 text-center mb-6">
          Below are some of the fires currently being monitored:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { location: "Tionesta, Pennsylvania", fire: "Old Dump" },
            { location: "La Verkin, Utah", fire: "Lac-317957" },
            { location: "Los Angeles, California", fire: "Cty N Wheat" },
            { location: "Wisconsin Dells, Wisconsin", fire: "WASHINGTON" },
            { location: "Palm Desert, California", fire: "View" },
            { location: "Hesperia, California", fire: "Swift Complex" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900">{item.fire}</h4>
              <p className="text-sm text-gray-600">{item.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">How to Use High Priority</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
            <p className="text-green-800">Regularly review the list of active fires in your monitoring area.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
            <p className="text-green-800">Click on any fire to get detailed information and view its location on the map.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
            <p className="text-green-800">Use the information to coordinate emergency responses and evacuations if necessary.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
            <p className="text-green-800">Keep your PIF locations updated to ensure accurate monitoring.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

