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
        <title>Best Cruise Booking Deals | Risezonic Travel</title>
        <meta
          name="description"
          content="Book unforgettable cruise vacations with Risezonic Travel. Get great deals on ocean cruises, luxury liners, and group cruises with easy reservations and expert support."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/cruise-booking" />
      </Helmet>
      <HomeNav />
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.postimg.cc/Pq5ZRT0n/Cruise_Booking_image.jpg"
          alt="Cruise Booking Services"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            Cruise Booking Services
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-72604,resizemode-75,msid-104591505/news/international/us/no-ship-for-three-year-cruise-life-at-sea-voyage-delayed-as-company-changes-itinerary-check-new-dates.jpg"
              loading="lazy"
              alt="flight booking" className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Much more than a sightseeing adventure, Risezonic Travel’s exemplary cruise packages promise a thrilling getaway from the mundane. We are your travel companion, and we have sourced the best cruise trips that will get you to remarkable locations and provides ultimate comfort. If you are interested in the calmness of the Mediterranean, the vastness of the Alaska, or the exotic appeal of the Caribbean, our cruise specialists will be with you all the way. Given our extensive contacts within the industry and our unyielding commitment to creating remarkable experiences, your time at sea will be magical. Picture yourself rising to breathtaking seascape vistas, feasting on exquisite meals, and discovering enchanting destinations aboard a luxurious, familiar vessel.  </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href="tel:+8178857250"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transition"
              >
                <IoCall /> Call Now
              </a>

              <a
                href={`https://wa.me/8178857250?text=Hi, I'm interested in Flight Booking & Deals  package`}
                target="_blank"
                className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 flex items-center gap-2 shadow-lg transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY */}

      </section>

      <div className="">



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

  );
};

export default Cruise;
