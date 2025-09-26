
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
    <div className={`w-full ${mediaHeight} rounded-lg flex items-center justify-start`}>
      {videoSrc ? (
        <video
          className="w-full h-full object-contain rounded-lg"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain object-left rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 text-gray-500 flex items-center justify-center rounded-lg">
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
