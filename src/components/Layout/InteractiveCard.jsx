import React from "react";

export default function InteractiveCard({ icon: Icon, title, description, media }) {
  return (
    <div className="space-y-4 p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        {Icon && <Icon className="h-8 w-8 text-purple-600" />}
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-4">
        {media}
      </div>
    </div>
  );
}