// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Banner1 from "../images/imgswiper/banner-slide-1.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function InidanHolidayBanner() {
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
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            // backgroundImage: `url(${Banner1})`,
            backgroundImage: `url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url('https://img.veenaworld.com/wp-content/uploads/2023/05/Explore-the-Most-Important-Places-to-Visit-near-Shimla.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url('https://travelotouch.com/wp-content/uploads/2019/02/UttrakhandDE.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url('https://img.veenaworld.com/wp-content/uploads/2023/06/Natures-Paradise-Discover-the-Best-Places-To-Visit-in-North-East-India.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url('https://www.andbeyond.com/wp-content/uploads/sites/5/rajasthan-thar-desert-jaiselmer.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
}
