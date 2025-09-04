import useEmblaCarousel from "embla-carousel-react";
import { slides } from "..";

export default function EmblaCarousel({
  options = { loop: true, align: "start" },
  
}) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div>
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
