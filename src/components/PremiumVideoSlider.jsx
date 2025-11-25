import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const videos = [
    {
        id: 1,
        videoId: "Scv_A7n9A5I",
        watchUrl: "https://www.youtube.com/watch?v=Scv_A7n9A5I",
        title: "Explore The World",
        subtitle: "Luxury journeys crafted for dreamers.",
    },
    {
        id: 2,
        videoId: "HRgfnVaVbhE",
        watchUrl: "https://www.youtube.com/watch?v=HRgfnVaVbhE",
        title: "Adventure Awaits",
        subtitle: "Experience unforgettable travel moments.",
    },
    {
        id: 3,
        videoId: "aD6KF7e9mxA",
        watchUrl: "https://www.youtube.com/watch?v=aD6KF7e9mxA",
        title: "Live The Journey",
        subtitle: "Premium comfort, premium memories.",
    },
];

export default function PremiumVideoSlider() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const iframeRefs = useRef([]);

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % videos.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered]);

    useEffect(() => {
        // Reset all iframes when current changes
        iframeRefs.current.forEach((iframe, idx) => {
            if (iframe) {
                const videoId = videos[idx].videoId;
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&enablejsapi=1`;
            }
        });
    }, [current]);

    const next = () => setCurrent((prev) => (prev + 1) % videos.length);
    const prev = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

    const handleVideoClick = () => {
        window.open(videos[current].watchUrl, '_blank');
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                {videos.map((video, idx) => (
                    <div
                        key={video.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <iframe
                            ref={(el) => (iframeRefs.current[idx] = el)}
                            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.videoId}&enablejsapi=1`}
                            className="w-full h-full object-cover scale-150"
                            style={{ pointerEvents: 'none' }}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div
                className="relative z-20 h-full flex flex-col justify-end pb-20 px-8 md:px-16"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Text Content with Animation */}
                <div className="max-w-3xl space-y-4 mb-8">
                    <h4
                        key={`title-${current}`}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in"
                    >
                        {videos[current].title}
                    </h4>
                    <p
                        key={`subtitle-${current}`}
                        className="text-xl md:text-2xl text-gray-200 animate-fade-in-delay"
                    >
                        {videos[current].subtitle}
                    </p>

                    {/* Watch Button */}
                    <button
                        onClick={handleVideoClick}
                        className="group mt-6 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                    >
                        <Play className="w-6 h-6 fill-current" />
                        Watch Now
                    </button>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                    {/* Arrow Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex gap-3">
                        {videos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1 rounded-full transition-all ${idx === current ? 'w-12 bg-white' : 'w-8 bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="absolute bottom-8 right-8 hidden lg:flex gap-4 z-30">
                {videos.map((video, idx) => (
                    <button
                        key={video.id}
                        onClick={() => setCurrent(idx)}
                        className={`relative w-32 h-20 rounded-lg overflow-hidden transition-all transform ${idx === current
                                ? 'ring-4 ring-white scale-110'
                                : 'opacity-60 hover:opacity-100 hover:scale-105'
                            }`}
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>
        </div>
    );
}