
export default function FeatureCard({ icon, title, description, features, iconBgColor, iconColor }) {
  return (
    <div className="flex flex-col h-full bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 items-center justify-center">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-3 ${iconBgColor} rounded-lg`}>
          <div className={`h-8 w-8 ${iconColor}`}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 flex-1">{description}</p>

      <ul className="space-y-2 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}
