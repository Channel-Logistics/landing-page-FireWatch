
export default function SectionCard({
  icon: Icon,
  title,
  description,
  mediaPosition = "right",
  imageSrc,
  videoSrc,
  mediaHeight = "h-80",
}) {
  const content = (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        {Icon && <Icon className="h-8 w-8 text-red-500" />}
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const mediaComponent = (
    <div className={`w-full ${mediaHeight} rounded-lg flex items-center justify-center bg-white hover:shadow-xl transition-shadow duration-300`}>
      {videoSrc ? (
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-14 blur-2xl bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-emerald-500/20 rounded-full" />
        </div>
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain object-left rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-50 text-gray-500 flex items-center justify-center rounded-lg hover:shadow-xl transition-shadow duration-300">
          Image Placeholder
        </div>
      )}
    </div>
  );

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {mediaPosition === "left" ? (
          <>
            <div className="order-1 lg:order-1">
              {mediaComponent}
            </div>
            <div className="order-2 lg:order-2">
              {content}
            </div>
          </>
        ) : (
          <>
            <div className="order-1 lg:order-1">
              {content}
            </div>
            <div className="order-2 lg:order-2">
              {mediaComponent}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
