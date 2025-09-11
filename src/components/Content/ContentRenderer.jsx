import React from "react";
import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";
import AllFires from "./AllFires";
import Forecast from "./Forecast";
import WhatIsFireWatch from "./WhatIsFireWatch";
import GlobalCoverage from "./GlobalCoverage";
import HighPriority from "./HighPriority";
import Interactive3DTerrain from "./Interactive3DTerrain";
import Predictions from "./Predictions";
import Teams from "./Teams";
import RAWS from "./RAWS";
import MainContent from "../pages/MainContent";

const routeComponents = {
  "/docs": MainContent,
  "/what-is-firewatch": WhatIsFireWatch,
  "/high-priority": HighPriority,
  "/all-fires": AllFires,
  "/terrain-3D": Interactive3DTerrain,
  "/globalCoverage": GlobalCoverage,
  "/predictions": Predictions,
  "/teams": Teams,
  "/alerts": Alerts,
  "/forecast": Forecast,
  "/raws": RAWS,
};

export default function ContentRenderer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const Component = routeComponents[currentPath] || MainContent;
  return <Component />;
}
