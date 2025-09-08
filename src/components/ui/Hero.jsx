import { VideoFireWatch } from '..';

export default function Hero({
  subtitle = "An AI-powered platform that combines satellite imagery, weather data, and 3D visualization to detect hotspots, send immediate alerts, simulate fire spread, and optimize emergency response with automated reports and community integration",
}) {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h1 
              className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundSize: "200% 200%",
                animation: "fireAnimation 3s ease-in-out infinite"
              }}
            >
              FireWatch
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>
          
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              
              <div 
                className="absolute -inset-8 rounded-full opacity-70"
                style={{
                  background: "radial-gradient(circle, transparent 50%, rgba(249, 115, 22, 0.15) 80%, transparent 100%)",
                  
                }}
              ></div>
              
              
              <div 
                className="w-96 h-96 rounded-full overflow-hidden relative shadow-2xl"
                style={{
                  boxShadow: `
                    0 0 30px rgba(249, 115, 22, 0.3),
                    inset -15px -15px 40px rgba(0, 0, 0, 0.1),
                    inset 15px 15px 40px rgba(255, 255, 255, 0.8)
                  `
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
            filter: brightness(1.1);
          }
        }
        
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes firePulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.3);
            opacity: 0.8;
          }
        }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}


function getFirePointPosition(index) {
  const positions = [
    { top: '15%', left: '20%' },
    { top: '25%', right: '15%' },
    { bottom: '30%', left: '30%' },
    { top: '40%', right: '25%' },
    { bottom: '15%', right: '35%' },
    { top: '10%', left: '50%' },
    { bottom: '40%', left: '50%' },
    { top: '35%', left: '40%' }
  ];
  return positions[index] || positions[0];
}