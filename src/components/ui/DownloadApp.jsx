import { imageDownload } from "..";
import { appleImage } from "..";
import { googleImage } from "..";
import * as motion from "motion/react-client";

export default function SingleShowcase({
    headline = "Smart maps that ",
    highlight = "predict fire",
    description = " in real time",
    subtitle = "3D maps and dynamic climate layers with satellite and real-time data to predict and monitor wildfires.",
}) {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-10">


                <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                   <img
            src={imageDownload.src}
            alt={imageDownload.alt}
            className="w-[320px] md:w-[400px] h-auto object-cover"
          />
                </div>

                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        {headline}
                        <span className="text-orange-500"> {highlight}</span> {description}
                    </h2>
                    <p className="mt-3 max-w-xl text-slate-600 mx-auto md:mx-0">
                        {subtitle}
                    </p>

                    <div className="flex flex-row flex-wrap justify-center md:justify-start sm:mt-6 mt-4">
                        <a
                            href="https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.img
                                src={appleImage.src}
                                alt={appleImage.alt}
                                className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=XXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.img
                                src={googleImage.src}
                                alt={googleImage.alt}
                                className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            />
                        
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
