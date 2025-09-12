import React from "react";
import { Flame, Map, Building2, Mountain, Building2 as InfrastructureIcon } from "lucide-react";
import SectionCard from "../Layout/SectionCard";
import InteractiveCard from "../Layout/InteractiveCard";
import {DetailVideo} from ".."

export default function DetailFire() {

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Fire Spread Simulation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our advanced AI system uses a blend of real-time data to predict how a wildfire may spread, providing critical insights for proactive response.
          </p>
        </header>

        {/* AI Simulation Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 order-2 lg:order-1">
              {/* Video Card */}
              <div className="relative w-full h-full aspect-video md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={DetailVideo.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Flame className="h-8 w-8 text-red-500" />
                Understanding Fire Behavior
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our **AI Fire Spread Simulation** analyzes key factors like weather conditions, terrain elevation, vegetation types, and fuel moisture to generate detailed forecasts of potential fire spread patterns. This provides emergency teams and communities with an accurate prediction of a fire's path.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Nearby Infrastructure Section - Using SectionCard component */}
        <SectionCard
          icon={Building2}
          title="Protecting Critical Infrastructure"
          description="The system automatically identifies and maps critical **Nearby Infrastructure** that could be affected by a wildfire. It includes essential facilities such as schools, hospitals, and fire departments, allowing for timely preparation and a focused response."
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Terrain and Shelters Section - Using InteractiveCard component */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <InteractiveCard
              icon={Mountain}
              title="3D Terrain Elevation"
              description="The **Interactive 3D Terrain Elevation** tool provides a detailed view of the landscape. By visualizing slopes, valleys, and ridges, you can better understand how terrain influences a fire's spread."
              media="[Image placeholder: 3D Terrain Elevation Example]"
            />
            <InteractiveCard
              icon={Map}
              title="Nearby Shelters"
              description="In an emergency, the platform displays available **Nearby Shelters** like schools and community centers. Each location includes distance and navigation options to help ensure a safe and efficient evacuation."
              media="[Image placeholder: Nearby Shelters Example]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}