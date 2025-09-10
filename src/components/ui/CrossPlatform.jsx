import { SquareArrowOutUpRight } from "lucide-react";
import { imageDownload, appleImage, googleImage } from "..";
import * as motion from "motion/react-client";

export default function CrossPlatform({
    headline = "Cross-platform compatibility ",
    subtitle = "Access FireWatch seamlessly from desktop, tablet, or mobile devices. Its cross-platform design ensures reliable wildfire monitoring anytime, anywhere.",
}) {
    return (
        <section className="w-full h-full bg-gray-100">

            <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
                <div className="flex flex-col md:flex-row items-center gap-10">

                    <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            <span className="text-orange-500">{headline}</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-slate-600 mx-auto md:mx-0">
                            {subtitle}
                        </p>

                        <div className="mt-10 flex justify-center md:justify-start gap-5">
                            <a
                                href="https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download on the App Store"
                            >
                                <motion.img
                                    src={appleImage.src}
                                    alt={appleImage.alt}
                                    className="w-[128px] h-[42px] object-contain cursor-pointer"
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
                                aria-label="Get it on Google Play"
                            >
                                <motion.img
                                    src={googleImage.src}
                                    alt={googleImage.alt}
                                    className="w-[128px] h-[42px] object-contain cursor-pointer"
                                    initial={{ opacity: 0, x: -80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
                                />
                            </a>

                            <div className="h-10 border-l border-gray-300 mx-2"  />

                            <motion.a
                                href="https://firewatch.space-eyes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm sm:text-base md:text-lg font-medium text-orange-600 hover:text-orange-700"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            >
                                <span className="inline-block">or visit our Web Application</span>
                                <span className="inline-block align-middle">
                                    <SquareArrowOutUpRight className="w-3 h-3" />
                                </span>
                            </motion.a>
                        </div>
                    </div>


                    <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                        <img
                            src={imageDownload.src}
                            alt={imageDownload.alt}
                            className="w-[320px] md:w-[400px] h-auto object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
