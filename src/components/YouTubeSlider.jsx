import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const slides = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/Scv_A7n9A5I?1&mute=1&controls=0&showinfo=0&rel=0",
        title: "Explore The World",
        subtitle: "Luxury journeys crafted for dreamers.",
    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/HRgfnVaVbhE?1&mute=1&controls=0&showinfo=0&rel=0",
        title: "Adventure Awaits",
        subtitle: "Experience unforgettable travel moments.",
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/aD6KF7e9mxA?1&mute=1&controls=0&showinfo=0&rel=0",
        title: "Live The Journey",
        subtitle: "Premium comfort, premium memories.",
    },
];

export default function PremiumYouTubeSlider() {
    const [index, setIndex] = useState(0);

    // Auto Slide every 8s
    useEffect(() => {
        const t = setTimeout(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearTimeout(t);
    }, [index]);

    const next = () => setIndex((index + 1) % slides.length);
    const prev = () => setIndex((index - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[30vh] md:h-[90vh] overflow-hidden rounded-2xl shadow-2xl">

            <AnimatePresence>
                <motion.div
                    key={slides[index].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* YouTube Video */}
                   <iframe
                        src={slides[index].url}
                        className="w-full h-full object-cover"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        
                        allowFullScreen
                    ></iframe>
                   
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/40 md:bg-black/30">   <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => window.open(slides[index].url, "_blank")}
                    >
                        </div></div>

                    {/* Text Overlay */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="absolute bottom-16 left-6 md:left-14 text-white"
                    >
                        <h2 className="text-3xl md:text-6xl font-bold drop-shadow-lg">
                            {slides[index].title}
                        </h2>
                        <p className="text-lg md:text-2xl mt-2 opacity-90">
                            {slides[index].subtitle}
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                    onClick={prev}
                    className="p-3 bg-white/20 backdrop-blur-xl hover:bg-white/40 transition rounded-full text-white shadow-xl"
                >
                    <IoChevronBack size={28} />
                </button>

                <button
                    onClick={next}
                    className="p-3 bg-white/20 backdrop-blur-xl hover:bg-white/40 transition rounded-full text-white shadow-xl"
                >
                    <IoChevronForward size={28} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 w-full flex justify-center">
                {slides.map((s, i) => (
                    <BsDot
                        key={i}
                        size={40}
                        className={`cursor-pointer transition ${index === i ? "text-white" : "text-white/50"
                            }`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[3px] bg-white/70"
            />
        </div>
    );
}
