import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import HomeNav from "../layout/HomeNav";
import Aboutimgslider from "../components/Aboutimgslider";
import Testimonials from "../layout/Testimonial";
import ServicesBlock from "../layout/ServicesBlock";
import SideLinks from "../layout/SideLinks";
import AboutSpecialServices from "../layout/AboutSpecialServices";

import Aboutus1 from "../images/AboutUs/aboutstory-1.webp";
import vision from "../images/AboutUs/vision.webp";
import mission from "../images/AboutUs/mission.webp";

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } }
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Risezonic Travel | Trusted Travel Agency for Holidays & Tours</title>
        <link rel="canonical" href="https://www.risezonictravel.com/about-us" />
        <meta
          name="description"
          content="Risezonic Travel is a trusted travel agency offering customized holiday packages, flights, hotels, group tours, and 24/7 assistance to make every business or leisure journey smooth."
        />
      </Helmet>

      <HomeNav />

      {/* HERO SECTION – Premium Slider */}
      <section className="relative">
        <motion.div variants={fade} initial="hidden" animate="show">
          <Aboutimgslider />
        </motion.div>
      </section>

      {/* ABOUT STORY SECTION */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/40">
        <div className="container mx-auto px-5 lg:flex gap-10 items-start">
          {/* Left Image */}
          <motion.div
            className="w-full lg:w-[550px] h-[650px] overflow-hidden rounded-2xl shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={Aboutus1}
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              alt="About"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex-1 mt-10 lg:mt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              About Risezonic Travel
            </h1>

            <p className="text-gray-600 leading-7 text-lg mb-8">
              Risezonic Travel is Proudly operate as a venture of combining global expertise with trusted travel solutions.
            </p>
            <p className="text-gray-600 leading-7 text-lg mb-8">
              Risezonic Travel is one of the leading business travel agencies,
              that has changed the future of corporate travel. Our amazing
              corporate travel experts provide world-class corporate travel
              management backed by award-winning technology. Business travel
              that just... works.
            </p>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">What we do..</h3>
            <p className="text-gray-600 leading-7 text-lg mb-8">
              You don’t just need to get from A to B. You need an effortless
              experience with seamless technology. We are here to take you
              places – just point the way!!
            </p>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">What we Believe In</h3>
            <p className="text-gray-600 leading-7 text-lg">
              Exceptional journeys require exceptional support. We deliver a
              streamlined, smooth, and premium travel experience at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION SECTION */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl mb-6 h-[580px]">
              <img
                src={vision}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                alt="Vision"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-7 text-lg">
              To become India’s most preferred Corporate Travel Management
              company for all Travel & Hospitality requirements, including
              events. Our goal is to set new benchmarks and achieve 5X growth in
              3 years & 15X in 5 years.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl mb-6 h-[650px]">
              <img
                src={mission}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                alt="Mission"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-7 text-lg">
              To revolutionize Corporate Travel Management in India by providing
              seamless, tech-driven, and sustainable travel solutions powered by
              innovation and exceptional service excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Testimonials />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-r from-black via-black/80 to-black">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <ServicesBlock />
        </motion.div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-white">
        <AboutSpecialServices />
      </section>

      {/* Fixed Side Links */}
      <SideLinks />
    </>
  );
}
