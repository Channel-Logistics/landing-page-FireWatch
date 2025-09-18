import React, { useEffect, useState } from "react";
import { slides } from "..";
import StyleTextCarousel from "./TextStylesOfTheCarousel"

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageStyle = (position) => {
    if (position === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 20,
      };
    } else if (position === 1) {
      return {
        transform: "translateX(100%) scale(0.9)",
        opacity: 0.7,
        filter: "blur(2px)",
        zIndex: 10,
      };
    } else if (position === -1) {
      return {
        transform: "translateX(-100%) scale(0.9)",
        opacity: 0.7,
        filter: "blur(2px)",
        zIndex: 10,
      };
    }

    return { opacity: 0, pointerEvents: "none" };
  };

  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(slides.length - 1)) return 1;
    if (diff === -1 || diff === slides.length - 1) return -1;
    return 2;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (

    <section className="w-full max-w-[100vw] overflow-x-hidden">
      <div className="relative w-full mx-auto my-0 h-[32rem] mb-2.5">

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden mb-1">
          {slides.map((slide, index) => {
            const position = getPosition(index);
            const style = getImageStyle(position);
            const isVideo = slide.src.endsWith(".mp4");
            return (
              <div
                key={index}
                className="absolute h-[32rem] w-[min(90vw,1000px)] transition-all duration-700 ease-in-out
             bg-gray-50  flex items-center justify-center rounded-xl "
                style={style}
              >
                {isVideo ? (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover rounded-xl shadow-2xl bg-gray-50"
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover rounded-xl  bg-gray-50"
                  />
                )}

                {slide.alt === "androidImage" && (
                  <StyleTextCarousel
                    label="HOW IT WORKS"
                    title="AI-powered fire monitoring platform with real-time alerts and updates."
                    link="/how-it-works"
                    linkText="Read the Docs"
                  />
                )}

                {slide.alt === "fotoDos" && (
                  <StyleTextCarousel
                    label="MONITORING AREAS"
                    title="3D maps, live weather data, and accurate predictions to track critical zones."
                    link="/monitoring-areas"
                    linkText="Learn more"
                  />
                )}

                {slide.alt === "fotoUno" && (
                  <StyleTextCarousel
                    label="FIREWATCH PRODUCT"
                    title="All-in-one solution: predictions, automated reports, integration, and local alerts."
                    link="https://firewatch.space-eyes.com/"
                    linkText="Explore FireWatch"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}