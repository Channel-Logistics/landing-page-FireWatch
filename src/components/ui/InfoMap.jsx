import { imageDownload } from "..";

export default function InfoMap({   
    headline = "Wildfire ",
    highlight = "Potential Index maps",
    subtitle = "FireWatch generates Wildland Fire Potential Index (WFPI) maps that are updated daily.",
    supportSubtitle = "These maps show the large-scale wildfire risk in the United States, using multiple real-time variables."
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


                <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        {headline}
                        <span className="text-orange-500"> {highlight}</span>
                    </h2>
                    <p className="mt-3 max-w-xl text-slate-600 mx-auto md:mx-0">
                        {subtitle}
                    </p>
                    <p className="mt-3 max-w-xl text-slate-600 mx-auto md:mx-0">
                        {supportSubtitle}
                    </p>

                    
                </div>
            </div>
        </section>
    );
}
