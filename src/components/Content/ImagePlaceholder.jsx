import React from "react";

export default function ImagePlaceholder({ icon, title, subtitle, gradientFrom, gradientTo, iconBgColor, iconColor, height = "h-48" }) {
    return (
        <div className={`relative w-full ${height} bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl overflow-hidden shadow-lg`} >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                <div
                    className={`w-24 h-24 mx-auto ${iconBgColor} rounded-full flex items-center justify-center`}
                >
                    <div className={`w-12 h-12 ${iconColor}`}>{icon}</div>
                </div>
                <p className="text-lg font-medium text-gray-700">{title}</p>
                {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
}
