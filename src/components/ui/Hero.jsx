import { VideoFireWatch } from '..'; //video
import { LogoSpaceEyes } from '..'; // imagenes

export default function Hero({
  subtitle = "An AI-powered platform that combines satellite imagery, weather data, and 3D visualization to detect hotspots, send immediate alerts, simulate fire spread, and optimize emergency response with automated reports and community integration.",
}) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex-1 max-w-2xl text-center md:text-left">

            <img
              src={LogoSpaceEyes.src}
              alt={LogoSpaceEyes.alt}
              className="w-full max-w-[200px] h-auto md:ml-[65px] mb-4"
            />

            <h1
              className="text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-normal mb-6 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "fireAnimation 3s ease-in-out infinite",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              FireWatch
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative">

              <div
                className="absolute -inset-6 rounded-full opacity-50"
                style={{
                  background: "radial-gradient(circle, transparent 40%, rgba(251, 146, 60, 0.2) 70%, transparent 100%)",
                  animation: "glowPulse 4s ease-in-out infinite"
                }}
              ></div>

              <div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative"
                style={{
                  boxShadow: `
                    0 8px 32px rgba(249, 115, 22, 0.25),
                    0 4px 16px rgba(0, 0, 0, 0.1),
                    inset -8px -8px 24px rgba(0, 0, 0, 0.05),
                    inset 8px 8px 24px rgba(255, 255, 255, 0.9)
                  `,
                  border: "2px solid rgba(255, 255, 255, 0.8)"
                }}
              >
                <video
                  src={VideoFireWatch.src}
                  type="video/mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fireAnimation {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: brightness(1);
          }
          50% { 
            background-position: 100% 50%;
            filter: brightness(1.15);
          }
        }
        
        @keyframes glowPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.05); 
          }
        }
      `}</style>
    </section>
  );
}