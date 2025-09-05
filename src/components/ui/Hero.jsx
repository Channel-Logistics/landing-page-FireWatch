import { LogoSpaceEyes } from '..';
import { VideoFireWatch } from '..';

export default function Hero({
    subtitle = "An AI-powered platform that combines satellite imagery, weather data, and 3D visualization to detect hotspots, send immediate alerts, simulate fire spread, and optimize emergency response with automated reports and community integration.",
}) {
    return (
        <section className="px-4 py-16 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="flex flex-col space-y-6 w-full md:w-1/2">
                    <div className="w-full max-w-[600px]">
                        <img
                            src={LogoSpaceEyes.src}
                            alt={LogoSpaceEyes.alt}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="w-full max-w-2xl">
                        <p className="text-[13px] text-slate-600 leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-xs aspect-square rounded-full overflow-hidden shadow-md mt-10">
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
        </section>
    );
}
