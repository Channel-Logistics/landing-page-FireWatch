import { Map, Building2, Mountain, AlertCircle } from "lucide-react";
import SectionCard from "../Layout/SectionCard";
import InteractiveCard from "../Layout/InteractiveCard";
import { Terrain3d, shelters, videoSimulation, Fireoverview, Statealert, Riskfire, Twitter,Comments } from "..";

export default function DetailFire() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Fire Spread Simulation</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our advanced AI system uses a blend of real-time data to predict how a wildfire may spread,
            providing critical insights for proactive response.
          </p>
        </header>

        <InteractiveCard />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <SectionCard
          icon={Building2}
          title="Overview"
          description="This wildfire monitoring system is a comprehensive tool that combines real-time data with predictive modeling. A main dashboard displays specific fire incident details like the status ('Active' or 'Contained'), containment percentage, total area burned, cause ('Natural' or 'Undetermined'), and the last updated date. It also shows the data source (like 'WFGS' or 'CWFIS'), geographic coordinates, and the fire's type. This is supplemented by a section for current weather conditions, including wind direction and speed, atmospheric pressure, and temperature. Additionally, the system uses a **3D AI simulation** to predict fire spread, while also identifying and mapping at-risk **critical infrastructure** and showing the location of **nearby shelters**, thus enabling informed decision-making and community safety."
          imageSrc={Fireoverview.src}
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />

        <SectionCard
          icon={AlertCircle}
          title="State Alerts"
          description="Fire-related emergency warnings issued by the U.S. state where the fire is located. These alerts, such as Red Flag Warnings and Fire Weather Watches, are sourced directly from government agencies and provide critical, time-sensitive information about hazardous conditions that may increase wildfire risk, including lightning, dry fuels, and high winds."
          imageSrc={Statealert.src}
          mediaPosition="left"
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="Risk"
          description="A detailed visual breakdown of wildfire risk factors at a specific location, combining multiple datasets into an intuitive interface. Metrics like Overall Risk, Damage Potential, Burnable Land, and Fireline Intensity are displayed as percentages or status indicators, offering a snapshot of exposure and vulnerability. These values are calculated using factors such as fire history, vegetation, proximity to infrastructure, suppression resources, and environmental conditions."
          imageSrc={Riskfire.src}
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
          imageSrc={Comments.src}
        />
        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Mountain}
          title="3D Terrain Elevation"
          description="The **Interactive 3D Terrain Elevation** tool provides a detailed view of the landscape. By visualizing slopes, valleys, and ridges, you can better understand how terrain influences a fire's spread."
          imageSrc={Terrain3d.src}
          mediaPosition="left"
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
        <SectionCard
          icon={Building2}
          title="AI Fire Spread Simulation"
          description="Our AI Fire Spread Simulation harnesses a custom-trained artificial intelligence model to accurately predict the evolving path of a wildfire in real time. By intelligently processing dynamic weather conditions—including wind speed and direction, humidity, and temperature—alongside vegetation types, terrain slope, fuel moisture, and historical fire behavior, the model generates highly detailed forecasts of potential spread patterns"
          videoSrc={videoSimulation.src}
        />

        <hr className="my-16 border-t-2 border-gray-200 max-w-6xl mx-auto" />
       <SectionCard
          icon={Map}
          title="Nearby Shelters"
          description="In an emergency, the platform displays available **Nearby Shelters** like schools and community centers. Each location includes distance and navigation options to help ensure a safe and efficient evacuation."
          imageSrc={shelters.src}
          mediaPosition="left"
        />

      </div>
    </div>
  );
}