import React, { useEffect, useState } from "react";
import { slides } from "..";
import StyleTextCarousel from "./TextStylesOfTheCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="w-full max-w-[100vw] overflow-x-hidden bg-gray-100 dark:bg-background">
        <div className="relative w-full mx-auto my-0 h-[32rem] mb-2.5">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden mb-1">
            <div className="absolute inset-y-0 w-full flex items-center justify-between px-4 z-20">
              <button
                onClick={handlePrevClick}
                className="w-14 h-14 flex items-center justify-center text-gray-900 hover:text-white transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={handleNextClick}
                className="w-14 h-14 flex items-center justify-center text-gray-900 hover:text-white transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
            
            {slides.map((slide, index) => {
              const position = getPosition(index);
              const style = getImageStyle(position);
              const isVideo = slide.src.endsWith(".mov");
              return (
                <div
                  key={index}
                  className="absolute h-[32rem] w-[min(90vw,1000px)] transition-all duration-700 ease-in-out bg-gray-50 flex items-center justify-center rounded-xl dark:bg-surface"
                  style={style}
                >
                  {isVideo ? (
                    <video
                      src={slide.src}
                      className="w-full h-full object-cover rounded-xl shadow-2xl bg-gray-50 dark:bg-surface"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-xl bg-gray-50 dark:bg-surface"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex
                ? "bg-orange-500"
                : "bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}