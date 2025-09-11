import React from 'react';
import { MapPin, Edit, Users, Bell } from 'lucide-react';

export default function GlobalCoverage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Monitoring Areas</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create custom areas to receive real-time fire data and alerts tailored to your needs.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Create Your Area</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Draw Polygon Option */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Edit className="h-8 w-8 text-gray-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-700">1. Draw a Polygon</h3>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                Define a custom monitoring area by drawing a unique polygon directly on the map. This method
                gives you precise control to select irregular shapes, such as a specific park, forest, or
                mountain range, that are relevant to your interests.
              </p>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              </div>
            </div>

            {/* Enter Address Option */}
            <div className="p-8 bg-green-50 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">2. Enter an Address</h3>
              </div>
              <p className="text-green-800 leading-relaxed mb-4">
                For a simple and quick setup, you can define your monitoring area by entering an address and
                specifying a custom radius. This creates a circular zone around a point of interest, perfect
                for protecting a specific property or a neighborhood.
              </p>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Alert and Sharing Functionality */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alerts & Collaboration</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Bell className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Receive Alerts</h3>
                  <p className="text-gray-600">
                    Once an area is defined, you can enable alerts to receive emails or notifications when a fire
                    is reported nearby, ensuring you are always one step ahead.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Collaborate with others by sharing your monitoring areas. The system supports both
                    **"My Areas"** for private use and **"Team Areas"** for collective monitoring efforts.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-8 lg:mt-0">
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}