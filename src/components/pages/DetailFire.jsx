import { Map, Building2, Mountain, AlertCircle } from "lucide-react";
import SectionCard from "../layout/SectionCard";
import InteractiveCard from "../layout/InteractiveCard";
import { Terrain3d, shelters, videoSimulation, Fireoverview, Statealert, Riskfire, Twitter,Comments, overviewWeb, stateAlertsWeb, riskWeb, commentsWeb, terrainElevationWeb, nearbySheltersWeb, googleStreetViewWeb, mainCarousel3 } from "..";

export default function DetailFire() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Fire Data</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Learn more about the fire data we offer and how it is used to track and manage wildfires.
          </p>
        </header>

        {/* <InteractiveCard /> */}
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <SectionCard
          icon={Building2}
          title="Overview"
          description="This system centralizes crucial wildfire information. A main panel provides key details about a fire's status, size, and origin, along with reference data such as its location and the last update time. Below that, a dedicated section displays current weather conditions for the fire's area. This information includes wind direction and speed, atmospheric pressure, and temperature—all essential parameters for understanding fire behavior."
          imageSrc={overviewWeb.src}
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <SectionCard
          icon={AlertCircle}
          title="State Alerts"
          description="Fire-related emergency warnings issued by the regional or national authorities where the fire is located. These alerts, such as Red Flag Warnings and Fire Weather Watches, are sourced directly from official agencies and provide critical, time-sensitive information about hazardous conditions that may increase wildfire risk, including lightning, dry fuels, and high winds.
"
          imageSrc={stateAlertsWeb.src}
          mediaPosition="left"
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="Risk"
          description="A detailed visual breakdown of wildfire risk factors at a specific location, combining multiple datasets into an intuitive interface. Metrics like Overall Risk, Damage Potential, Burnable Land, and Fireline Intensity are displayed as percentages or status indicators, offering a snapshot of exposure and vulnerability. These values are calculated using factors such as fire history, vegetation, proximity to infrastructure, suppression resources, and environmental conditions."
          imageSrc={riskWeb.src}
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
          <SectionCard
          icon={AlertCircle}
          title="Twitter"
          description="Real-time posts related to the fire from social media, using the fire's name to gather relevant updates, photos, and eyewitness reports. This feature activates for fires over 200 acres, providing an additional layer of on-the-ground insight that can supplement official data with public observations and evolving local narratives."
          imageSrc={Twitter.src}
          mediaPosition="left"
          mediaHeight="h-[500px]"
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="Comments"
          description="Community-driven section where subscribed users can share observations, updates, and images related to a specific fire. Whether reporting conditions, asking questions, or offering support, this feature fosters real-time engagement and collaboration, giving the public a voice and strengthening situational awareness through local insights."
          imageSrc={commentsWeb.src}
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Mountain}
          title="3D Terrain Elevation"
          description="The Interactive 3D Terrain Elevation tool provides a detailed view of the landscape. By visualizing slopes, valleys, and ridges, you can better understand how terrain influences a fire's spread."
          imageSrc={terrainElevationWeb.src}
          mediaPosition="left"
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="AI Fire Spread Simulation"
          description="Our AI Fire Spread Simulation harnesses a custom-trained artificial intelligence model to accurately predict the evolving path of a wildfire in real time. By intelligently processing dynamic weather conditions—including wind speed and direction, humidity, and temperature—alongside vegetation types, terrain slope, fuel moisture, and historical fire behavior, the model generates highly detailed forecasts of potential spread patterns"
          videoSrc={mainCarousel3.src}
          mediaHeight="h-[500px]"
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Map}
          title="Nearby Shelters"
          description="In an emergency, the platform displays available Nearby Shelters like schools and community centers. Each location includes distance and navigation options to help ensure a safe and efficient evacuation."
          imageSrc={nearbySheltersWeb.src}
          mediaPosition="left"
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="Street View"
          description="This feature offers valuable context for fire monitoring, allowing users to visually assess the surrounding terrain, infrastructure, vegetation density, and potential obstacles. By combining satellite-based simulation with ground-level perspective, it enhances situational awareness for emergency planners, responders, and analysts."
          imageSrc={googleStreetViewWeb.src}
        />

      </div>
    </div>
  );
}