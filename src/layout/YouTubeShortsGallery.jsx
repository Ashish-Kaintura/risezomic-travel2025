import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

const YoutubeShortsGallery = () => {
  const videoLinks = [
    "https://youtube.com/shorts/f8F8oEHIFfs?si=fyGbXJ1CEfmYY8om",
    "https://youtube.com/shorts/DxvwwN8TfJo?si=pKHvvZL5d4T-fp_t",
    "https://youtube.com/shorts/PndvsLYnLJQ?si=m9uPYzAsOnqdVZlL",
    "https://youtube.com/shorts/cEIEIHOQV4I?si=9vYUPXotgHs8hRn9",
  ];

  // Extract IDs + thumbnails once
  const videos = videoLinks.map((link) => {
    const videoId = new URL(link).pathname.split("/").pop();
    const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    return { id: videoId, thumb };
  });

  return (
    <div className="flex flex-col items-center p-6 md:p-10">
      <h4 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
        YouTube Shorts Gallery
      </h4>

      {/* MOBILE SLIDER */}
      <div className="flex gap-4 overflow-x-auto px-2 pb-5 md:hidden snap-x snap-mandatory">
        {videos.map((v, i) => (
          <div key={i} className="snap-center w-[75%] flex-shrink-0">
            <ShortCard videoId={v.id} thumbnail={v.thumb} />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {videos.map((v, i) => (
          <ShortCard key={i} videoId={v.id} thumbnail={v.thumb} />
        ))}
      </div>
    </div>
  );
};

const ShortCard = ({ videoId, thumbnail }) => {
  const [loaded, setLoaded] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-gray-300 group shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Thumbnail View */}
      {!play && (
        <>
          {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-400" />}

          <img
            src={thumbnail}
            alt="Short Thumbnail"
            className="w-full h-full object-cover"
            onLoad={() => setLoaded(true)}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-200" />

          {/* Play Button */}
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full shadow-xl hover:bg-white/30">
              <FiPlay size={40} className="text-white" />
            </div>
          </button>
        </>
      )}

      {/* Play Video */}
      {play && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}`}
          title="YouTube Shorts Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeShortsGallery;
