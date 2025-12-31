import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const MeetingAndEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Corporate Event Booking | Risezonic Travel</title>
        <meta
          name="description"
          content="Plan your corporate events with Risezonic Travel — from meetings to incentives and conferences. We handle venue, travel and group bookings with expert support."
        />
        <link
          rel="canonical"
          href="https://www.risezonictravel.com/corporate-event-booking"
        />
      </Helmet>
      <HomeNav />
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.postimg.cc/mgwCjtpW/Corporate_Event_Booking_Planning.jpg"
          alt="Corporate Event Booking & Planning"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            Corporate Event Booking & Planning
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://i.postimg.cc/65SF0gNh/corporate_event_booking_600_by_405.jpg"
              loading="lazy"
              alt="flight booking" className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Besides, offering you best travel insurance solutions, Risezonic Travel is also happy to help you organize meetings and events. Whether you are planning an exquisite corporate event or casual team-building day, our devoted event planners, will ensure your exclusive event comes to life with perfect execution. Take your next event up a notch with Risezonic Travel’s professional skills and commitment to perfection. We will coordinate and manage all the small features of the events with regards to venue, meals, transportation services as well as event technology to make it an ideal event.
             </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href="tel:++918588809690"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transition"
              >
                <IoCall /> Call Now
              </a>

              <a
                href={`https://wa.me/+918588809690?text=Hi, I'm interested in Flight Booking & Deals  package`}
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
        <div className="mt-4 py-8">
          <div className="flex justify-evenly bg-white">
            <div className="w-96 h-96 bg-black overflow-hidden">
              <img
                src={
                  "https://i.postimg.cc/15TbH2Zc/384_by_384.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/L67GTwMk/384_by_384_jpg_02_(2).jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/J4gSqvW4/384_by_384_jpg_03_(2).jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MeetingAndEvent;
