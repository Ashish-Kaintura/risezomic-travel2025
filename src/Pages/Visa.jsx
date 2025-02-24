import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const VIsa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Best Visa Assistance in Delhi , India</title>
        <meta
          name="description"
          content="We specialize in Assistance and travel packages to other countries including Singapore, Dubai, Canada, Thailand, Europe, and the US."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/Visa" />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" object-center object-contain">
          <img
            className="h-[500px] w-full"
            src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
          />
        </div>
        <h2 className="text-center text-6xl uppercase py-8 font-semibold underline underline-offset-8">
          Visa Assistance
        </h2>
        <div className="flex justify-start gap-x-5 sm: mt-12">
          <div className=" flex ps-5 object-contain w-[500px] ">
            <img
              src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
              loading="lazy"
            />
          </div>
          <div>
            {/* <h2 className="text-4xl uppercase font-semibold flex items-center gap-x-2">
              {service.title}
            </h2> */}
            <p className="flex sm:w-[850px]  p-5 px-0 text-gray-600">
              Experience Extraordinary Adventures with Risezonic Travels - your
              number one Travel Agency near you for Visa Assistance and
              unrivalled travel packages! Adopt a new voyage with Risezonic
              Travels, the leading travel agency in India and your ultimate
              entrance gate to the most thrilling destinations in the world.
              Taking pride at being the best travel agency in Delhi we provide
              visa assistance and exclusive travel packages, tour and travel
              packages, tirupati travel package, kashmir travel packages, dubai
              travel packages, goa travel package, and singapore travel
              package.Our wide-ranging network as a well-known business to
              business travel agency allows us to offer unsullied deals on
              cheaper flight tickets, book cheap flight tickets, cheap domestic
              flight tickets, cheap international flight tickets, and cheap
              flight tickets mumbai. Try to imagine the ease of the direct
              flights such as mumbai to goa flight, mumbai to bangalore flight,
              bangalore to mumbai flight, and the highly desired mumbai to dubai
              flight.Risezonic Travels is not only a travel agency but also a
              reliable companion through your voyage of self-exploration. Our
              visa assistance team, who works full time, simplifies the process
              and maintains a hassle-free journey for you. Transforming your
              travel visions into reality, we will also take care of every
              minute detail as our unparalleled service is our pride. Step into
              a world of great adventures with Risezonic Travels - a travel
              company that will take you to the unknown and unfamiliar. Connect
              with us now and allow our specialists create a dream tour
              exclusively for you. Embrace the beauty of the world and start a
              journey that will alter your vision forever.
            </p>
            <div className="flex gap-x-5">
              <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-x-2 ">
                Call Now <IoCall />
              </button>
              <button className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 flex items-center gap-x-2  ">
                Book Now <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 py-8">
          <div className="flex justify-evenly bg-white">
            <div className="w-96 h-96 bg-black overflow-hidden">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VIsa;
