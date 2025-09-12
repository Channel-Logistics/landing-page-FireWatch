import { Globe, AlertTriangle, Flame, BarChart2, Users, Bell, Cloud, Wifi, Package } from 'lucide-react';

export const sidebarSections = [
  {
    id: 'overview',
    title: 'Overview',
    icon: Globe,
    items: [
      { id: 'how-it-works', title: 'What is FireWatch?' }
    ]
  },
  {
    id: 'high-priority',
    title: 'High Priority',
    icon: AlertTriangle,
    items: [{ id: 'high-priority', title: 'High Priority' }]
  },
  {
    id: 'fires',
    title: 'Fires',
    icon: Flame,
    items: [
      { id: 'all-fires', title: 'All Fires' },
      { id: 'detailfire', title: 'Details Fire' }
    ]
  },
  {
    id: 'globalCoverage',
    title: 'Monitorig Areas',
    icon: Globe,
    items: [{ id: 'globalCoverage', title: 'Monitoring Areas' }]
  },
  {
    id: 'predictions',
    title: 'Predictions',
    icon: BarChart2,
    items: [{ id: 'predictions', title: 'Predictions' }]
  },
  {
    id: 'teams',
    title: 'Teams',
    icon: Users,
    items: [{ id: 'teams', title: 'Teams' }]
  },
  {
    id: 'alerts',
    title: 'Alerts',
    icon: Bell,
    items: [{ id: 'alerts', title: 'Alerts' }]
  },
  {
    id: 'forecast',
    title: 'Forecast',
    icon: Cloud,
    items: [{ id: 'forecast', title: 'Forecast' }]
  },
  {
    id: 'raws',
    title: 'Raws',
    icon: Wifi,
    items: [{ id: 'raws', title: 'RAWS' }]
  }
];