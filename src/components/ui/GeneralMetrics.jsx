import { metrics, metricsMobile } from "../index";

export default function GeneralMetrics({
    headline = "Track your ",
    highlight = "Custom Areas",
    subtitle = "Create and monitor custom areas for fire detection. Enable alerts to receive emails when fires are reported within your monitored areas.",
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
                            <div className="relative aspect-[2/1] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="h-full w-full object-cover rounded-xl"
                                    src={metrics?.src}
                                    alt="Track your Custom Areas"
                                />
                            </div>

                            <div className="absolute -bottom-16 right-0 md:-bottom-20 md:right-0 lg:-bottom-24 lg:right-0" style={{ transform: 'translateX(calc(50% - 100px)) translateY(15px)' }}>
                                <div className="relative w-32 md:w-64 lg:w-80 xl:w-96">
                                        <img
                                            className="w-full h-auto object-contain drop-shadow-2xl"
                                            src={metricsMobile?.src}
                                            alt="Custom Areas Mobile"
                                        />
                                    </div>
                                </div>

                            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-14 blur-2xl bg-gradient-to-r from-primary/20 via-primary/20 to-primary/20 rounded-full" />
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