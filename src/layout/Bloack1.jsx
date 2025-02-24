import React, { useEffect } from "react";
import { useState } from "react";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/less";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Bloack1() {
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
  const [showB2CContent, setShowB2CContent] = useState(false);
  const [showCorporateContent, setShowCorporateContent] = useState(true); // By default, Corporate Deals content is shown

  const toggleB2CContent = () => {
    setShowB2CContent(true);
    setShowCorporateContent(false);
  };

  const toggleCorporateContent = () => {
    setShowB2CContent(false);
    setShowCorporateContent(true);
  };
  const [cordeal, setCordeal] = useState([]);
  const [b2bdeal, setB2Bdeal] = useState([]);
  useEffect(() => {
    fetch("/Deals/CorporateDeals.json")
      .then((resp) => resp.json())
      .then((data) => setCordeal(data));
  }, []);
  useEffect(() => {
    fetch("/Deals/B2BDeals.json")
      .then((respo) => respo.json())
      .then((data) => setB2Bdeal(data));
  }, []);
  if (!cordeal) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section>
        <div className="bg-[#000000] p-12 text-gray-200">
          <div className="flex justify-center gap-x-8">
            {" "}
            <button
              className={`px-5 py-2 text-lg rounded-full font-semibold hover:bg-blue-500  ${
                showB2CContent ? "bg-blue-600" : ""
              }`}
              onClick={toggleB2CContent}
            >
              B2C Deals
            </button>{" "}
            <button
              className={`px-5 py-2 text-lg rounded-full font-semibold hover:bg-blue-500 ${
                showCorporateContent ? "bg-blue-600" : ""
              }`}
              onClick={toggleCorporateContent}
            >
              Corporate Deals
            </button>{" "}
          </div>
          {showB2CContent && (
            <div>
              <div className="flex justify-start items-center sm:gap-x-28">
                <div className="py-5 pb-2 pt-2">
                  <h1 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
                    B2C
                  </h1>
                  <h2 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
                    Deals
                  </h2>
                </div>
              </div>
              <div className="">
                <Swiper
                  ref={swiperRef}
                  effect={"coverflow"}
                  slidesPerView={4}
                  centeredSlides={true}
                  spaceBetween={5}
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
                  {b2bdeal.map((b2bdeal, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <Link to={`/Deals/${encodeURIComponent(b2bdeal.title)}`}>
                        <div
                          className="h-96 sm:w-72 bg-slate-400 rounded-lg outline-offset-4 relative"
                          style={{
                            backgroundImage: `url(${b2bdeal.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="absolute bottom-0 left-0 p-5 bg-[#0D0C0C] backdrop-blur-[1.4495413303375244px] bg-opacity-65 w-full">
                            <h2 className="">
                              {b2bdeal.title}
                              <span className="text-yellow-500">
                                ({b2bdeal.location})
                              </span>
                            </h2>
                            <h3 className=" line-clamp-2">{b2bdeal.Desc}</h3>
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
              <div className="flex justify-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 transform -skew-x-12 focus:ring-4 focus:outline-none focus:ring-blue-300 border-gray-200 border-2">
                  Get Now
                </button>
              </div>
            </div>
          )}
          {showCorporateContent && (
            <div>
              <div className="flex justify-start items-center sm:gap-x-28">
                <div className="py-5 pb-2 pt-2">
                  <h1 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
                    Corporate Travel
                  </h1>
                  <h2 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
                    Deals
                  </h2>
                </div>
              </div>
              <div className="">
                <Swiper
                  ref={swiperRef}
                  effect={"coverflow"}
                  slidesPerView={4}
                  centeredSlides={true}
                  spaceBetween={5}
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
                  {cordeal.map((deal, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <Link to={`/Deals/${encodeURIComponent(deal.title)}`}>
                        <div
                          className="h-96 sm:w-72 bg-slate-400 rounded-lg outline-offset-4 relative"
                          style={{
                            backgroundImage: `url(${deal.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="absolute bottom-0 left-0 p-5 bg-[#0D0C0C] backdrop-blur-[1.4495413303375244px] bg-opacity-65 w-full">
                            <h2>
                              {deal.title}
                              <span className="text-yellow-500">
                                ({deal.location})
                              </span>
                            </h2>
                            <h3 className=" line-clamp-2">{deal.Desc}</h3>
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
              <div className="flex justify-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 transform -skew-x-12 focus:ring-4 focus:outline-none focus:ring-blue-300 border-gray-200 border-2">
                  Get Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
