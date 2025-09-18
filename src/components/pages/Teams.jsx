import { Users, Bell, MapPin } from 'lucide-react';

export default function Teams() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Team Collaboration Features
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Coordinate your monitoring and response efforts. Join teams to share alerts and monitored areas,
            ensuring a synchronized and efficient approach to wildfire management.
          </p>
        </header>

        <div className="text-center mb-16">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Key Features for Teams</h2>
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-1 min-h-[280px] flex flex-col">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Shared Monitoring</h3>
                <p className="text-gray-600 flex-grow">
                  Seamlessly share monitored areas among your team members. This ensures everyone is
                  focused on the same critical locations, improving collective situational awareness.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-1 min-h-[280px] flex flex-col">
                <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Synchronized Alerts</h3>
                <p className="text-gray-600 flex-grow">
                  Receive synchronized notifications. When a fire risk is detected, every team member
                  is notified instantly, enabling a swift and coordinated response.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-1 min-h-[280px] flex flex-col">
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Focused Collaboration</h3>
                <p className="text-gray-600 flex-grow">
                  Streamline communication and efforts by focusing on the same high-priority alerts
                  and areas as a group.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <div className="bg-gray-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Get Started</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-2">Find or Create a Team</h3>
              <p className="text-gray-600">
                Easily join an existing team or create a new one for your organization or community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-2">Share and Monitor</h3>
              <p className="text-gray-600">
                Once a member, you gain access to all shared monitoring areas and alerts, enabling collective vigilance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-2">Respond Together</h3>
              <p className="text-gray-600">
                Work as a cohesive unit to monitor and respond to wildfire incidents within your areas of responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}