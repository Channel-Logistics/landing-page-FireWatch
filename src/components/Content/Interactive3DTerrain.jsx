// /src/components/ContentComponents.jsx
import React from 'react';
import { Globe, MapPin, Activity } from 'lucide-react';

export default function Interactive3DTerrain() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Interactive 3D Terrain with Elevation
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          A dynamic 3D-rendered model of the terrain surrounding the fire’s
          location, offering a detailed view of elevation changes and landscape
          features.
        </p>

        {/* Info box */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex">
            <Globe className="flex-shrink-0 h-5 w-5 text-green-400" />
            <div className="ml-3">
              <p className="text-sm text-green-700">
                This tool helps users better understand how valleys and ridges
                can influence the direction and speed of fire spread.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4">Terrain Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <MapPin className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Elevation Mapping</h3>
            <p className="text-gray-600">
              Detailed height variations ranging from 56.0m minimum elevation to
              370.0m maximum.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Activity className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Interactive Visualization</h3>
            <p className="text-gray-600">
              Fully interactive 3D model with rotation and zoom capabilities.
            </p>
          </div>
        </div>

        {/* Elevation Data */}
        <h2 className="text-2xl font-semibold mb-4">Elevation Data</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Terrain Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">56.0m</div>
              <div className="text-gray-600">Minimum Elevation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">370.0m</div>
              <div className="text-gray-600">Maximum Elevation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">314.0m</div>
              <div className="text-gray-600">Elevation Range</div>
            </div>
          </div>
        </div>

        {/* Fire Behavior Analysis */}
        <h2 className="text-2xl font-semibold mb-4">Fire Behavior Analysis</h2>
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">
              Topographic Influence
            </h3>
            <p className="text-orange-700 text-sm">
              Steep slopes and ridges can accelerate fire spread, while valleys
              may create natural firebreaks or channels for fire movement.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              Strategic Planning
            </h3>
            <p className="text-blue-700 text-sm">
              3D terrain visualization helps firefighters identify optimal
              suppression strategies and evacuation routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
