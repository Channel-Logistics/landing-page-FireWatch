import { ChartNoAxesGantt } from 'lucide-react';
import sidebarHighPriorityIcon2 from "../assets/icons/sidebar-high-priority-icon-2.webp";
import sidebarAreasIcon from "../assets/icons/sidebar-areas-icon.webp"
import predictionIconStroke from "../assets/icons/prediction-icon-stroke.webp"
import flameIconStroke from "../assets/icons/flame-icon-stroke.webp"
import sidebarTeamIcon from "../assets/icons/sidebar-team-icon.webp"
import sidebarRawsIcon from "../assets/icons/sidebar-raws-icon.webp"
import sidebarCloudIcon from "../assets/icons/sidebar-cloud-icon.webp"
import sidebarBellIcon from "../assets/icons/sidebar-bell-icon.webp"
import layers from "../assets/icons/layers.webp"

export const sidebarSections = [
  {
    id: 'overview',
    title: 'Overview',
    icon: ChartNoAxesGantt,
    items: [
      { id: 'docs', title: 'How it works?' }
    ]
  },
  {
    id: 'high-priority',
    title: 'High Priority',
    icon: sidebarHighPriorityIcon2,
    items: [{ id: 'high-priority', title: 'High Priority' }]
  },
  {
    id: 'fires',
    title: 'Fires',
    icon: flameIconStroke,
    items: [
      { id: 'all-fires', title: 'All Fires' },
      { id: 'detail-fire', title: 'Details Fire' }
    ]
  },
  {
    id: 'monitoring-areas',
    title: 'Monitorig Areas',
    icon: sidebarAreasIcon,
    items: [{ id: 'monitoring-areas', title: 'Monitoring Areas' }]
  },
  {
    id: 'predictions',
    title: 'Predictions',
    icon: predictionIconStroke,
    items: [{ id: 'predictions', title: 'Predictions' }]
  },
  {
    id: 'teams',
    title: 'Teams',
    icon: sidebarTeamIcon,
    items: [{ id: 'teams', title: 'Teams' }]
  },
  {
    id: 'alerts',
    title: 'Alerts',
    icon: sidebarBellIcon,
    items: [{ id: 'alerts', title: 'Alerts' }]
  },
  {
    id: 'forecast',
    title: 'Forecast',
    icon: sidebarCloudIcon,
    items: [{ id: 'forecast', title: 'Forecast' }]
  },
  {
    id: 'raws',
    title: 'Raws',
    icon: sidebarRawsIcon,
    items: [{ id: 'raws', title: 'Raws' }]
  },
  { id: 'layers',
    title: 'Layers',
    icon: layers  ,
    items: [{ id: 'layers', title: 'Layers' }]
  }
];