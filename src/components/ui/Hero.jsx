import { LogoSpaceEyes } from ".."


export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" />

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <img
              src={LogoSpaceEyes.src}
              alt={LogoSpaceEyes.alt}
              className="mx-auto md:mx-0 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-auto "
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
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              An AI-powered platform that combines satellite imagery, weather data, and 3D visualization to detect hotspots, send immediate alerts, simulate fire spread, and optimize emergency response with automated reports and community integration.
            </p>
          </div>

          
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-orange-500 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="text-sm font-medium text-white">Dashboard</div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/30 rounded w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded w-1/2"></div>
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-white/20 rounded"></div>
                      <div className="h-12 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32 sm:h-40 lg:h-48"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(229 231 235)" />
              <stop offset="50%" stopColor="rgb(243 244 246)" />
              <stop offset="100%" stopColor="rgb(255 255 255)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60L48,80C96,100,192,140,288,140C384,140,480,100,576,80C672,60,768,60,864,80C960,100,1056,140,1152,140C1200,140,1248,100,1296,80L1344,60L1344,320L1296,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,24,320L0,320Z"
            fill="#D6D6D6"
          />
        </svg>
      </div>
    </section>
  )
}
