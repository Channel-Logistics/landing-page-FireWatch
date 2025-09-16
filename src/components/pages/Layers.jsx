import { useState } from "react";
import {
  Airplay,
  AlertCircle,
  Bell,
  Cloud,
  CloudRain,
  CloudSnow,
  Droplet,
  FireExtinguisher,
  Home,
  Info,
  MapPin,
  Plus,
  Sun,
  User,
  Wind,
} from "lucide-react";
import LayerPill from "../ui/LayerPill";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const layers = [
  {
    id: 1,
    label: "Emergency Facilities",
    icon: <Home className="w-4 h-4" />,
    description:
      "Displays the locations of fire and EMS stations, highlighting critical emergency response infrastructure for public safety and disaster management.",
    children: true,
    menu: [
        {
            id: 1,
            label: "Fire Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 2,
            label: "EMS",
            icon: <Home className="w-4 h-4" />,
        }
    ]
  },
  {
    id: 2,
    label: "Power Plants",
    icon: <Info className="w-4 h-4" />,
    description:
      "Displays the locations of power plants, highlighting critical energy infrastructure for monitoring and wildfire prevention.",
    children: true,
    menu: [
        {
            id: 1,
            label: "Solar Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 2,
            label: "Biomass Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 3,
            label: "Coal Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 4,  
            label: "Cogeneration Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 5,
            label: "Gas Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 6,
            label: "Geothermal Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 7,
            label: "Hydro Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 8,
            label: "Nuclear Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 9,
            label: "Oil Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 10,
            label: "Petroleum Coke Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 11,
            label: "Storage Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 12,
            label: "Waste Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 13,
            label: "Wave and Tidal Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 14,
            label: "Wind Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 15,
            label: "Other Stations",
            icon: <Home className="w-4 h-4" />,
        },
        {
            id: 16,
            label: "Unknown Stations",
            icon: <Home className="w-4 h-4" /> 
        },
    ]
  },
  {
    id: 3,
    label: "Wildfire Predictions",
    icon: <Plus className="w-4 h-4" />,
    description:
      "Real-time wildfire predictions powered by advanced AI and machine learning algorithms.",
    children: false,
  },
  {
    id: 4,
    label: "Satellite Overlays",
    icon: <Cloud className="w-4 h-4" />,
    description:
      "Displays satellite-based 7-day fire activity and weather maps for wildfire monitoring.",
    children: false,
  },
  {
    id: 5,
    label: "Orbiting Satellites",
    icon: <User className="w-4 h-4" />,
    description:
      "Satellites specializing in disaster monitoring, weather/climate, Earth resources, and more, along with it's path.",
    children: false,
  },
  {
    id: 6,
    label: "FireFighting Aircrafts",
    icon: <MapPin className="w-4 h-4" />,
    description:
      "Aircrafts specializing in fire containment, along with their path.",
    children: false,
  },
  {
    id: 7,
    label: "RAWS Weather Stations",
    icon: <Sun className="w-4 h-4" />,
    description:
      "RAWS (Remote Automated Weather Stations) weather data provides real-time environmental information primarily used for fire weather monitoring and management.",
    children: false,
  },
  {
    id: 8,
    label: "VIIRS Thermal Hotspots",
    icon: <AlertCircle className="w-4 h-4" />,
    description:
      "Highlights fire hotspots detected by the Visible Infrared Imaging Radiometer Suite (VIIRS) for monitoring active fires.",
    children: false,
  },
  {
    id: 9,
    label: "MODIS Thermal Hotspots",
    icon: <Bell className="w-4 h-4" />,
    description:
      "Displays fire detections from the Moderate Resolution Imaging Spectroradiometer (MODIS), useful for tracking fire locations and intensity.",
    children: false,
  },
  {
    id: 10,
    label: "Temperature",
    icon: <FireExtinguisher className="w-4 h-4" />,
    description:
      "Current, real-time air temperature overlay at a height of 2 meters on map.",
    children: false,
  },
  {
    id: 11,
    label: "Humidity",
    icon: <Droplet className="w-4 h-4" />,
    description: "Current, real-time relative humidity overlay on map.",
    children: false,
  },
  {
    id: 12,
    label: "Wind",
    icon: <Wind className="w-4 h-4" />,
    description:
      "Animated wind display with uniform speed, updated via a canvas overlay on map.",
    children: false,
  },
  {
    id: 13,
    label: "Precipitation Intensity",
    icon: <CloudRain className="w-4 h-4" />,
    description:
      "Current, real-time precipitation intensity overlay on map.",
    children: false,
  },
  {
    id: 14,
    label: "Atmospheric Pressure",
    icon: <CloudSnow className="w-4 h-4" />,
    description:
      "Current, real-time atmospheric pressure overlay on map.",
    children: false,
  },
  {
    id: 15,
    label: "Clouds",
    icon: <Airplay className="w-4 h-4" />,
    description: "Current, real-time cloudiness overlay on map.",
    children: false,
  },
];

