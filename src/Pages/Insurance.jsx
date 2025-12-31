import Footer from "../layout/Footer";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import HomeNav from "../layout/HomeNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Insurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Top rated  Insurance Companies in Delhi , India </title>
        <meta
          name="description"
          content="Risezonic Travel is the Most Trusted  Life Insurance Company in India. "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/Insurance " />
      </Helmet>
      <HomeNav />
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://i.postimg.cc/DwF11qgQ/Travel_Insurance_for_Your_Journey.jpg"
          alt="Insurance by Risezonic Travel"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold uppercase drop-shadow-xl tracking-wide text-center">
            Insurance by Risezonic Travel
          </h1>
        </div>
      </div>


      {/* /// */}


      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://i.postimg.cc/VN7hJV4s/600_by_405.jpg"
              loading="lazy"
              alt="flight booking" className="w-full" />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Risezonic Travel, we understand that your safety and peace of mind are of the utmost importance, which is why we offer comprehensive travel insurance solutions to protect you every step of the way. No matter if you are going on a family vacation or if you’re planning a business trip our insurance specialists will go through your necessities step by step and offer a policy that will give you the most appropriate insurance coverage for your trip. Rely on Risezonic Travel to protect your travels and enhance your most critical meetings and events. Give us a call today to learn how we can support you and be your companion in this journey that you deserve.</p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href="tel:++918588809690"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg transition"
              >
                <IoCall /> Call Now
              </a>

              <a
                href={`https://wa.me/+918588809690?text=Hi, I'm interested in Insurance by Risezonic Travel  package`}
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
                  "https://i.postimg.cc/Gp3NhCPm/384_by_384_jpg_01.jpg"
                }
                alt="flight"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/6QHP8mzW/384_by_384_jpg_02.jpg"
                }
                loading="lazy"
                alt="flight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 bg-black overflow-hidden ">
              <img
                src={
                  "https://i.postimg.cc/ZqfQWMjK/384_by_384_jpg_03.jpg"
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

export default Insurance;
