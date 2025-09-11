import React from "react";
import { Globe, Flame, BarChart2, Bell, Activity, Shield, Satellite, Thermometer } from "lucide-react";
import FeatureCard from "./FeatureCard";
import DataSourceCard from "./DataSourceCard";
import TechCard from "./TechCard";
import ImagePlaceholder from "./ImagePlaceholder";

export default function WhatIsFireWatch() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          What is FireWatch?
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          FireWatch is a comprehensive real-time wildfire monitoring system that
          provides instant updates on active fires worldwide, combining
          satellite technology, artificial intelligence and predictive
          analytics.
        </p>
      </div>

      <ImagePlaceholder
        icon={<Flame className="w-12 h-12" />}
        gradientFrom="from-orange-100"
        gradientTo="to-red-100"
        iconBgColor="bg-orange-200"
        iconColor="text-orange-600"
        height="h-64 md:h-80"
      />

      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
        <div className="flex items-start space-x-4">
          <Shield className="flex-shrink-0 h-6 w-6 text-orange-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              Your Global Shield Against Wildfires
            </h3>
            <p className="text-orange-700 leading-relaxed">
              FireWatch serves as your protective barrier against wildfire
              spread worldwide, offering advanced monitoring, prediction, and
              response tools for emergency teams and forest authorities. Stay
              informed and stay safe.
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how FireWatch's advanced technology keeps you informed and
            protected
          </p>
        </div>

        <div className="flex flex-wrap gap-8 items-stretch">
          <div className="w-full md:w-[calc(50%-1rem)]">
            <FeatureCard
              icon={<Activity className="h-8 w-8" />}
              title="Real-Time Monitoring"
              description="Get instant updates on wildfire incidents with immediate status changes and containment progress. Our system processes thousands of data points every second to keep you informed with the latest information."
              features={[
                "Updates every 15 minutes",
                "Instant emergency alerts",
                "Response team tracking",
              ]}
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>

          <div className="w-full md:w-[calc(50%-1rem)]">
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Global Coverage"
              description="Monitor wildfires across different regions with integrated data from multiple fire management systems. We cover more than 150 countries with detailed information on each incident, keeping you connected worldwide."
              features={[
                "Coverage in 150+ countries",
                "Integration with local systems",
                "Historical data from 10+ years",
              ]}
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
          </div>

          <div className="w-full md:w-[calc(50%-1rem)]">
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8" />}
              title="AI-Powered Predictions"
              description="Advanced machine learning algorithms provide accurate predictions of fire behavior and risk assessments. Our models have been trained with more than 10 years of historical data to help you stay ahead."
              features={[
                "94% accuracy in predictions",
                "Weather pattern analysis",
                "Real-time risk assessment",
              ]}
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
            />
          </div>
          <div className="w-full md:w-[calc(50%-1rem)]">
            <FeatureCard
                icon={<Bell className="h-8 w-8" />}
                title="Custom Alerts"
                description="Receive instant notifications when fires are detected in your monitored areas. Configure specific alerts by location, intensity and threat type to stay informed and prepared."
                features={[
                  "Email and SMS notifications",
                  "Geographic zone alerts",
                  "Custom threshold configuration",
                ]}
                iconBgColor="bg-red-100"
                iconColor="text-red-600"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Data Sources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FireWatch integrates data from multiple trusted sources to ensure
            accuracy and reliability of monitoring information
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="w-full md:w-[calc(50%-1rem)]">
            <DataSourceCard
              icon={<Flame className="h-6 w-6" />}
              title="CWFIS"
              subtitle="Canadian Wildfire Information System"
              description="Main source of Canadian wildfire data, providing detailed information on active fires, fire history and risk conditions."
              iconBgColor="bg-red-100"
              iconColor="text-red-600"
            />
          </div>

          <div className="w-full md:w-[calc(50%-1rem)]">
            <DataSourceCard
              icon={<Thermometer className="h-6 w-6" />}
              title="RAWS"
              subtitle="Remote Automated Weather Stations"
              description="Real-time weather monitoring for fire conditions, including temperature, humidity, wind speed and precipitation."
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
            />
          </div>

          <div className="w-full md:w-[calc(50%-1rem)]">
            <DataSourceCard
              icon={<Satellite className="h-6 w-6" />}
              title="Satellite Imagery"
              subtitle="High-Resolution Monitoring"
              description="3D terrain visualization and fire detection through next-generation satellites, providing global coverage with resolution up to 10 meters."
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
            />
          </div>

          <div className="w-full md:w-[calc(50%-1rem)]">
            <DataSourceCard
              icon={<Activity className="h-6 w-6" />}
              title="Ground Sensors"
              subtitle="Real-Time Environmental Data"
              description="Distributed sensor network that monitors environmental conditions including temperature, humidity, atmospheric pressure and air quality."
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of cutting-edge AI, big data analytics and 3D
            visualization working together to keep you informed
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex-1 min-w-[200px] max-w-[300px]">
              <TechCard
                icon={<BarChart2 className="w-8 h-8" />}
                title="Big Data Analytics"
                description="Processing millions of data points to identify patterns and trends"
                iconBgColor="bg-blue-100"
                iconColor="text-blue-600"
              />
            </div>
            <div className="flex-1 min-w-[200px] max-w-[300px]">
              <TechCard
                icon={<Activity className="w-8 h-8" />}
                title="Machine Learning"
                description="AI algorithms that continuously improve prediction accuracy"
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
              />
            </div>
            <div className="flex-1 min-w-[200px] max-w-[300px]">
              <TechCard
                icon={<Globe className="w-8 h-8" />}
                title="3D Visualization"
                description="Immersive representation of terrain and real-time fire conditions"
                iconBgColor="bg-purple-100"
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
