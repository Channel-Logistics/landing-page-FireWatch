import { LogoSpaceEyes } from ".."
import { VideoFireWatch } from "..";
import { sateliteCenter, satelliteLeft, satelliteRight } from ".."

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-500" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center sm:mt-5">

          <div className="text-center lg:text-left flex flex-col items-center lg:items-start ">
            <img
              src={LogoSpaceEyes.src}
              alt={LogoSpaceEyes.alt}
              className="mx-auto md:mx-0 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-auto "
            />

            <h1
              className="text-4xl sm:text-1xl md:text-[2rem] lg:text-[3.5rem] font-normal-mt-1 sm:-mt-1 leading-[0.9] bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-transparent "
              style={{
                backgroundSize: "200% 200%",
                animation: "fireAnimation 3s ease-in-out infinite",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                filter: "drop-shadow(0 4px 8px rgba(249, 115, 22, 0.2))",
              }}
            >
              FireWatch
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mt-3 sm:mt-4 mb-8 text-pretty leading-relaxed">
              An AI-powered platform that combines satellite imagery, weather data, and 3D visualization to detect hotspots, send immediate alerts, simulate fire spread, and optimize emergency response with automated reports and community integration.
            </p>
          </div>


          <div className="w-full md:w-2xl md:h-full flex justify-center">
            <div className="w-full flex justify-center">
              <div className="relative w-[20rem] sm:w-[26rem] md:w-[26rem] lg:w-[28rem] h-[20rem] sm:h-[26rem] md:h-[26rem] lg:h-[28rem] mt-10">
                <img
                  src={satelliteLeft.src}
                  alt={satelliteLeft.alt}
                  aria-hidden="true"
                  className="absolute pointer-events-none select-none w-12 sm:w-14 md:w-16 lg:w-20 -translate-y-6 sm:-translate-y-8 -left-12 sm:-left-16 md:-left-20 lg:-left-28 top-1/3 sm:top-2/5 float"
                />

                <img
                  src={sateliteCenter.src}
                  alt={sateliteCenter.alt}
                  aria-hidden="true"
                  className="absolute pointer-events-none select-none w-12 sm:w-14 md:w-16 lg:w-20 
             -translate-y-6 sm:-translate-y-8"
                  style={{
                    left: '50%',
                    top: '-6%',                 
                    transform: 'translateX(-50%) rotate(-10deg)',
                  }}
                />

                <img
                  src={satelliteRight.src}
                  alt={satelliteRight.alt}
                  aria-hidden="true"
                  className="absolute pointer-events-none select-none w-12 sm:w-14 md:w-16 lg:w-20 float"
                  style={{
                    right: '-15%',
                    top: '25%',
                  }}
                />


                <video
                  src={VideoFireWatch.src}
                  type="video/mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" mt-10 aspect-square object-cover bg-transparent w-[20rem] sm:w-[26rem] md:w-[26rem] lg:w-[28rem] [clip-path:circle(50%_at_50%_50%)] [mask-image:radial-gradient(circle,black_99%,transparent_100%)]"
                  style={{
                    WebkitMaskImage: "radial-gradient(circle, black 99%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
        <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,260 C80,245 120,235 180,225 C240,215 280,205 340,190 C400,175 440,165 500,155 C560,145 600,140 660,135 C720,130 760,125 820,115 C880,105 920,95 980,80 C1040,65 1080,50 1120,35 C1160,20 1180,15 1200,8 L1200,300 L0,300 Z"
            fill="white"
            className="drop-shadow-sm"
          />
          <path
            d="M0,240 C60,228 100,220 160,212 C220,204 260,198 320,185 C380,172 420,165 480,158 C540,151 580,148 640,145 C700,142 740,140 800,132 C860,124 900,118 960,105 C1020,92 1060,80 1100,65 C1140,50 1170,35 1200,20 L1200,300 L0,300 Z"
            fill="#D6D6D6"
            fillOpacity="0.9"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
    </section>
  )
}
