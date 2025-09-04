import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { slides } from "..";

export default function EmblaCarousel({
  options = { loop: true, align: "start" },
  headline = "Datos y visualizaciones en  ",
  highlight = "tiempo real",
  subtitle = "Monitoreo con estaciones meteorológicas, capas climáticas dinámicas, detección de calor por satélite, imágenes de calle, alertas locales y simulaciones de propagación con IA.",
}) {
  const [emblaRef] = useEmblaCarousel(options);
  console.log(slides)

  return (
    <div>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {headline} <span className="text-orange-500">{highlight}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      </section>

      <section className="w-full max-w-4xl mx-auto">
        <div className="mx-auto my-8 max-w-2xl overflow-hidden rounded-lg bg-gray-900" ref={emblaRef}>
          <div className="flex">
            {slides.map((img, index) => (
              <div className="embla__slide flex min-w-0 flex-[0_0_100%] items-center justify-center p-4">
                <img key={index} className="h-64 rounded-md object-contain" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
