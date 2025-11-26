// import Navbar from "../layout/Navbar";
import InidanHolidayBanner from "../layout/InidanHolidayBanner";
import HomeNav from "../layout/HomeNav";
import MemorableHolidayInIndia from "../layout/MemorableHolidayInIndia";
import TopDestinationsTable from "../layout/TopDestinationsTable";
// import HoneymonInIndia from "../layout/HoneymonInIndia";
import CyberCitiesTable from "../layout/CyberCitiesTabl";
import ActivityVariousLoaction from "../layout/ActivityVariousLoaction";
import PilgrimagePlaceTable from "../layout/PilgrimagePlaceTable";
import IndianHolidayTips from "../layout/IndianHolidayTips";
import Footer from "../layout/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function IndianTourPackages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Affordable Indian Holiday Packages | Risezonic Travel</title>
        <meta
          name="description"
          content="Explore affordable Indian holiday packages with Risezonic Travel. Enjoy customized itineraries, group tours, flights, hotels, and seamless support for your perfect India trip."
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/Indian-Tour-Packages"
        />
      </Helmet>
      <HomeNav />
      <section className="relative">
        <InidanHolidayBanner />
        {/* Background Image with Overlay */}
       
      </section>
      <section
        className="sm:h-[80vh] items-center flex justify-center"
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
        <div className="py-6">
          <h1 className="text-center text-3xl italic uppercase font-bold text-blue-700 underline decoration-yellow-500 underline-offset-8">
            Affordable Indian Holiday Tour Packages
          </h1>
          <br />
          <div className="block justify-center px-4 text-gray-800 text-[15px]  max-w-7xl mx-auto font-body">
            <p className="text-center">
              Where should you travel on your next holiday in India, you ask?
              Have you found yourself spending hours at home searching the
              internet for the best holiday destinations in India? Well,
              Risezonic Travel is available to assist you. Risezonic Travel
              assists you in selecting the best India tour packages that fit
              your preferences and financial constraints.
            </p>
            <br />
            <p className="text-start">
              Our expectation is to give the customers a desirable and
              unforgettable memory on their mind. The world is already aware of
              the cultural diversity of India where the vibrant hue of various
              traditions and cultures is depicted. However, it’s not just that
              which makes the concept of tourism in India different from other
              countries; the diversified culture and food also make the holiday
              option unique. Starting from the soothing hill stations of North
              and South Indian states, the thrilling waterfalls like Dhuandhar
              Falls of Jabalpur or Athirappilly Falls of Kerala, to rich
              heritage Rajasthan and Madhya Pradesh tourism has it all to
              tantalize your taste buds for travel and discoveries. It is one
              country that would never disappoint and cease to amaze the
              visitors.
            </p>
            <br />
            <p className=" text-center">
              Our extensive selection of India tour packages is tailored
              specifically for our clients, whether they are looking for a
              romantic retreat, family vacation, business trip, wild trip with
              friends, or just a random holiday. There is no doubt that choosing
              a destination would be difficult for you given the wide range of
              travel possibilities available. Risezonic Travel is here to help
              with what is, in fact, one of the most difficult chores. The
              mystic splendor and dynamic cultures of local isms in India draw
              not only domestic tourists but also foreign tour groups.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `
    linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
    linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
  `,
        }}
      >
        <div className="px-4 py-8 max-w-7xl mx-auto">
          <h2 className=" text-3xl italic uppercase font-bold text-gray-200 underline decoration-yellow-500 underline-offset-8">
            Why Choose Risezonic Travel For A Domestic Holiday In India?
          </h2>
          <div className="py-8 text-[15px] font-serif text-gray-200">
            <p>
              You shouldnt skimp on preparation for your trip just because you
              plan to visit places in India. Careful planning is necessary for a
              successful holiday tour in India so that you are prepared for any
              scenario. Because of this, having a reliable travel companion is
              essential, and Risezonic Travel is the best option available. From
              hotels to tours to flights, we handle every detail of your travel
              plan in India. When you reserve your tour with Risezonic Travel,
              you have total control over how it is organized and what areas you
              require help with. You may be certain that you will receive all
              the information well in advance if there is total transparency.
              With Risezonic Travel, you may plan a hassle-free holiday while
              traveling across states and places in India.
            </p>
          </div>
        </div>
      </section>
      <section
        className=""
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
        <MemorableHolidayInIndia />
      </section>
      <section
        style={{
          backgroundImage: `
  linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
`,
        }}
      >
        <div className="py-6">
          <TopDestinationsTable />
        </div>
      </section>
      {/* <section
        className=""
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
        <HoneymonInIndia />
      </section> */}
      <section
        style={{
          backgroundImage: `
  linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
`,
        }}
      >
        <div className="py-6">
          <CyberCitiesTable />
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
        <ActivityVariousLoaction />
      </section>
      <section
        style={{
          backgroundImage: `
  linear-gradient(326deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 6%, rgba(157, 157, 157,0.04) 6%, rgba(157, 157, 157,0.04) 29%, rgba(77, 77, 77,0.04) 29%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(164deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 36%, rgba(157, 157, 157,0.04) 36%, rgba(157, 157, 157,0.04) 61%, rgba(77, 77, 77,0.04) 61%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(336deg, rgba(236, 236, 236,0.04) 0%, rgba(236, 236, 236,0.04) 64%, rgba(157, 157, 157,0.04) 64%, rgba(157, 157, 157,0.04) 69%, rgba(77, 77, 77,0.04) 69%, rgba(77, 77, 77,0.04) 100%),
  linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0))
`,
        }}
        className="py-5 sm:block hidden"
      >
        <PilgrimagePlaceTable />
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
        <IndianHolidayTips />
      </section>
      
    </div>
  );
}
