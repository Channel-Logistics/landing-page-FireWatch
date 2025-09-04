import React, { useEffect, useRef, useState } from "react";

// Hook para detectar clic fuera
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const SmallVideoCard = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const domNode = useClickOutside(() => setVideoOpen(false));

  return (
    <div ref={domNode} className="w-full max-w-md mx-auto p-4">
      {/* Contenedor de la mini tarjeta */}
      <div className="relative z-10 h-[180px] overflow-hidden rounded-md shadow-lg">
        <img
          src="https://cdn.tailgrids.com/assets/images/core-components/videos/image-01.jpg"
          alt="Video Thumbnail"
          className="h-full w-full object-cover"
        />

        <button
          onClick={() => setVideoOpen(true)}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white"
            className="transition-transform duration-200 hover:scale-110"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Modal de reproducción */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-[560px]">
            <iframe
              className="w-full h-[315px] rounded-md"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />

            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallVideoCard;
