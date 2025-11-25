import { useEffect } from "react";
import "../App.css";
// import Bloack1 from "../layout/Bloack1";
import ImgSwiper from "../layout/ImgSwiper";
import ServicesBlock from "../layout/ServicesBlock";
import HomeForm from "../layout/HomeForm";
import FAQ from "../layout/FAQ";
import banner from "../video/Risezonic Travel website video.mp4";
import banner2 from "../video/Risezonic Travel website video 2.mp4";
import About1 from "../images/Corporate travel image 2.jpg";
import About2 from "../images/Corporate travel image 1.jpg";
import HomeNav from "../layout/HomeNav";
import SpecialServices from "../layout/SpecialServices";
// import Chatbot from "../layout/Chatbot";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import YoutubeShortsGallery from "../layout/YouTubeShortsGallery";
import StatsSection from "../components/StatsSection";
import PremiumVideoSlider from "../components/PremiumVideoSlider";
import UniversalButton from "../components/UniversalButton";
import useButton from "../hooks/useButton";
import { FaYoutube } from "react-icons/fa";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Poster1 =
    "https://gskworldtravels.com/wp-content/uploads/2023/07/maldives.jpg";
  const { handleButtonClick } = useButton();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Risezonic Travel is the leading Corporate travel agency in India. provide world-class Corporate Flight and hotels deals, Mice events, and corporate fears."
        />
        <title> Corporate Travel & Holiday Tour Packages | Risezonic Travel</title>
        <link rel="canonical" href="https://www.risezonictravel.com/" />
        <meta
          name="description"
          content="Risezonic Travel offers corporate travel management, MICE services, group tours, flights, hotels, and customized holiday tour packages for seamless domestic and international travel Deals."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/" />
      </Helmet>
      <div>
        <HomeNav />
      </div>
      <section className="relative">
        <video
          className="w-full h-screen object-cover "
          poster={Poster1}
          autoPlay
          loop
          muted
          preload="metadata"
          src={banner}
        ></video>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </section>
      <section
        style={{
          backgroundImage: `
    linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
    linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
  `,
        }}
      >
        <h1 className=" sm:text-3xl  text-center sm:py-12 py-4 text-normal uppercase underline font-semibold decoration-yellow-500 underline-offset-8 text-blue-700 font-Heading">
          Trusted Agency for Corporate Travel Deals & Holiday Tour Packages
        </h1>
      </section>
      <section className="">
        {/* not responsive */}
        <div
          className=" flex justify-center py-20 items-center p-4"
          style={{
            backgroundImage: `
      linear-gradient(135deg, transparent 0%, transparent 6%, rgba(71, 71, 71, 0.04) 6%, rgba(71, 71, 71, 0.04) 22%, transparent 22%, transparent 100%),
      linear-gradient(45deg, transparent 0%, transparent 20%, rgba(71, 71, 71, 0.04) 20%, rgba(71, 71, 71, 0.04) 47%, transparent 47%, transparent 100%),
      linear-gradient(135deg, transparent 0%, transparent 24%, rgba(71, 71, 71, 0.04) 24%, rgba(71, 71, 71, 0.04) 62%, transparent 62%, transparent 100%),
      linear-gradient(45deg, transparent 0%, transparent 73%, rgba(71, 71, 71, 0.04) 73%, rgba(71, 71, 71, 0.04) 75%, transparent 75%, transparent 100%),
      linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
    `,
          }}
        >

          <div className="flex flex-wrap  sm:space-x-4">

            <div className="relative  p-8 overflow-hidden h-[550px] sm:w-[540px] w-full  ">
              <div className=" absolute z-10 top-0 left-0 sm:w-[300px] w-[200px]">
                <img
                  className=""
                  height="auto"
                  src={About2}
                  loading="lazy"
                  alt="AboutRisezoniTravel"
                />
              </div>
              <div className=" absolute bottom-0 right-0 sm:w-[400px] w-[300px]">
                <img
                  height="auto"
                  className=""
                  src={About1}
                  loading="lazy"
                  alt="AboutRisezoniTravel"
                />
              </div>
            </div>
            <div className="ps-5 sm:pt-0 pt-5">
              <div>
                <h2 className="sm:text-5xl text-3xl font-semibold">
                  Experience The{" "}
                </h2>
                <h3 className="sm:text-5xl text-3xl font-semibold">
                  Future of Corporate
                </h3>
                <h4 className="sm:text-5xl text-3xl font-semibold">
                  Travel With Us
                </h4>
              </div>
              <div className="sm:w-[450px] pt-5 ">
                <p className="text-lg text-gray-600">
                  The Risezonic Travel Group is a prominent business travel
                  agency at the forefront of reshaping the corporate travel
                  landscape. Our exceptional team of corporate travel experts
                  delivers unparalleled corporate travel management, leveraging
                  their extensive experience and harnessing award-winning
                  technology.
                </p>
                <br />
                <p className="text-lg text-gray-600">
                  Risezonic makes business travel as smooth as sipping your
                  favorite cocktail. With access to the best-in-market
                  technology seamlessly integrated into a globally consistent
                  interface, we ensure effortless bookings and streamlined
                  management of corporate travel arrangements.
                </p>
                <UniversalButton
                  // icon={<IoCall />}
                  label="Kow More"
                  variant="primary"
                  onClick={() =>
                    handleButtonClick({ type: "link", value: "/about-us" })
                  }
                />
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="">
        <ServicesBlock />
      </section>

      <section>
        <ImgSwiper />
      </section>

      <section>
        <HomeForm />
      </section>
      <StatsSection />
      <section className="">
        <div className="w-full  bg-black">
          <video
            className=" w-full"
            autoPlay
            loop
            muted
            src={banner2}
          ></video>
        </div>
      </section>

      <section
      //         style={{
      //           backgroundImage: `
      // linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
      // linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
      // linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
      // linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
      // `,
      //         }}
      >
        <SpecialServices />
      </section>

      <section>
        <FAQ />
      </section>
      <section className="bg-black py-12 px-12">
        <div className="py-5 text-white">
          <h2 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
            Watch Our
          </h2>
          <h2 className="italic sm:text-5xl text-3xl uppercase font-semibold underline decoration-yellow-500 underline-offset-8 pb-4">
            Videos
          </h2>
        </div>
        <div className="py-[1px] bg-gray-100 mb-8"></div>
        {/* <div className="flex flex-wrap sm:justify-evenly justify-center gap-y-4">
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/Scv_A7n9A5I?si=cmnHqr0e9ff4FYsa"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/HRgfnVaVbhE?si=zHYwqfkK6h4K1eLL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/aD6KF7e9mxA?si=IO7EAtb01kxnpRJT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <br />
        <div className="flex flex-wrap sm:justify-evenly justify-center gap-y-4">
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/IsABiTD5An8?si=PoO_FDfMPabgO7KO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/MqGhMi-LEEg?si=mLsWWA3jlyoV_bxA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" border border-white   bg-white rounded-lg outline-offset-4 relative hover:scale-105  overflow-hidden transition-all ease-in duration-150">
            <iframe
              src="https://www.youtube.com/embed/g5hUbfCm_Ls?si=WVUzC6yZ2ikm-rxI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
        {/* <YouTubeSlider /> */}
        <PremiumVideoSlider />
        <YoutubeShortsGallery />
        <div className="flex justify-center mt-4">
          <UniversalButton
            label={"More video"}
            variant="secondary"
            icon={<FaYoutube />}
            onClick={() => handleButtonClick({ type: "link", value: "https://www.youtube.com/@risezonictravel/featured" })}
          />

        </div>
      </section>

      {/* <Chatbot /> */}
      <footer>

      </footer>
      {/* <section>
        <SideLinks />
      </section> */}
    </>
  );
}

export default Home;
