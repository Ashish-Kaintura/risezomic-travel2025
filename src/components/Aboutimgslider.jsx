import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80",
        title: "Corporate Travel",
        highlight: "Redefined",
        subtitle: "Beyond Limits",
        description: "Experience seamless business travel with our premium corporate solutions"
    },
    {
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
        title: "Efficiency",
        highlight: "Comfort & Reliability",
        subtitle: "Your Corporate Transport",
        description: "Professional transportation services tailored for modern businesses"
    },
    {
        // image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
        image: "https://i.postimg.cc/ydCLjtvc/corporate_comfort_image_big.jpg",
        title: "Indulge in Opulence",
        highlight: "Corporate Comfort",
        subtitle: "Premium Travel Experience",
        description: "Luxury meets efficiency in every journey we provide"
    },
    {
        // image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
        image: "https://i.postimg.cc/15vYSW3R/visa_solutions_images_big_size.jpg",
        title: "Visa Solutions",
        highlight: "Tailored",
        subtitle: "To Your Needs",
        description: "Comprehensive visa assistance for global business travel"
    },
    {
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80",
        title: "Seamless Corporate",
        highlight: "Event Execution",
        subtitle: "End-to-End Management",
        description: "From planning to execution, we handle every detail"
    },
    {
        image: "https://i.postimg.cc/XvC2w4c8/travel_insurance_(1).jpg",
        // image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80",
        title: "Travel Insurance",
        highlight: "Comprehensive Coverage",
        subtitle: "Peace of Mind",
        description: "Complete protection for all your business travel needs"
    }
];

export default function PremiumSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setDirection('next');
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setDirection('next');
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setDirection('prev');
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                            }`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center px-6 sm:px-12 lg:px-20">
                            <div className="max-w-4xl">
                                {/* Animated Number */}
                                <div
                                    className={`text-yellow-500/20 font-bold text-8xl sm:text-9xl mb-4 transition-all duration-1000 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: '200ms' }}
                                >
                                    0{index + 1}
                                </div>

                                {/* Title */}
                                <h2
                                    className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-1000 ${index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12'
                                        }`}
                                    style={{ transitionDelay: '400ms' }}
                                >
                                    <span className="text-white">{slide.title}</span>
                                </h2>

                                {/* Highlight */}
                                <h3
                                    className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 mb-2 transition-all duration-1000 ${index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12'
                                        }`}
                                    style={{ transitionDelay: '600ms' }}
                                >
                                    {slide.highlight}
                                </h3>

                                {/* Subtitle */}
                                <p
                                    className={`text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6 transition-all duration-1000 ${index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12'
                                        }`}
                                    style={{ transitionDelay: '800ms' }}
                                >
                                    {slide.subtitle}
                                </p>

                                {/* Description */}
                                <p
                                    className={`text-lg sm:text-xl text-white/70 max-w-xl mb-8 transition-all duration-1000 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: '1000ms' }}
                                >
                                    {slide.description}
                                </p>

                                {/* CTA Button */}
                                <button
                                    className={`group relative px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full overflow-hidden transition-all duration-1000 hover:bg-yellow-400 hover:scale-105 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: '1200ms' }}
                                >
                                    <Link to="tel:8178857250"  >   <span className="relative z-10">Discover More</span> </Link>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <div
                    className="h-full bg-yellow-500 transition-all duration-300"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentSlide ? (
                            <div className="w-12 h-3 rounded-full bg-yellow-500 transition-all duration-300" />
                        ) : (
                            <Circle
                                className="w-3 h-3 text-white/50 hover:text-white/80 transition-colors fill-white/50 hover:fill-white/80"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-8 right-6 sm:right-12 z-20 text-white font-light">
                <span className="text-4xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-white/50 text-xl"> / {String(slides.length).padStart(2, '0')}</span>
            </div>

            {/* Decorative Line */}
            <div className="absolute top-1/2 right-6 sm:right-12 -translate-y-1/2 z-20">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            </div>
        </div>
    );
}