import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import Layers from "./Layers";
import PrivacyPolicy from "./usefulLinks/PrivacyPolicy";
import TermsConditions from "./usefulLinks/TermsConditions";
import ContactUs from "./usefulLinks/ContactUs";
import AboutUs from "./usefulLinks/AboutUs";

const routeComponents = {
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
  "/privacy-policy": PrivacyPolicy,
  "/terms-and-conditions": TermsConditions, 
  "/contact-us": ContactUs,
  "/about-us": AboutUs,
};

export default function ContentRenderer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const Component = routeComponents[currentPath] || MainContent;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPath]);

  return <Component />;
}
