import React from "react";
import { Flame, Map, Building2, Mountain } from "lucide-react";

export default function DetailFire() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Fire Spread Simulation</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our advanced AI system uses a blend of real-time data to predict how a wildfire may spread,
            providing critical insights for proactive response.
          </p>
        </header>

        {/* AI Simulation Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 order-2 lg:order-1">
              [Image placeholder: AI Fire Spread Simulation Example]
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Flame className="h-8 w-8 text-red-500" />
                Understanding Fire Behavior
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our **AI Fire Spread Simulation** analyzes key factors like weather conditions, terrain elevation,
                vegetation types, and fuel moisture to generate detailed forecasts of potential fire spread patterns.
                This provides emergency teams and communities with an accurate prediction of a fire's path.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Nearby Infrastructure Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="h-8 w-8 text-blue-500" />
                Protecting Critical Infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The system automatically identifies and maps critical **Nearby Infrastructure** that could be
                affected by a wildfire. It includes essential facilities such as schools, hospitals, and fire
                departments, allowing for timely preparation and a focused response.
              </p>
            </div>
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              [Image placeholder: Nearby Infrastructure Example]
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Terrain and Shelters Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 3D Terrain Elevation */}
            <div className="space-y-4 p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Mountain className="h-8 w-8 text-green-600" />
                3D Terrain Elevation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The **Interactive 3D Terrain Elevation** tool provides a detailed view of the landscape. By visualizing
                slopes, valleys, and ridges, you can better understand how terrain influences a fire's spread.
              </p>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-4">
                [Image placeholder: 3D Terrain Elevation Example]
              </div>
            </div>

            {/* Nearby Shelters */}
            <div className="space-y-4 p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Map className="h-8 w-8 text-purple-600" />
                Nearby Shelters
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In an emergency, the platform displays available **Nearby Shelters** like schools and community
                centers. Each location includes distance and navigation options to help ensure a safe and
                efficient evacuation.
              </p>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-4">
                [Image placeholder: Nearby Shelters Example]
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}