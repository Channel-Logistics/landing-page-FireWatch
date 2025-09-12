import React from "react";
import { Map, Building2, Mountain, Building2 as InfrastructureIcon } from "lucide-react";
import SectionCard from "../Layout/SectionCard";
import InteractiveCard from "../Layout/InteractiveCard";

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
        <InteractiveCard/>
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        {/* Nearby Infrastructure Section - Using SectionCard component */}
        <SectionCard
          icon={Building2}
          title="Protecting Critical Infrastructure"
          description="The system automatically identifies and maps critical **Nearby Infrastructure** that could be affected by a wildfire. It includes essential facilities such as schools, hospitals, and fire departments, allowing for timely preparation and a focused response."
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        {/* Terrain and Shelters Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <SectionCard
              icon={Mountain}
              title="3D Terrain Elevation"
              description="The **Interactive 3D Terrain Elevation** tool provides a detailed view of the landscape. By visualizing slopes, valleys, and ridges, you can better understand how terrain influences a fire's spread."
              media="[Image placeholder: 3D Terrain Elevation Example]"
            />
            <SectionCard
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