import Footer from "../layout/Footer";
import ImgSwiper from "../layout/ImgSwiper";
import Aboutus1 from "../images/AboutUs/aboutstory-1.webp";
import vision from "../images/AboutUs/vision.webp";
import mission from "../images/AboutUs/mission.webp";
import ServicesBlock from "../layout/ServicesBlock";
import SideLinks from "../layout/SideLinks";
import { useEffect } from "react";
import HomeNav from "../layout/HomeNav";
import { Helmet } from "react-helmet";
import Testimonials from "../layout/Testimonial";
import AboutSpecialServices from "../layout/AboutSpecialServices";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About us | Risezonic Travels</title>
        <link rel="canonical" href="https://www.risezonictravel.com/AboutUs" />
        <meta
          name="description"
          content="India's leading B2B travel Agency | Corporate Travel Management Company in Delhi "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/AboutUs" />
      </Helmet>
      <HomeNav />
      <section className="">
        <ImgSwiper />
      </section>
      <section>
        <div
          className="sm:flex block justify-center py-12 gap-x-8 p-4"
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
          <div className="sm:h-[650px] overflow-hidden sm:w-[550px] ">
            <img
              className=" object-cover "
              src={Aboutus1}
              alt="About"
              loading="lazy"
            />
          </div>
          <div>
            <div>
              <h2 className="sm:text-6xl text-3xl font-bold pb-6 sm:pt-0 pt-4">
                Leaders In Corporate <br /> Travel & Hospitality
              </h2>
            </div>
            <p className="text-gray-600">
              R isezonic Travel is one of the leading business travel agencies,{" "}
              <br />
              that has changed the future of corporate travel. Our amazing{" "}
              <br />
              corporate travel experts provides world-class corporate travel{" "}
              <br />
              management, full fillled by years of experience and backed by{" "}
              <br />
              award-winning technology. Business Travel that just....works. Tha{" "}
              <br />t is business travel with Risezonic Travel – in a nutshell!!
              Using <br />
              best-in market technology available through one globally <br />
              consistent interface, we make bookings and managing corporate{" "}
              <br />
              travel as smooth as your favourite cocktail!! <br />
            </p>
            <h3 className="text-4xl font-bold pb-6 pt-6">What we do..</h3>
            <p className="text-gray-600">
              You don’t just need to get from A to B. You need an effortless{" "}
              <br />
              experience with built-in support and seamless technology to help{" "}
              <br />
              you along the journey. We are here to take you places – just point{" "}
              <br />
              the way!!
            </p>
            <h3 className="text-4xl font-bold pb-6 pt-6">What we Believe In</h3>
            <p className="text-gray-600">
              You don’t just need to get from A to B. You need an effortless{" "}
              <br />
              experience with built-in support and seamless technology to help{" "}
              <br />
              you along the journey. We are here to take you places – just point{" "}
              <br />
              the way!!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="sm:flex block justify-center py-12  text-white gap-x-8"
          style={{
            backgroundImage: `
linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
`,
          }}
        >
          <div>
            <div className="sm:w-[450px] h-[580px] overflow-hidden">
              <img
                className="object-contain h-full w-full"
                src={vision}
                alt="Aboutus"
                loading="lazy"
              />
            </div>

            <div>
              <h1 className="sm:py-5 py-2 sm:px-0 px-4 font-bold sm:text-5xl text-3xl">
                Our Vision
              </h1>
            </div>
            <div>
              <p className="text-gray-200 sm:p-0 p-4">
                To become Indias most preferred Corporate Travel Management{" "}
                <br />
                company for all Travel & Hospitality requirements, including{" "}
                <br />
                events. With an unwavering commitment to unparalleled service{" "}
                <br />
                excellence and a relentless focus on innovation, our goal is to{" "}
                <br />
                set new benchmarks and establish ourselves as the unrivaled{" "}
                <br />
                market leader. We aim to achieve remarkable growth, expanding{" "}
                <br />
                our business by 5X in the next 3 years and 15X in the next 5{" "}
                <br />
                years, solidifying our position as the epitome of the industry.{" "}
                <br />
              </p>
            </div>
          </div>
          <div>
            <div className="sm:w-[650px] h-[750px] overflow-hidden">
              <img
                className="object-contain h-full w-full"
                src={mission}
                alt="Aboutus"
                loading="lazy"
              />
            </div>

            <div>
              <h1 className="sm:py-5 py-2 sm:px-0 px-4 font-bold sm:text-5xl text-3xl">
                Our Mission
              </h1>
            </div>
            <div>
              <p className="text-gray-200 sm:p-0 p-4">
                To revolutionize Corporate Travel Management in India by <br />
                empowering businesses with seamless, sustainable, and <br />
                tech-driven travel solutions. We combine peoples expertise,{" "}
                <br />
                streamlined processes, cutting-edge technology, and relentless{" "}
                <br />
                innovation to deliver service excellence. With a deep commitment{" "}
                <br />
                to exceptional experiences, our mission is to redefine the{" "}
                <br />
                industry landscape, exceeding client expectations and setting{" "}
                <br />
                new standards for Corporate Travel Management in India. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className=" ">
          <Testimonials />
        </section>
      </section>
      <section>
        <ServicesBlock />
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
        <AboutSpecialServices />
      </section>
      <section>
        <SideLinks />
      </section>
      
    </>
  );
}
