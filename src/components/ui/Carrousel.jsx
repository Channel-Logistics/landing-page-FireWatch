import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { slides } from "..";

export default function ElegantCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6 items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                relative flex-[0_0_60%] min-w-0 pl-6 
                ${
                  index === selectedIndex
                    ? 'scale-100 opacity-100 filter-none'
                    : 'scale-90 opacity-70 blur-sm'
                }
              `}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-80 object-cover rounded-xl shadow-2xl transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}