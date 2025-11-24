import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { FaSuitcaseRolling, FaMedal, FaUsers, FaRegClock } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

// Swiper (mobile slider)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StatsSection = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            icon: <MdTravelExplore className="text-5xl text-yellow-400 drop-shadow-lg" />,
            value: 30,
            suffix: "+",
            label: "Travel Packages",
        },
        {
            icon: <FaSuitcaseRolling className="text-5xl text-yellow-400 drop-shadow-lg" />,
            value: 1,
            suffix: "",
            label: "Best Travel Agency",
        },
        {
            icon: <FaMedal className="text-5xl text-yellow-400 drop-shadow-lg" />,
            value: 5,
            suffix: "+",
            label: "Awards Won",
        },
        {
            icon: <FaUsers className="text-5xl text-yellow-400 drop-shadow-lg" />,
            value: 1000,
            suffix: "+",
            label: "Happy Customers",
        },
        {
            icon: <FaRegClock className="text-5xl text-yellow-400 drop-shadow-lg" />,
            value: 24,
            suffix: "/7",
            label: "Support Available",
        },
    ];

    // Start animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStartCount(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 md:px-20 bg-black relative overflow-hidden"
            style={{
                backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 60%)
        `,
            }}
        >
            {/* Top Border */}
            <div className="bg-white/10 h-[1px] w-full mb-12"></div>

            {/* ------- DESKTOP GRID -------- */}
            <div className="hidden md:grid grid-cols-5 gap-8">
                {stats.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col items-center 
                hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-2 
                transition-all duration-300"
                    >
                        <div className="mb-4">{item.icon}</div>

                        <h2 className="text-4xl font-bold text-white flex items-center">
                            {startCount ? <CountUp end={item.value} duration={2} /> : "0"}
                            {item.suffix}
                        </h2>

                        <p className="text-lg font-medium text-gray-300 mt-3 text-center">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* ------- MOBILE SLIDER -------- */}
            <div className="md:hidden">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {stats.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 
                    flex flex-col items-center text-center shadow-lg"
                            >
                                <div className="mb-3">{item.icon}</div>

                                <h2 className="text-4xl font-bold text-white flex items-center">
                                    {startCount ? <CountUp end={item.value} duration={2} /> : "0"}
                                    {item.suffix}
                                </h2>

                                <p className="text-lg font-medium text-gray-300 mt-2">
                                    {item.label}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom Border */}
            <div className="bg-white/10 h-[1px] w-full mt-12"></div>
        </section>
    );
};

export default StatsSection;
