import React from "react";
import { imageDownload } from "..";
import { appleImage } from "..";
import { googleImage } from ".."

export default function SingleShowcase({
    headline = "Mapas inteligentes que ",
    highlight = "predicen el fuego en tiempo real",
    subtitle = "Mapas 3D y capas climáticas dinámicas con datos satelitales y en tiempo real para predecir y monitorear incendios.",
}) {
    return (
        <section className="mx-auto max-w-5xl px-4 py-10 sm:py-16 text-center">
            <div className="w-full overflow-hidden rounded-2xl shadow-md align-middle">
                <img
                    src={imageDownload.src}
                    alt={imageDownload.alt}
                    className="mx-auto w-80 h-auto object-cover"
                />
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    {headline}{" "}
                    <span className="text-orange-500">{highlight}</span>
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-slate-600">{subtitle}</p>

                <div className="flex flex-row flex-wrap justify-center sm:mt-4 mt-4">
                    <a
                        href="https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={appleImage.src}
                            alt={appleImage.alt}
                            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={googleImage.src}
                            alt={googleImage.alt}
                            className="w-[128px] h-[42px] object-contain cursor-pointer"
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}
