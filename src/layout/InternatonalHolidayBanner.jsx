// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "/micebanner/mice 1.jpg";
import Banner2 from "/micebanner/mice 2.jpg";
import Banner3 from "/micebanner/mice 3.jpg";
import Banner4 from "/micebanner/mice 4.jpg";
import Banner5 from "/micebanner/mice 5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function InternatonalHolidayBanner() {
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
            backgroundImage: `url(${Banner1})`,
            // backgroundImage: `url('https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/country-page-images/japan-page-header.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url(${Banner2})`,
            // backgroundImage: `url('https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1019924119.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg') `,
            backgroundImage: `url(${Banner3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            backgroundImage: `url(${Banner4})`,
            // backgroundImage: `url('https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/hj-web/2015/09/thai-traditional-wooden-longtail-boat-and-blue-sky-in-Maya-bay-Thailand.jpg') `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="w-full sm:h-[700px] h-[400px]  flex justify-center relative"
          style={{
            // backgroundImage: `url('https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe.jpg') `,
            backgroundImage: `url(${Banner5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
}
