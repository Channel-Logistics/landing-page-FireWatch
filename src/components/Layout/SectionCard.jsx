import React from "react";
import { Map, Building2, Mountain } from "lucide-react";

export default function SectionCard({
  icon: Icon,
  title,
  description,
  mediaPosition = "right",
  imageSrc, 
}) {
  const content = (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        {Icon && <Icon className="h-8 w-8 text-red-500" />}
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const mediaComponent = (
    <div
      className={`w-full h-80 rounded-lg flex items-center justify-center`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 text-gray-500 flex items-center justify-center rounded-lg">
          {/* Este es el "placeholder" por defecto si no se pasa ninguna imagen */}
          Image Placeholder
        </div>
      )}
    </div>
  );

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Renderiza el componente de medios a la izquierda si el prop es "left" */}
        {mediaPosition === "left" && mediaComponent}
        {content}
        {mediaPosition === "right" && mediaComponent}
      </div>
    </section>
  );
}
