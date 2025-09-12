import React from "react";

export default function SectionCard({
  icon: Icon,
  title,
  description,
  mediaPosition = "right",
  isMain,
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
      className={`w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 ${
        isMain ? "order-2 lg:order-1" : ""
      }`}
    >
      [Image placeholder: Section Media Example]
    </div>
  );

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {mediaPosition === "left" && mediaComponent}
        {content}
        {mediaPosition === "right" && mediaComponent}
      </div>
    </section>
  );
}