export default function TechCard({ icon, title, description, iconBgColor, iconColor }) {
  return (
    <div className="space-y-3 text-center">
      <div className={`w-16 h-16 mx-auto ${iconBgColor} rounded-full flex items-center justify-center`}>
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
