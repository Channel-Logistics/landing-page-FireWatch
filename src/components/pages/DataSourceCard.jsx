
export default function DataSourceCard({ icon, title, subtitle, description, iconBgColor, iconColor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 ${iconBgColor} rounded-lg`}>
          <div className={`h-6 w-6 ${iconColor}`}>{icon}</div>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-3">
        <strong>{subtitle}</strong>
      </p>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
