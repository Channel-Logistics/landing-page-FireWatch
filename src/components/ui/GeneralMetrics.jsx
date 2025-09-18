import { metrics, Risk } from "../index";

export default function GeneralMetrics({
    headline = "General risk metrics ",
    highlight = "indicators",
    subtitle = "Each region is assigned a global risk score calculated from environmental and terrain data. This prioritization makes it easier to focus resources where fire risk is greatest.",
}) {
    return (
        <section className="w-full">
            <div
                className="
                    mx-auto max-w-7xl px-4
                    min-h-[calc(100svh-80px)]
                    md:min-h-[calc(100svh-88px)]
                    flex items-center
                    py-10 sm:py-16
                "
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 place-items-center md:place-items-stretch">


                    <div className="md:col-span-7 w-full flex justify-center">
                        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-3xl xl:max-w-[980px] mx-auto">
                            <div className="relative aspect-video md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="h-full w-full rounded-2xl"
                                    src={metrics?.src}
                                    alt="Image Download"
                                />

                            </div>

                            
                            <div className="absolute -bottom-14 -left-4 md:-bottom-20 md:-left-8 lg:-bottom-24 lg:-left-4">
                                <div className="relative w-24 md:w-28 lg:w-32 xl:w-36">
                                    <img
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                        src={Risk?.src}
                                        alt={Risk.alt}
                                    />
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-14 blur-2xl bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-emerald-500/20 rounded-full" />
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col items-center md:items-start md:mt-25 text-center md:text-left ">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            {headline}
                            <span className="text-orange-500"> {highlight}</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-slate-600">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
