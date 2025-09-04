import { slides } from '..'; 

export default function Hero ({
    headline = "Datos y visualizaciones en  ",
    highlight = "tiempo real",
    subtitle = "Monitoreo con estaciones meteorológicas, capas climáticas dinámicas, detección de calor por satélite, imágenes de calle, alertas locales y simulaciones de propagación con IA.",
}) {
    return (
       <section className="px-8 py-12 max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
      
      <div className="w-[300px] flex justify-center">
        <img 
          src={slides[3].src} 
          alt="Space Eyes Logo" 
          className="w-full h-auto object-contain"
        />
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {headline} <span className="text-orange-500">{highlight}</span>
      </h1>

      <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
        {subtitle}
      </p>
    </section>
    );
}