export default function Layers() {
  const [openSet, setOpenSet] = useState(() => new Set()); 

  const toggleLayer = (id) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleTutorial = (layer) => {
    const stepTarget = `#layer-pill-${layer.id}`;

    let steps = [
      {
        element: stepTarget,
        popover: {
          title: layer.label,
          description: layer.description || "No description provided for this layer.",
          side: "right",
          align: "start",
        },
      }
    ];

    if (layer.children && layer.menu && layer.menu.length > 0) {
      steps.push({
        element: stepTarget,
        popover: {
          title: "Open Options",
          description: "Click on the arrow to open the options menu for this layer.",
          side: "right",
          align: "start",
        },
      });

      const firstMenuItem = layer.menu[0];
      const menuItemTarget = `#menu-item-${layer.id}-${firstMenuItem.id}`;
      steps.push({
        element: menuItemTarget,
        popover: {
          title: `${firstMenuItem.label}`,
          description: `This is a specific option where you can place layers depending on the data you require`,
          side: "right",
          align: "start",
        },
      });
    }

    const d = driver({
      allowClose: true,
      overlayOpacity: 0.55,
      stagePadding: 6,
      showProgress: true,
      steps: steps,
      onHighlightStarted: (element, step) => {
        if (step === 2 && layer.children && !openSet.has(layer.id)) {
          toggleLayer(layer.id);
        }
      }
    });
    d.drive();
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Layers In FireWatch
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            In this section, you will find everything about the layouts we use
            in FireWatch try them out.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-6">
          {layers.map((layer) => {
            const isOpen = openSet.has(layer.id);
            const menuId = `layer-pill-${layer.id}-menu`;

            return (
              <div key={layer.id} className="h-full">
                <div
                  className="h-full flex flex-col w-full bg-white border border-gray-200 rounded-lg shadow-sm
                             dark:bg-gray-800 dark:border-gray-700 relative overflow-visible"
                >
                  <div className="flex justify-end px-4 pt-4" />
                  <div className="flex flex-col items-center px-4 pb-10 flex-1">
                    <div className="relative w-full flex justify-center">
                      <LayerPill
                        id={`layer-pill-${layer.id}`}
                        label={layer.label}
                        icon={layer.icon}
                        className="mb-2"
                        children={layer.children}
                        open={isOpen}
                        onToggle={() => toggleLayer(layer.id)}
                      />
                      {layer.children && isOpen && (
                        <div
                          id={menuId}
                          role="dialog"
                          aria-labelledby={`layer-pill-${layer.id}`}
                          className="absolute left-0 right-0 top-[calc(100%+8px)] z-50
                                     rounded-xl border border-gray-200 bg-white shadow-xl p-3 text-sm text-gray-700"
                        >
                          <p className="font-medium mb-2">
                            Options for{" "}
                            <span className="font-semibold">
                              {layer.label}
                            </span>
                          </p>
                          <ul className="space-y-2">
                            {layer.menu && layer.menu.map((menuItem, index) => (
                              <li 
                                key={menuItem.id} 
                                id={`menu-item-${layer.id}-${menuItem.id}`}
                                className="flex items-center justify-between"
                              >
                                <input
                                  type="checkbox"
                                  className="h-4 w-4"
                                  defaultChecked
                                />
                                <div className="flex items-center gap-2">
                                  {menuItem.icon}
                                  <span>{menuItem.label}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="flex mt-auto">
                        <button
                          onClick={() => {
                            handleTutorial(layer);
                            toggleLayer(layer.id);
                          }}
                          className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                        >
                        Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
