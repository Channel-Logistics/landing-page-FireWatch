import { Globe, BarChart2, Thermometer, Wind, Droplet, Sun, Zap, ArrowRight } from 'lucide-react';
import { Prediction } from ".."

export default function Predictions() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Wildfire Prediction System</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our advanced AI system analyzes real-time data to predict wildfire risks,
            empowering communities to prepare and act proactively.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-1 w-full bg-gray-200 rounded-lg items-center justify-center text-gray-500 mb-8 lg:mb-0 p-0">
              <img
                src={Prediction.src}
                alt={Prediction.alt}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="space-y-8 flex-1 w-full">
              <div className="flex items-start">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">1. Data Collection</h3>
                  <p className="text-gray-600">
                    We gather real-time information from a wide range of sources, including weather stations,
                    NASA satellites, and environmental sensors to get a comprehensive view of conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">2. AI Analysis</h3>
                  <p className="text-gray-600">
                    Our machine learning algorithms process millions of data points, identifying patterns and
                    calculating wildfire risk probabilities with a high degree of accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">3. Risk Assessment</h3>
                  <p className="text-gray-600">
                    Each location receives detailed scores for fire risk, potential damage, and burnable area
                    percentage. This helps authorities prioritize response efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Weather Factors We Monitor</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <Thermometer className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800">Temperature</h3>
              <p className="text-sm text-gray-600 mt-2">
                High temperatures can dry out vegetation. Risk increases significantly above 85°F (29°C).
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <Wind className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800">Wind Speed</h3>
              <p className="text-sm text-gray-600 mt-2">
                Wind spreads fires rapidly. Winds over 15 mph (24 km/h) are a critical factor.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <BarChart2 className="h-10 w-10 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800">Pressure</h3>
              <p className="text-sm text-gray-600 mt-2">
                Atmospheric pressure affects wind patterns and fire behavior. Low pressure systems can create unstable conditions that accelerate fire spread.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <ArrowRight className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800">Wind Direction</h3>
              <p className="text-sm text-gray-600 mt-2">
                Wind direction determines how fires spread and which areas are at immediate risk. Shifting winds can quickly change fire behavior and evacuation needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}