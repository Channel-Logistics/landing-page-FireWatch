import { useEffect, useState } from "react";

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };

export function useIsMobile(bp = "md") {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const max = BREAKPOINTS[bp] - 0.02;
    const mql = window.matchMedia(`(max-width: ${max}px)`);

    const onChange = (e) => setIsMobile(e.matches);
    onChange(mql);

    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [bp]);

  return isMobile;
}
