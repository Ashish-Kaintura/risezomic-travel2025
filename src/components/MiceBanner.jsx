import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

const destinations = [
    {
        image: "https://i.postimg.cc/qvfM3fPG/mice_banner_jpg_01.jpg",
        location: "Bali",
        tagline: "Island of Gods",
        description: "Experience Bali’s serene beaches, lush rice terraces, ancient temples, and world-famous sunsets—perfect for honeymooners and adventure seekers.",
        highlights: ["Uluwatu Temple", "Ubud Rice Terraces", "Kuta & Seminyak Beaches"],
        rating: "4.9"
    },
    {
        image: "https://i.postimg.cc/QdpNg4D6/mice_banner_jpg_02.jpg",
        location: "Italy",
        tagline: "Mediterranean Dreamscape",
        description: "Discover Italy’s iconic Amalfi Coast, known for its cliffside villages, turquoise waters, romantic scenery, and luxury coastal experiences.",
        highlights: ["Positano", "Ravello Gardens", "Amalfi Coastal Drive"],
        rating: "4.8"
    },
    {
        image: "https://i.postimg.cc/0yp5GWvf/mice_banner_jpg_03.jpg",
        location: "Maldives",
        tagline: "Heaven on Earth",
        description: "The Maldives offers crystal-clear lagoons, private water villas, coral reefs, and premium island luxury—ideal for honeymoons and relaxation.",
        highlights: ["Water Villas", "Scuba Diving", "Private Island Resorts"],
        rating: "4.9"
    },
    {
        image: "https://i.postimg.cc/3xgrjShS/mice_banner_jpg_04.jpg",
        location: "Santorini, Greece",
        tagline: "The Aegean Gem",
        description: "Explore Santorini’s whitewashed villages, blue-domed churches, volcanic beaches, and magical sunset views overlooking the caldera.",
        highlights: ["Oia Sunset", "Fira Town", "Red & Black Beach"],
        rating: "4.7"
    },
    {
        image: "https://i.postimg.cc/bwQY0CPV/mice_banner_jpg_05.jpg",
        location: "Thailand",
        tagline: "Land of Smiles",
        description: "Thailand offers stunning tropical beaches, vibrant city life, rich culture, and unforgettable food—perfect for budget and luxury travelers alike.",
        highlights: ["Phuket Beaches", "Bangkok Temples", "Phi Phi Islands"],
        rating: "4.8"
    }


];

export default function MiceBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % destinations.length);
            setImageLoaded(false);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    useEffect(() => {
        setImageLoaded(false);
        const timer = setTimeout(() => setImageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const current = destinations[currentSlide];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0">
                {destinations.map((dest, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className={`w-full h-full transition-transform duration-[8000ms] ease-out ${index === currentSlide && imageLoaded ? 'scale-110' : 'scale-100'
                                }`}
                        >
                            <img
                                src={dest.image}
                                alt={dest.location}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}

                {/* Multi-layer Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" /> */}
            </div>

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-between px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                    {/* Rating Badge */}
                    {/* <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">{current.rating}</span>
                        <span className="text-white/70 text-sm">Rated Destination</span>
                    </div> */}

                    {/* Location with Icon */}
                    {/* <div
                        className={`flex items-center gap-3 mb-4 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <MapPin className="w-8 h-8 text-yellow-500" />
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                            {current.location}
                        </h1>
                    </div> */}

                    {/* Tagline */}
                    {/* <p
                        className={`text-2xl sm:text-3xl lg:text-4xl text-yellow-400 font-light mb-6 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        {current.tagline}
                    </p> */}

                    {/* Description */}
                    {/* <p
                        className={`text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ transitionDelay: '800ms' }}
                    >
                        {current.description}
                    </p> */}

                    {/* Highlights */}
                    {/* <div
                        className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ transitionDelay: '1000ms' }}
                    >
                        {current.highlights.map((highlight, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm hover:bg-white/10 transition-colors"
                            >
                                {highlight}
                            </span>
                        ))}
                    </div> */}

                    {/* CTA Buttons */}
                    {/* <div
                        className={`flex flex-wrap gap-4 transition-all duration-700 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ transitionDelay: '1200ms' }}
                    >
                        <button className="group relative px-8 py-4 bg-yellow-500 text-white font-semibold rounded-full overflow-hidden hover:bg-yellow-600 transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                <FaPhoneAlt className="w-5 h-5" />
                                <Link to="tel:+ 8178857250" >Book Your Trip </Link>

                            </span>
                        </button>
                        <Link to="mailto:info@risezonictravel.com">   <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all hover:scale-105">
                            Explore More
                        </button>


                        </Link>
                    </div> */}
                </div>

                {/* Right Side - Thumbnail Preview (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-col gap-4">
                    {destinations.map((dest, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide
                                ? 'ring-4 ring-yellow-500 scale-110'
                                : 'opacity-50 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={dest.image}
                                alt={dest.location}
                                className="w-full h-full object-cover"
                            />
                            {index === currentSlide && (
                                <div className="absolute inset-0 border-2 border-white/50" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Previous destination"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Next destination"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Bottom Navigation Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-yellow-500 transition-all duration-300 rounded-full"
                                style={{
                                    width: `${((currentSlide + 1) / destinations.length) * 100}%`
                                }}
                            />
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {destinations.map((dest, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className="group relative"
                                    aria-label={`Go to ${dest.location}`}
                                >
                                    <div
                                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                            ? 'w-16 h-3 bg-yellow-500'
                                            : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                                            }`}
                                    />
                                    {index !== currentSlide && (
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {dest.location}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Counter */}
                        <div className="text-white/80 font-light text-sm">
                            <span className="text-2xl font-bold text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
                            <span className="mx-2">/</span>
                            <span>{String(destinations.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-6 sm:right-12 w-px h-24 bg-gradient-to-b from-yellow-500 to-transparent" />
        </div>
    );
}