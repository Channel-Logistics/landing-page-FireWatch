import { ChartNoAxesGantt } from 'lucide-react';
import { 
  Warning, 
  Fire, 
  MapPinArea, 
  WarningDiamond, 
  BellSimpleRinging, 
  UsersThree, 
  Cloud, 
  CellTower 
} from '@phosphor-icons/react';

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
    icon: Warning,
    items: [{ id: 'high-priority', title: 'High Priority' }]
  },
  {
    id: 'fires',
    title: 'Fires',
    icon: Fire,
    items: [
      { id: 'all-fires', title: 'Reported Fires' },
      { id: 'detail-fire', title: 'Fire Data' }
    ]
  },
  {
    id: 'monitoring-areas',
    title: 'Monitoring Areas',
    icon: MapPinArea,
    items: [{ id: 'monitoring-areas', title: 'Monitoring Areas' }]
  },
  {
    id: 'predictions',
    title: 'Predictions',
    icon: WarningDiamond,
    items: [{ id: 'predictions', title: 'Predictions' }]
  },
  {
    id: 'teams',
    title: 'Teams',
    icon: UsersThree,
    items: [{ id: 'teams', title: 'Teams' }]
  },
  {
    id: 'alerts',
    title: 'Alerts',
    icon: BellSimpleRinging,
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
    icon: CellTower,
    items: [{ id: 'raws', title: 'Raws' }]
  },
  {
    id: 'layers',
    title: 'Layers',
    icon: "/icons/layers.webp",
    items: [{ id: 'layers', title: 'Layers' }]
  }
];
