export default function StyleTextCarousel({ label, title, link, linkText }) {
    return (
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center p-10 rounded-xl text-white">
            <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md mb-4 w-fit">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-xl mb-4">
                {title}
            </h2>
            <a
                href={link}
                className="text-white font-semibold hover:underline text-base mt-2 inline-flex items-center"
            >
                {linkText} <span className="ml-2">→</span>
            </a>
        </div>
    );
}