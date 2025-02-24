import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Cruise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Luxury Cruise Deals | Risezonic Travel</title>
        <meta
          name="description"
          content="Plan your Luxury cruise and make your reservations early to access exclusive deals on  packages and onboard activities with Risezonic Travel. "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/Cruise" />
      </Helmet>
      <HomeNav />
      <div className="">
        <div className=" sm:w-full sm:h-[500px] w-full overflow-hidden flex justify-center">
          <img
            className="w-full h-full object-cover object-center"
            src="https://media.cntraveler.com/photos/64ee0d3dfc1c4bfeb07d7276/master/w_1600%2Cc_limit/Disney%2520Treasure%2520-%2520Exterior%25202.jpg"
            alt="flight booking"
          />
        </div>
        <h2 className="text-center sm:text-6xl text-3xl uppercase py-8 font-semibold underline underline-offset-8">
          Cruise by Risezonic Travel
        </h2>
        <div className="sm:flex block justify-start gap-x-5  sm:mt-12 px-4">
          <div className="flex sm:ps-5 object-contain h-96">
            <img
              src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
              loading="lazy"
            />
          </div>
          <div>
            {/* <h2 className="text -4xl uppercase font-semibold flex items-center gap-x-2">
              {service.title}
            </h2> */}
            <p className="flex sm:w-[850px]  p-5 px-0 text-gray-600">
              Much more than a sightseeing adventure, Risezonic Travel’s
              exemplary cruise packages promise a thrilling getaway from the
              mundane. We are your travel companion, and we have sourced the
              best cruise trips that will get you to remarkable locations and
              provides ultimate comfort. If you are interested in the calmness
              of the Mediterranean, the vastness of the Alaska, or the exotic
              appeal of the Caribbean, our cruise specialists will be with you
              all the way. Given our extensive contacts within the industry and
              our unyielding commitment to creating remarkable experiences, your
              time at sea will be magical. Picture yourself rising to
              breathtaking seascape vistas, feasting on exquisite meals, and
              discovering enchanting destinations aboard a luxurious, familiar
              vessel.
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
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl ">
              <img
                src={
                  "https://cdn.jwplayer.com/v2/media/fONxITlT/poster.jpg?width=720"
                }
                alt="flight"
                loading="lazy"
                className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl "
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                src={
                  "https://a-us.storyblok.com/f/1005231/f5925aff02/carnival-mardi-gras_carnival-cruise-line_article_18717496.jpg"
                }
                loading="lazy"
                alt="flight"
                className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl "
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                src={
                  "https://images.wsj.net/im-924354/?width=2000&size=1.5003750937734"
                }
                loading="lazy"
                alt="flight"
                className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cruise;
