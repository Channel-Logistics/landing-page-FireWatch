import { Globe, BarChart2, Cloud, Wifi, Thermometer, Wind, Activity } from 'lucide-react';
import { pRawsLocation, pRaws } from '../index';

export default function Raws() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Remote Automated Weather Stations (RAWS)</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore real-time environmental data from a network of automated weather stations, crucial for wildfire monitoring and management.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Station Network</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <Wifi className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">24/7 Monitoring</h3>
              <p className="text-gray-600 mt-2">
                We monitor data from thousands of stations to provide continuous real-time insights.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">Extensive Coverage</h3>
              <p className="text-gray-600 mt-2">
                Our network provides data from stations across a wide range of regions and environments.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <BarChart2 className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">Detailed Insights</h3>
              <p className="text-gray-600 mt-2">
                Get specific data for each station, including historical trends and current conditions.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200" />
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">How to View Station Data</h2>
          <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl text-center font-medium text-gray-800 mb-4">Initial View</h3>
              <div className="w-full h-72 md:h-80 lg:h-96 rounded-lg mb-4 overflow-hidden">
                <img
                  src={pRaws.src}
                  alt={pRaws.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                On the main RAWS page, you will see a list of nearby or featured weather stations. Each entry provides a quick summary, including the station's location, current temperature, and wind data.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h3 className="text-xl text-center font-medium text-gray-800 mb-4">Detailed View</h3>
              <div className="w-full h-72 md:h-80 lg:h-96 rounded-lg mb-4 overflow-hidden">
                <img
                  src={pRawsLocation.src}
                  alt={pRawsLocation.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                By clicking "View" on any station, you can access a detailed page. This view includes advanced weather information like **wind speed and direction** trends over time, and **air temperature** graphs. These visualizations help you understand how conditions have changed.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Understanding the Data</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Thermometer className="h-10 w-10 text-red-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Air Temperature</h3>
              <p className="text-sm text-gray-600 mt-1">
                Current air temperature, critical for predicting fuel dryness.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Wind className="h-10 w-10 text-blue-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Wind Data</h3>
              <p className="text-sm text-gray-600 mt-1">
                Real-time wind speed and direction, key factors in fire behavior.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Activity className="h-10 w-10 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Humidity</h3>
              <p className="text-sm text-gray-600 mt-1">
                Relative humidity levels that affect fire ignition and spread.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Cloud className="h-10 w-10 text-gray-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Precipitation</h3>
              <p className="text-sm text-gray-600 mt-1">
                Rainfall measurements that indicate fuel moisture levels.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}