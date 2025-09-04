import { Wind,Earth,LandPlot,Mail,Bot,DraftingCompass,Smartphone,MapPin, BrickWallFire} from "lucide-react";

const features = [
  { icon: Smartphone,    title: "Compatibilidad multiplataforma",     desc: "acceso desde cualquier dispositivo, garantizando disponibilidad universal." },
  { icon: MapPin, title: "Mapeo 3D de alta resolucion",desc: "visualización detallada del terreno y áreas afectadas." },
  { icon: BrickWallFire,    title: "Actualizaciones de incendios mas confiables y consistentes",     desc: "información precisa sobre incendios en tiempo real (destacado por Kevin Knight)." },
  { icon: DraftingCompass,     title: "Algoritmos predictivos de propagacion",       desc: "simulaciones que anticipan el avance del fuego." },
  { icon: Bot,       title: "Prediccion con IA de posibles puntos de ignicion",    desc: "identifica áreas con mayor riesgo de inicio de incendios." },
  { icon: Mail,      title: "Resumenes automaticos por correo",        desc: "reportes generados automáticamente para usuarios y entidades." },
  { icon: LandPlot, title: "Metricas de riesgo general",      desc: "indicadores que muestran la probabilidad de incendios." },
  { icon: Earth,    title: "Mapas de indice de potencial de incendios forestales",        desc: "pronóstico de incendios forestales en EE. UU." },
  { icon: Wind,  title: "Indicadores climaticos",  desc: "Velocidad del viento, temperatura y precipitaciones: factores clave para calcular el riesgo." },
];

export default function FeaturesCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-gray-100
                       p-6 flex items-start gap-4 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-shadow"
          >
            
            <div className="shrink-0 rounded-xl bg-orange-50 p-3">
              <Icon className="w-6 h-6 text-orange-500" />
            </div>

            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
