import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Flight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Flight Deals & Lowest Airfare on Tickets | Risezonic Travel</title>
        <meta
          name="description"
          content="Find the best flight deals and lowest airfare on domestic and international tickets with Risezonic Travel. Compare prices, book easily, and enjoy smooth travel planning."
        />
        <link rel="canonical" href="https://www.risezonictravel.com/flights-booking" />
      </Helmet>
      <HomeNav />
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.postimg.cc/s2gSNsqk/flight_booking_image.jpg"
          alt="Flight Booking & Deals"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            Flight Booking & Deals
          </h1>
        </div>
      </div>


      {/* /// */}


      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://www.shutterstock.com/image-photo/commercial-airplane-flying-above-clouds-600nw-553131187.jpg"
              loading="lazy"
              alt="flight booking" className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Preparing to embark on your next grand adventure? Let Risezonic Travel take the stress out of booking your flights. While finding the right flights may prove to be a great challenge, you can rest assured with us that your tour starts on a high note. At Risezonic, instead of arbitrarily providing you with a flight ticket, we help you to create a perfect and affordable trip that is suited for you. Senior travel consultants shall find you the most suitable and affordable flight, whether you are shopping in New Delhi or soaring across the Canadian Rockies. Ready to take flight? Call us today so we can make your traveling be always a great experience that you never wish to end.
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
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl">
              <img
                src={
                  "https://www.informalnewz.com/wp-content/uploads/2022/11/Flight-tickets-1200x1041.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl ">
              <img
                src={
                  "https://www.thesun.co.uk/wp-content/uploads/2021/11/add3a4ba-7c7f-4af1-a849-0e6885122438.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-96 w-28 bg-black rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-150 ease-in  shadow-xl ">
              <img
                src={
                  "https://www.travelandleisure.com/thmb/g88GtwRkLAuhu55e3d402zI_sBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/airline-boarding-SYSTEMGUIDE0717-076f353069d544aba9c68e24ad4349f0.jpg"
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

export default Flight;
