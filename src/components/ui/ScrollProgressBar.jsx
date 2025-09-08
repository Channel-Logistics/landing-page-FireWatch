
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar({ containerRef }) {
  
  const { scrollYProgress } = useScroll({ container: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed left-0 top-0 h-1 w-full bg-orange-500 z-[60] pointer-events-none"
    />
  );
}
