import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";
import AllFires from "./AllFires";
import DetailFire from "./DetailFire";
import Forecast from "./Forecast";
import HowItWorks from "./HowItWorks";
import MonitoringAreas from "./MonitoringAreas";
import HighPriority from "./HighPriority";
import Predictions from "./Predictions";
import Teams from "./Teams";
import Raws from "./Raws";
import MainContent from "../pages/MainContent";
import Layers from "./Layers";

const routeComponents = {
  "/docs": MainContent,
  "/how-it-works": HowItWorks,
  "/high-priority": HighPriority,
  "/all-fires": AllFires,
  "/detail-fire": DetailFire,
  "/monitoring-areas": MonitoringAreas,
  "/predictions": Predictions,
  "/teams": Teams,
  "/alerts": Alerts,
  "/forecast": Forecast,
  "/raws": Raws,
  "/layers": Layers,
};

export default function ContentRenderer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const Component = routeComponents[currentPath] || MainContent;
  return <Component />;
}
