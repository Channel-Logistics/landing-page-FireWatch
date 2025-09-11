// /src/components/ContentComponents.jsx
import React from 'react';
import { Globe, AlertTriangle, Flame, BarChart2, Users, Bell, Cloud, Wifi, Package, MapPin, Clock, Thermometer, Wind, Eye, Activity } from 'lucide-react';



export const Perimeters = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Perímetros de Incendios</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Mapeo detallado de límites y seguimiento de perímetros para incidentes de incendios forestales activos.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
          <div className="flex">
            <MapPin className="flex-shrink-0 h-5 w-5 text-orange-400" />
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                Actualmente se rastrean <strong>73 perímetros de incendios</strong> con datos de límites precisos.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Características del Perímetro</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold">Límites Precisos</h3>
                <p className="text-gray-600">Perímetros de incendios mapeados por GPS y actualizados en tiempo real.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Activity className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Seguimiento del Crecimiento</h3>
                <p className="text-gray-600">Monitorea la expansión y el progreso de la contención.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <BarChart2 className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Cálculos de Área</h3>
                <p className="text-gray-600">Mediciones precisas de la superficie y áreas afectadas.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <h3 className="font-semibold">Datos Históricos</h3>
                <p className="text-gray-600">Rastrea los cambios del perímetro a lo largo del tiempo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
