
export default function ImagePlaceholder({ imageSrc, imageAlt = "", height = "h-48" }) {
    return (
        <div className="flex justify-center items-center w-full">
            <div className={`relative w-4/5 max-w-2xl ${height} bg-white `}>
                {imageSrc && (
                    <div className="absolute inset-4 bg-white">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-contain object-center pointer-events-none select-none"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
