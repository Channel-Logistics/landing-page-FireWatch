import { imageDownload } from "..";

export default function CrossPlatform({
  headline = "Cross-platform compatibility ",
  subtitle = "Access FireWatch seamlessly from desktop, tablet, or mobile devices. Its cross-platform design ensures reliable wildfire monitoring anytime, anywhere.",
}) {
  return (
    
    <section className="w-full h-full bg-gray-100">
    
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span className="text-orange-500">{headline}</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-600 mx-auto md:mx-0">
              {subtitle}
            </p>
          </div>

          <div className="flex-shrink-0 md:w-1/2 flex justify-center">
            <img
              src={imageDownload.src}
              alt={imageDownload.alt}
              className="w-[320px] md:w-[400px] h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
