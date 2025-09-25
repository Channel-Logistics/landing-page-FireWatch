import { SquareArrowOutUpRight } from "lucide-react";
import { appleImage, googleImage } from "..";
import * as motion from "motion/react-client";
import { androidImage, iosImage, laptopImage, multiplatformImage } from "..";

export default function CrossPlatform({
  headline = "Cross-platform compatibility ",
  subtitle =
  "Access FireWatch seamlessly from desktop, tablet, or mobile devices. Its cross-platform design ensures reliable wildfire monitoring anytime, anywhere.",
}) {
  return (
    <section className="w-full">

      <div
        className="
          mx-auto max-w-7xl px-4
          min-h-[calc(100svh-80px)]
          md:min-h-[calc(100svh-88px)]
          grid md:flex
          place-content-center md:place-content-stretch
          py-6 md:py-16
        "
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10">

          <div className="md:col-span-6 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              <span className="text-orange-500">{headline}</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              {subtitle}
            </p>


            <div className="md:hidden mt-6">
              <img
                src={multiplatformImage.src}
                alt={multiplatformImage.alt}
                className="w-[88vw] max-w-[560px] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>


            <div className="mt-6 md:mt-10 flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-5">
              <motion.img
                onClick={() => window.open("https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343", "_blank", "noopener,noreferrer")}
                src={appleImage.src}
                alt={appleImage.alt}
                className="w-[128px] h-[42px] object-contain cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <motion.img
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.nativefirewatch&pcampaignid=web_share&pli=1", "_blank", "noopener,noreferrer")}
                src={googleImage.src}
                alt={googleImage.alt}
                className="w-[128px] h-[42px] object-contain cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              />


              <span className="hidden md:block h-10 w-px bg-gray-300 mx-1" />

              <motion.a
                href="https://firewatch.space-eyes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  gap-1 md:gap-0.5 lg:gap-0
                  whitespace-nowrap leading-none
                  text-base md:text-lg font-medium
                  text-orange-600 hover:text-orange-700
                "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <span>Visit our Web Application</span>
                <SquareArrowOutUpRight className="w-4 h-4 md:ml-1" />
              </motion.a>
            </div>
          </div>


          <div className="hidden md:block md:col-span-6 p-6 rounded-xl">
            <div className="relative w-full max-w-2xl xl:max-w-[980px] aspect-[16/10] mx-auto">
              <div className="pointer-events-none absolute inset-8 rounded-[2rem] bg-gradient-to-tr from-orange-500/10 via-sky-500/10 to-emerald-500/10 blur-2xl" />
              <motion.img
                src={laptopImage.src}
                alt={laptopImage.alt}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[78%] xl:w-[82%] object-contain drop-shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <motion.img
                src={androidImage.src}
                alt={androidImage.alt}
                className="absolute left-2 bottom-4 w-[34%] lg:w-[32%] object-contain -rotate-6 origin-bottom drop-shadow-xl"
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              />
              <motion.img
                src={iosImage.src}
                alt={iosImage.alt}
                className="absolute right-2 bottom-8 w-[32%] lg:w-[30%] object-contain rotate-6 origin-bottom drop-shadow-xl"
                initial={{ opacity: 0, y: 30, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
