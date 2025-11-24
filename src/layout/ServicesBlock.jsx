import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/less";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
export default function ServicesBlock() {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/Services/servicesData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check if Travel Insurance is included
        setServices(data);
      });
  }, []);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div
          className=" p-12 text-gray-200"
    //       style={{
    //         backgroundImage: `
    //   linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
    //   linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
    //   linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
    //   linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
    // `,
    //       }}
        >
          <div>
            <div className="flex justify-between items-center">
              <div className="py-2">
                <h2 className="italic sm:text-5xl font-heading text-blue-600 text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
                  Services
                </h2>
              </div>
            </div>
            <div className="bg-gray-200 h-[2px] mb-5"></div>
            <div className="mt-4">
              <Swiper
                ref={swiperRef}
                effect={"coverflow"}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={5}
                // loop={true}
                pagination={{
                  type: "fraction",
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                navigation={true}
                autoplay={{
                  delay: 3000, // Autoplay delay in milliseconds
                  disableOnInteraction: false, // Autoplay continues after user interaction
                }}
                modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                breakpoints={{
                  // When window width is <= 320px (e.g., small mobile devices)
                  320: {
                    slidesPerView: 1,
                  },
                  // When window width is <= 480px (e.g., larger mobile devices)
                  480: {
                    slidesPerView: 2,
                  },
                  // When window width is <= 768px (e.g., tablets)
                  768: {
                    slidesPerView: 3,
                  },
                  // When window width is <= 1024px (e.g., small laptops)
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {" "}
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/services/${encodeURIComponent(service.UrlTitle)}`}
                    >
                      <div
                        className="relative overflow-hidden sm:w-96 h-[450px] rounded-3xl cursor-pointer "
                        style={{
                          backgroundImage: `url(${service.frontImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="z-10 absolute w-full h-full peer"></div>
                        <div className="absolute peer-hover:-top-20  peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full  bg-[#0D0C0C] bg-opacity-75 transition-all duration-500"></div>
                        <div className="absolute flex  items-end justify-start peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full bottom-0 left-0  w-full bg-[#0D0C0C] bg-opacity-75 transition-all duration-500">
                          <div className="text-start p-2">
                            <h2 className="text-yellow-400 text-2xl font-semibold">
                              {service.title}
                            </h2>
                            <p className=" sm:text-xs text-normal font-normal ">
                              {service.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-center space-x-8 p-5 ">
                <button
                  className="rounded-full  w-12 h-12 flex justify-center overflow-hidden items-center  bg-blue-500"
                  onClick={goPrev}
                >
                  <BsArrowLeft className="text-3xl font-semibold" />
                </button>
                <button
                  className="rounded-full w-12 h-12 flex justify-center overflow-hidden items-center  bg-blue-500"
                  onClick={goNext}
                >
                  <BsArrowRight className="text-3xl font-semibold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
