import React from 'react';
import { Users, Bell, MapPin, Clock, ArrowRight } from 'lucide-react';
// Asegúrate de que las rutas de tus imágenes sean correctas
import {Teamsone, Teamstwo} from ".."

export default function Teams() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Team Collaboration Features
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Coordinate your monitoring and response efforts. Join teams to share alerts and monitored areas,
            ensuring a synchronized and efficient approach to wildfire management.
          </p>
        </header>

        {/* Main Content: Features and Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Key Features for Teams</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Shared Monitoring</h3>
                  <p className="text-gray-600 mt-1">
                    Seamlessly share monitored areas among your team members. This ensures everyone is
                    focused on the same critical locations, improving collective situational awareness.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Synchronized Alerts</h3>
                  <p className="text-gray-600 mt-1">
                    Receive synchronized notifications. When a fire risk is detected, every team member
                    is notified instantly, enabling a swift and coordinated response.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Focused Collaboration</h3>
                  <p className="text-gray-600 mt-1">
                    Streamline communication and efforts by focusing on the same high-priority alerts
                    and areas as a group.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="space-y-6">
            <div className="w-full h-50 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden">
              <img
              src={Teamsone.src} 
              alt={Teamsone.alt} 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="w-full h-50  rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden">
              <img
              src={Teamstwo.src} 
              alt={Teamstwo.alt} 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* How to Get Started Section */}
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