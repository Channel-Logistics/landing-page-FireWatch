import { Cloud, Thermometer, Wind, Droplet, MapPin, Search, Snowflake, ThermometerSnowflake, CloudHail, ArrowUpRight } from "lucide-react";
import { Forecastone, Forecasttwo } from ".."

export default function Forecast() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Weather Forecast
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Stay informed with real-time weather data and trends in your monitored areas. This information is
            crucial for understanding fire conditions and predicting fire behavior.
          </p>
        </header>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Weather Parameters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Temperatura Max */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <Thermometer className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Temperature Max</h3>
              <p className="text-gray-600">
                Live temperature readings and forecasts that significantly affect fuel
                dryness and fire conditions.
              </p>
            </div>

            {/* Temperatura Min */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <ThermometerSnowflake className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Temperature Min</h3>
              <p className="text-gray-600">
                Forecasts for minimum temperatures, which are useful for understanding
                overnight conditions and frost probability.
              </p>
            </div>

            {/* Wind Speed & Direction */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <Wind className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wind Speed & Direction</h3>
              <p className="text-gray-600">
                Analysis of wind speed, direction, and gust patterns—critical for
                understanding fire spread.
              </p>
            </div>

            {/* Relative Humidity */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <Droplet className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Relative Humidity</h3>
              <p className="text-gray-600">
                Measurements of moisture in the air. Low humidity is a key factor in
                fire ignition and spread.
              </p>
            </div>

            {/* Atmospheric Pressure */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <Cloud className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atmospheric Pressure</h3>
              <p className="text-gray-600">
                Tracking of high and low-pressure systems which often dictate hot, dry,
                or windy conditions.
              </p>
            </div>

            {/* South-West (esto parece ser un marcador de dirección, no un parámetro) */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <Snowflake className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freezing Level</h3>
              <p className="text-gray-600">
                The altitude where the air temperature drops below freezing. Important
                for forecasting snow or ice.
              </p>
            </div>

            {/* Precipitation */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <CloudHail className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precipitation</h3>
              <p className="text-gray-600">
                Forecast of rain, snow, or hail. Crucial for wildfire prevention and
                water resource management.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-center">
              <ArrowUpRight className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direction Wind</h3>
              <p className="text-gray-600">
                This parameter indicates the compass direction from which the wind is blowing. By tracking wind direction, we can predict the potential path of a fire, allowing for better strategic planning and resource allocation.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your 7-Day Forecast</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            By selecting your current location or searching for a specific area, you can receive a detailed
            weather forecast for the next seven days. This allows you to anticipate conditions and plan ahead
            for fire risk based on key weather parameters.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="p-8 bg-gray-100 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Breakdown</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4 overflow-hidden">
                <img
                  src={Forecastone.src}
                  alt={Forecastone.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                The daily breakdown provides a simple, at-a-glance view of the expected temperature range, wind speed and direction, and humidity for each day of the week. This helps you quickly understand how conditions will change.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visual Analytics</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4 overflow-hidden">
                <img
                  src={Forecasttwo.src}
                  alt={Forecasttwo.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                This graph shows the trends for temperature, humidity, and wind speed over the coming week. By visualizing the data, you can easily identify patterns, anticipate peak risk days, and prepare accordingly.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Get Your Forecast</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="p-8 bg-blue-50 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">1. Use Your Current Location</h3>
              </div>
              <p className="text-blue-800 leading-relaxed mb-4">
                By allowing access to your device's GPS, you can get an instant weather report and fire risk assessment for your exact position. This is ideal for quickly checking local conditions on the go.
              </p>
            </div>

            <div className="p-8 bg-green-50 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">2. Search a Specific Location</h3>
              </div>
              <p className="text-green-800 leading-relaxed mb-4">
                If you need to check conditions for a different area, simply enter the address, city, or a specific location. Our system will provide a detailed forecast and risk assessment for that exact spot.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}