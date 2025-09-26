import { MapPin, Clock, Shield } from "lucide-react";
import { highPriority, highPriorityView, highPriorityWeb } from "..";

export default function HighPriority() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">High Priority</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Immediate, proximity-based wildfire alerts for fires within five miles of areas-crucial situational intelligence at a glance.
          </p>
        </header>

        <section>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="w-full">
              <img
                src={highPriorityWeb.src}
                alt={highPriorityWeb.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
      </section>
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

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

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

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

            
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

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
