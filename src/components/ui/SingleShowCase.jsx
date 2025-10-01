import { prediction, predictionMobile } from "../index";

export default function SingleShowCase({
    headline = "AI-Powered",
    highlight = " Wildfire Predictions",
    description = " in real time",
    subtitle = "Utilizing cutting-edge AI and machine learning algorithms, FireWatch enables proactive responses and empoweres communities with accurate, actionable insights to mitigate risks effectively.",
}) {
    return (
        <section className="w-full  bg-gray-100">
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
                    <div className="md:col-span-5 flex flex-col items-center md:items-start md:mt-25 text-center md:text-left ">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            {headline}
                            <span className="text-orange-500"> {highlight}</span>{description}
                        </h2>
                        <p className="mt-3 max-w-xl text-slate-600">
                            {subtitle}
                        </p>
                    </div>

                    <div className="md:col-span-7 w-full flex justify-center">
                        <div className="relative w-full max-w-md sm:max-w-lg mx-auto pb-[clamp(5rem,16vw,8rem)] md:hidden">
                            <div className="relative aspect-[2/1] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="h-full w-full object-cover rounded-xl"
                                    src={prediction?.src}
                                    alt="Image Download"
                                />
                            </div>
                            <div className="absolute bottom-[clamp(24px,6vw,56px)] sm:-bottom-16 left-[87%] sm:left-[64%] -translate-x-1/2 z-10">
                                <div className="relative w-[clamp(12rem,40vw,18rem)] sm:w-[clamp(14rem,44vw,18rem)]">
                                    <img
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                        src={predictionMobile?.src}
                                        alt={predictionMobile.alt}
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-14 blur-2xl bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-emerald-500/20 rounded-full" />
                        </div>
                        <div className="relative hidden md:block w-full md:max-w-3xl xl:max-w-[980px] mx-auto">
                            <div className="relative aspect-[2/1] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="h-full w-full object-cover rounded-xl"
                                    src={prediction?.src}
                                    alt="Image Download"
                                />
                            </div>
                            <div className="absolute md:-bottom-20 md:right-0 lg:-bottom-24 lg:right-0" style={{ transform: 'translateX(calc(50% - 100px)) translateY(15px)' }}>
                                <div className="relative md:w-64 lg:w-80 xl:w-96">
                                    <img
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                        src={predictionMobile?.src}
                                        alt={predictionMobile.alt}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
