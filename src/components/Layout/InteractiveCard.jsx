import { Flame } from "lucide-react";
import { DetailVideo } from ".."
export default function InteractiveCard() {
  return (
    <section className="mb-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
        <div className="w-full bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 order-2 lg:order-1 hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-full md:h-[20rem] aspect-video overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
            <img
              className="w-full h-full object-center"
              src={DetailVideo.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
        <div className="space-y-4 order-1 lg:order-2">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Flame className="h-8 w-8 text-red-500" />
            Understanding Fire Behavior
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our <strong>AI Fire Spread Simulation</strong> analyzes key factors like weather conditions, terrain elevation, vegetation types, and fuel moisture to generate detailed forecasts of potential fire spread patterns. This provides emergency teams and communities with an accurate prediction of a fire's path.
          </p>
        </div>
      </div>
    </section>
  );
}