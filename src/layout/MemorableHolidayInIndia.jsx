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
export default function MemorableHolidayInIndia() {
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
    fetch("Services/MemorableHoliday.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  if (!services) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div className=" sm:p-12 p-5 text-gray-200">
          <div className="max-w-7xl  mx-auto" >
            <div className="py-6">
              <h2 className="text-center sm:text-3xl text-xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
                Top Destinations For A Memorable Holiday In India
              </h2>
              <br />
              <div className="block justify-center px-4 text-gray-800 text-[15px] font-serif">
                <p className="text-center">
                  We could all use a travel break every now and then. It not
                  only frees you from boredom but also gives you the opportunity
                  to travel. So, if you are prepared to travel to different
                  parts of the nation, feel free to glance over and explore our
                  website. Without a doubt, you will find some of the best India
                  tour packages; select the one that best suits your
                  requirements. A few of the destinations that you can consider
                  visiting in India are as follows:
                </p>
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
                {services.map((B2Cservice, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/indian-holiday-packages/${encodeURIComponent(B2Cservice.UrlTitle)}`}
                    >
                      <div
                        className="relative overflow-hidden sm:w-96 h-[450px] rounded-3xl cursor-pointer "
                        style={{
                          backgroundImage: `url(${B2Cservice.frontImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="z-10 absolute w-full h-full peer"></div>
                        <div className="absolute peer-hover:-top-20  peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full  bg-[#0D0C0C] bg-opacity-75 transition-all duration-500"></div>
                        <div className="absolute flex  items-end justify-start peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full bottom-0 left-0  w-full bg-[#0D0C0C] bg-opacity-75 transition-all duration-500">
                          <div className="text-start p-2">
                            <h2 className="text-yellow-400 text-2xl font-semibold">
                              {B2Cservice.title}
                            </h2>
                            <p className=" sm:text-xs text-normal font-normal ">
                              {B2Cservice.text}
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
            {/* <div className="flex justify-center mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 transform -skew-x-12 focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 shadow-inner ">
                Know More
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
