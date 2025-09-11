import React from 'react';
import { Flame, Eye, Bell, Search, Filter, Clock } from 'lucide-react';

export default function AllFires() {
  return (
    <div className="space-y-8">

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">All Fires</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Real-time monitoring system offering immediate updates on up-to-date, current fires.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Visual Guide: Complete Interface Overview</h2>
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 1: Main Interface with Navigation</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <Flame className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 2: Fire List with Sort and Filter Options</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <Filter className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Step 3: Individual Fire Details</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                <Eye className="h-12 w-12 mx-auto mb-2" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Updates</h3>
              <p className="text-gray-600">
                The system continuously monitors and updates fire information every few minutes from multiple data sources.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <Search className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Advanced Filtering</h3>
              <p className="text-gray-600">
                Sort and filter fires by various criteria including acres burned, status, location, and containment level.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-center">
              <Bell className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Alert System</h3>
              <p className="text-gray-600">
                Enable notifications for specific fires to receive updates on status changes and containment progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Fire Database</h3>
                <p className="text-gray-600">
                  Access to 956+ active fires with complete information including source, status, location, and containment data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Data Sources</h3>
                <p className="text-gray-600">
                  Information aggregated from CWFIS and other reliable wildfire monitoring systems for accuracy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Sorting & Filtering</h3>
                <p className="text-gray-600">
                  Sort by acres burned, filter by status, and search for specific fires or locations.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Fire Information</h3>
                <p className="text-gray-600">
                  Each fire entry includes source, status, last updated time, coordinates, containment percentage, and calendar dates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Add New Fires</h3>
                <p className="text-gray-600">
                  "Add Fire +" functionality to manually add new fire incidents to the monitoring system.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Navigation Tabs</h3>
                <p className="text-gray-600">
                  Easy access to All Fires, Perimeters, and Historical data through organized navigation tabs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Fire Status Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-red-800">Active (0% Containment)</h3>
            </div>
            <p className="text-red-700 mb-4">
              Uncontained fires requiring active suppression efforts. These pose the highest risk and require immediate attention.
            </p>
            <div className="text-sm text-red-600">
              <strong>Examples:</strong> 25Lx-Muskeg, G90216
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-green-800">Contained (100% Containment)</h3>
            </div>
            <p className="text-green-700 mb-4">
              Fires fully contained and under control. No further spread expected, but monitoring continues.
            </p>
            <div className="text-sm text-green-600">
              <strong>Examples:</strong> We017, Ea061
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-yellow-800">Partially Contained</h3>
            </div>
            <p className="text-yellow-700 mb-4">
              Fires with partial containment. Some progress made but still requires ongoing suppression efforts.
            </p>
            <div className="text-sm text-yellow-600">
              <strong>Status:</strong> Various containment percentages
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Current Fire Data Examples</h2>
        <p className="text-gray-600 text-center mb-6">
          Below are examples of fires currently being monitored in the system:
        </p>
        <div className="space-y-4">
          {[
            { 
              name: "We017", 
              source: "CWFIS", 
              status: "Contained", 
              lastUpdated: "20 hrs 54 mins ago",
              location: "55.01330, -101.35400",
              containment: "100%"
            },
            { 
              name: "Ea061", 
              source: "CWFIS", 
              status: "Contained", 
              lastUpdated: "20 hrs 54 mins ago",
              location: "50.39970, -95.62080",
              containment: "100%"
            },
            { 
              name: "25Lx-Muskeg", 
              source: "CWFIS", 
              status: "Active", 
              lastUpdated: "20 hrs 54 mins ago",
              location: "55.29460, -107.57100",
              containment: "0%"
            },
            { 
              name: "G90216", 
              source: "CWFIS", 
              status: "Active", 
              lastUpdated: "20 hrs 54 mins ago",
              location: "Coordinates not available",
              containment: "0%"
            }
          ].map((fire, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900 text-lg">{fire.name}</h4>
                <span className={`px-2 py-1 rounded text-sm font-medium ${
                  fire.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {fire.status}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Source:</strong> {fire.source}
                </div>
                <div>
                  <strong>Last Updated:</strong> {fire.lastUpdated}
                </div>
                <div>
                  <strong>Location:</strong> {fire.location}
                </div>
                <div>
                  <strong>Containment:</strong> {fire.containment}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">How to Use All Fires</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
            <p className="text-green-800">Use the navigation tabs to switch between All Fires, Perimeters, and Historical data.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
            <p className="text-green-800">Use the SORT dropdown to organize fires by acres burned or other criteria.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
            <p className="text-green-800">Use the FILTER dropdown to show specific types of fires or all fires.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
            <p className="text-green-800">Click "View" on any fire to access detailed information and interactive maps.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
            <p className="text-green-800">Click "Turn On Alerts" to receive notifications about status changes for specific fires.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
            <p className="text-green-800">Use the "Add Fire +" button to manually add new fire incidents to the system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
