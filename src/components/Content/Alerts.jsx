import { Flame, Activity, MapPin, BarChart2, Thermometer, Eye } from 'lucide-react';
import {Alert1} from ".."
export default function Alerts() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Alerts & Notifications</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Customize your notifications to receive real-time updates on wildfire activity.
            Our system provides critical information directly to your email.
          </p>
        </header>


        {/* How Alerts Work Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our Alerts Work</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2 h-70 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 mb-8 lg:mb-0">
              <img
                src={Alert1.src}
                alt={Alert1.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <div className="flex items-center mb-3">
                  <Flame className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">New Fire Alerts</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Receive an immediate notification the moment a new fire is detected by our system within your monitored areas. This alert includes the fire's precise location and an initial risk assessment, enabling a swift response.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Activity className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Status Updates</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Get real-time updates on active fires, including changes in containment, size, and severity. These notifications are essential for tracking the fire's progression and understanding the current situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Configuration Guide */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Configure Your Alerts</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Define Monitoring Areas</h3>
              <p className="text-gray-600">
                Create custom monitoring areas by drawing a boundary around the location you want to track.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Enable Notifications</h3>
              <p className="text-gray-600">
                Activate alerts for your monitoring areas to trigger notifications when a fire is detected.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Your Preferences</h3>
              <p className="text-gray-600">
                Customize the frequency and types of alerts you receive to match your needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}