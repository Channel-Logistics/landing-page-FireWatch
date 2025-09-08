import { imageDownload } from "..";

export default function PredictAlgoritgms({
  headline = "Predictive propagation  ",
  highlight = "algorithms",
  subtitle = "FireWatch runs advanced simulations that forecast how fires will spread. These predictive models account for terrain, weather, and vegetation to improve preparedness.",
}) {
  return (
  
    <section className="w-full bg-gray-100 h-full">
  
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {headline}
              <span className="text-orange-500"> {highlight}</span>
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
