import { Flame, Activity } from 'lucide-react';
import { alertsWeb } from ".."
export default function Alerts() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Alerts & Notifications</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Customize your notifications to receive real-time updates on wildfire activity.
            Our system provides critical information directly to your email.
          </p>
        </header>


        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our Alerts Work</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2 h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden flex items-center justify-center text-gray-500 mb-8 lg:mb-0">
              <img
                src={alertsWeb.src}
                alt={alertsWeb.alt}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <div className="flex items-center mb-3">
                  <Flame className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Updated Fire Alerts</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Get notified whenever there are any changes to fires you're monitoring, including size updates, containment changes, evacuation orders, or new fire activity. Stay informed with real-time updates on fire progression and status changes.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Activity className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Area Alerts</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Receive instant notifications when a fire enters any of your custom monitoring areas. Set up personalized boundaries around properties, communities, or regions of interest to get alerted the moment fire activity is detected within those specific zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

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