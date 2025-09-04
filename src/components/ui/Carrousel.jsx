import useEmblaCarousel from "embla-carousel-react";

export default function Carrousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src="/foto1.png" /></div>
        <div className="embla__slide"><img src="/foto2.jpeg" /></div>
        <div className="embla__slide"><img src="/foto3.png" /></div>
      </div>
    </div>
  );
}
