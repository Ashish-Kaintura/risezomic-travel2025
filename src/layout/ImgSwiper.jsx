// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../images/imgswiper/banner-slide-1.webp";
import Banner2 from "../images/imgswiper/banner-slide-2.webp";
import Banner3 from "../images/imgswiper/banner-slide-3.webp";
import Banner4 from "../images/imgswiper/banner-slide-4.webp";
import Banner5 from "../images/imgswiper/banner-slide-5.webp";
import Banner6 from "../images/imgswiper/banner-slide-6.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function ImgSwiper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/pdC4sLMK/Corpotate_images_1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Corpotate</span> Travel{" "}
            <span className="text-white"> Redefined </span> Beyond Limits
          </h2>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/FRKq8Xhk/Corpotate_images_2.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" /> */}
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Efficincy</span> Comfort Reliabilty{" "}
            <span className="text-white"> Your </span> Corporate Transport
          </h2>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/K8VqkRL4/Corpotate_images_3.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Include in Opulence</span> Corporate
            Confort
          </h2>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/y8B1DWVh/Corpotate_images_4.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Visa Solution :</span> Tailored{" "}
            <span className="text-white"> To</span> Your{" "}
            <span className="text-white">Need</span>
          </h2>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/pLxWmy2Y/Corpotate_event_images_5.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Seamless Corporate </span> Event
            Execution
          </h2>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-[50vh] object-contain  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url(https://i.postimg.cc/Pr1ff1k6/corpotate_travel_insurance_image_6.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <h2 className="absolute inset-y-0  sm:w-[950px] w-[350px]  text-3xl sm:text-7xl sm:top-[40%] top-[50%] left-[10%] text-yellow-500 font-semibold font-sans">
            <span className="text-white"> Provide </span>
            <br /> Travel Insurance
          </h2>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
