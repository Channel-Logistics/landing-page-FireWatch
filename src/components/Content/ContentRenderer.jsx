import React from "react";
import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";
import AllFires from "./AllFires";
import Detailfire from "./DetailFire";
import Forecast from "./Forecast";
import HowItWorks from "./HowItWorks";
import GlobalCoverage from "./MonitoringAreas";
import HighPriority from "./HighPriority";
import Predictions from "./Predictions";
import Teams from "./Teams";
import Raws from "./Raws";
import MainContent from "../pages/MainContent";

const routeComponents = {
  "/docs": MainContent,
  "/how-it-works": HowItWorks,
  "/high-priority": HighPriority,
  "/all-fires": AllFires,
  "/detailfire": Detailfire,
  "/globalCoverage": GlobalCoverage,
  "/predictions": Predictions,
  "/teams": Teams,
  "/alerts": Alerts,
  "/forecast": Forecast,
  "/raws": Raws,
};

export default function ContentRenderer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const Component = routeComponents[currentPath] || MainContent;
  return <Component />;
}
