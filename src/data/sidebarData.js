import { ChartNoAxesGantt } from 'lucide-react';

export const sidebarSections = [
  {
    id: 'overview',
    title: 'Overview',
    icon: ChartNoAxesGantt,
    items: [{ id: 'docs', title: 'How it works?' }]
  },
  {
    id: 'high-priority',
    title: 'High Priority',
    icon: "/assets/icons/sidebar-high-priority-icon-2.webp",
    items: [{ id: 'high-priority', title: 'High Priority' }]
  },
  {
    id: 'fires',
    title: 'Fires',
    icon: "/assets/icons/flame-icon-stroke.webp",
    items: [
      { id: 'all-fires', title: 'All Fires' },
      { id: 'detail-fire', title: 'Details Fire' }
    ]
  },
  {
    id: 'monitoring-areas',
    title: 'Monitorig Areas',
    icon: "/assets/icons/sidebar-areas-icon.webp",
    items: [{ id: 'monitoring-areas', title: 'Monitoring Areas' }]
  },
  {
    id: 'predictions',
    title: 'Predictions',
    icon: "/assets/icons/prediction-icon-stroke.webp",
    items: [{ id: 'predictions', title: 'Predictions' }]
  },
  {
    id: 'teams',
    title: 'Teams',
    icon: "/assets/icons/sidebar-team-icon.webp",
    items: [{ id: 'teams', title: 'Teams' }]
  },
  {
    id: 'alerts',
    title: 'Alerts',
    icon: "/assets/icons/sidebar-bell-icon.webp",
    items: [{ id: 'alerts', title: 'Alerts' }]
  },
  {
    id: 'forecast',
    title: 'Forecast',
    icon: "/assets/icons/sidebar-cloud-icon.webp",
    items: [{ id: 'forecast', title: 'Forecast' }]
  },
  {
    id: 'raws',
    title: 'Raws',
    icon: "/assets/icons/sidebar-raws-icon.webp",
    items: [{ id: 'raws', title: 'Raws' }]
  },
  {
    id: 'layers',
    title: 'Layers',
    icon: "/assets/icons/layers.webp",
    items: [{ id: 'layers', title: 'Layers' }]
  }
];
