import {logos} from "..";

export default function TrustedBy() {
    return (
        <section className="w-full h-full bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10 place-items-center">
                    {logos.map((logo, i) => (
                        <img
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            className="h-8 sm:h-10 object-contain opacity-100 grayscale contrast-75
                         hover:opacity-100 hover:grayscale-0 transition duration-200"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
